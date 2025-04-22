import { Project } from 'ts-morph';
import { execSync } from 'child_process';
import * as fs from 'fs-extra';
import * as path from 'path';
import stripJsonComments from 'strip-json-comments';
import * as JSON5 from 'json5';

// ===================== CONFIG =====================
const [OPENAPI_INPUT, OUTPUT_DIR_ARG] = process.argv.slice(2);
if (!OPENAPI_INPUT) {
    console.error('❌ Input URL is required. Example: ts-node tools/generate-openapi-sdk-with-fields.ts http://localhost:3000/api-json');
    process.exit(1);
}

const OUTPUT_PATH = path.resolve(process.cwd(), OUTPUT_DIR_ARG || 'packages/sdkcore');
const MODEL_DIR = path.join(OUTPUT_PATH, 'models');
const FIELDS_DIR = path.join(OUTPUT_PATH, 'dto-to-fields');
const SCHEMA_DIR = path.join(OUTPUT_PATH, 'form-schema');


// ===================== STEP 1: Generate SDK =====================
console.log('🚀 Generating SDK from OpenAPI...');
execSync(`npx ng-openapi-gen --input ${OPENAPI_INPUT} --output ${OUTPUT_PATH}`, {
    stdio: 'inherit'
});

// ===================== STEP 2: Prepare additional folders =====================
fs.mkdirSync(FIELDS_DIR, { recursive: true });
fs.mkdirSync(SCHEMA_DIR, { recursive: true });

// ===================== STEP 3: Parse Models =====================
console.log('🔍 Parsing DTOs...');
const project = new Project();
project.addSourceFilesAtPaths(path.join(MODEL_DIR, '*.ts'));

const typeToPrimitive = (t: string): 'string' | 'boolean' | 'number' => {
    if (t.includes('string')) return 'string';
    if (t.includes('boolean')) return 'boolean';
    if (t.includes('number') || t.includes('integer')) return 'number';
    return 'string';
};

project.getSourceFiles().forEach(file => {
    file.getInterfaces().forEach(intf => {
        const name = intf.getName();
        if (!name.endsWith('Dto')) return;

        const dtoName = name.replace(/Dto$/, '');
        const fieldMap: Record<string, string> = {};
        const schemaMap: Record<string, any> = {};

        const nama_file = dtoName
            .replace(/([a-z])([A-Z])/g, '$1-$2')
            .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
            .toLowerCase();

        intf.getProperties().forEach(p => {
            const key = p.getName();
            const type = p.getType().getText();
            const isRequired = !p.hasQuestionToken();
            const primitive = typeToPrimitive(type);
            fieldMap[key] = primitive;

            const isIdField = key.toLowerCase().startsWith('id') && primitive === 'string';
            const defaultVal = isIdField ? undefined :
                primitive === 'string' ? '' :
                    primitive === 'boolean' ? false : 0;

            schemaMap[key] = {
                ...(defaultVal !== undefined ? { default: defaultVal } : {}),
                required: isRequired
            };
        });

        fs.writeFileSync(path.join(FIELDS_DIR, `${nama_file}-dto.fields.ts`),
            `export const ${dtoName}DtoFields: Record<string, 'string' | 'boolean' | 'number'> = ${JSON.stringify(fieldMap, null, 2)};\n`
        );
        fs.writeFileSync(path.join(SCHEMA_DIR, `${nama_file}.form-schema.ts`),
            `export const ${dtoName}FormSchema = ${JSON.stringify(schemaMap, null, 2)};\n`
        );
        console.log(`✅ Fields + Schema generated for ${dtoName}`);
    });
});

// ===================== STEP 4: Fix exports di models.ts =====================
const modelsIndexPath = path.join(OUTPUT_PATH, 'models.ts');
if (fs.existsSync(modelsIndexPath)) {
    const content = fs.readFileSync(modelsIndexPath, 'utf8');
    const fixed = content.replace(/^export\s+\{(.+?)\}/gm, 'export type {$1}');
    fs.writeFileSync(modelsIndexPath, fixed);
    console.log('🛠  Fixed export type in models.ts');
}

// ===================== STEP 5: Generate index.ts in all folders =====================
function generateBarrelFile(dirPath: string) {
    const files = fs.readdirSync(dirPath)
        .filter(file => file.endsWith('.ts') && file !== 'index.ts')
        .map(file => `export * from './${file.replace('.ts', '')}';`)
        .join('\n');
    fs.writeFileSync(path.join(dirPath, 'index.ts'), files);
    console.log(`📦 index.ts generated for ${dirPath}`);
}

['models', 'services', 'dto-to-fields', 'form-schema'].forEach(sub => {
    const fullPath = path.join(OUTPUT_PATH, sub);
    if (fs.existsSync(fullPath)) generateBarrelFile(fullPath);
});


// ===================== STEP 0: Prepare SDK folder and config =====================
fs.ensureDirSync(OUTPUT_PATH);
if (!fs.existsSync(path.join(OUTPUT_PATH, 'package.json'))) {
    fs.writeJsonSync(path.join(OUTPUT_PATH, 'package.json'), {
        name: 'de-sdk-core',
        version: '1.0.0',
        main: 'index.ts',
        types: 'index.ts'
    }, { spaces: 2 });
}

const tsconfigSdkPath = path.join(OUTPUT_PATH, 'tsconfig.json');
if (!fs.existsSync(tsconfigSdkPath)) {
    fs.writeJsonSync(tsconfigSdkPath, {
        extends: '../../tsconfig.json',
        compilerOptions: {
            composite: true,
            declaration: true,
            declarationMap: true,
            emitDeclarationOnly: true,
            outDir: '../../dist/sdkcore'
        },
        include: ['./**/*.ts']
    }, { spaces: 2 });
}

// Update root tsconfig paths safely (with comment stripping)
const tsconfigPath = path.resolve('tsconfig.json');
if (fs.existsSync(tsconfigPath)) {
    const raw = fs.readFileSync(tsconfigPath, 'utf-8');
    const clean = stripJsonComments(raw);
    const tsconfig = JSON5.parse(clean);

    tsconfig.compilerOptions = tsconfig.compilerOptions || {};
    tsconfig.compilerOptions.paths = tsconfig.compilerOptions.paths || {};
    tsconfig.compilerOptions.paths['sdkcore'] = [path.join(OUTPUT_PATH, 'index.ts')];

    fs.writeJsonSync(tsconfigPath, tsconfig, { spaces: 2 });
}


// ===================== STEP 6: Build SDK using tsc =====================
console.log('🛠  Building SDK library...');
try {
    execSync(`tsc -p ${tsconfigSdkPath}`, { stdio: 'inherit' });
    console.log('✅ SDK built successfully!');
} catch (e: any) {
    console.error('❌ Build failed:', e.message);
    process.exit(1);
}


// ===================== STEP 7: Publish via yalc =====================
try {
    console.log('📦 Publishing to local yalc registry...');
    execSync('yalc publish --push', {
        cwd: OUTPUT_PATH,
        stdio: 'inherit'
    });
    console.log('✅ yalc publish --push completed!');
} catch (e: any) {
    console.error('❌ Failed to publish with yalc:', e.message);
}

// ===================== STEP 8: Add to project using yalc add =====================
try {
    console.log('🔗 Linking SDK into project with yalc add...');
    execSync('yalc add de-sdk-core', {
        stdio: 'inherit'
    });
    console.log('✅ yalc add de-sdk-core completed!');
} catch (e: any) {
    console.error('❌ Failed to link SDK using yalc add:', e.message);
}