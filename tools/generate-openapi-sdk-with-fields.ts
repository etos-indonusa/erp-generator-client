// generate-openapi-sdk-with-fields.ts

import { Project } from 'ts-morph';
import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

// ===================== CONFIG =====================
const [OPENAPI_INPUT, OUTPUT_DIR] = process.argv.slice(2);

const OUTPUT_PATH = path.resolve(process.cwd(), OUTPUT_DIR || 'src/sdk/core');
const MODEL_DIR = path.join(OUTPUT_PATH, 'models');
const FIELDS_DIR = path.join(OUTPUT_PATH, 'dto-to-fields');
const SCHEMA_DIR = path.join(OUTPUT_PATH, 'form-schema');

if (!OPENAPI_INPUT) {
    console.error('❌ Input URL is required.');
    process.exit(1);
}

if (!OPENAPI_INPUT) {
    console.error('❌ Input URL is required.');
    process.exit(1);
}

// ===================== STEP 1: Generate SDK =====================
console.log('🚀 Running ng-openapi-gen...');
execSync(`npx ng-openapi-gen --input ${OPENAPI_INPUT} --output ${OUTPUT_DIR}`, {
    stdio: 'inherit'
});

// ===================== STEP 2: Prepare Folder =====================
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
            .replace(/Dto$/, '')
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

            const defaultVal = isIdField
                ? undefined // skip default untuk ID
                : primitive === 'string' ? '' :
                    primitive === 'boolean' ? false : 0;

            schemaMap[key] = {
                ...(defaultVal !== undefined ? { default: defaultVal } : {}),
                required: isRequired
            };
        });

        // Write dto-fields
        const fieldContent = `export const ${dtoName}DtoFields: Record<string, 'string' | 'boolean' | 'number'> = ${JSON.stringify(fieldMap, null, 2)};\n`;
        fs.writeFileSync(path.join(FIELDS_DIR, `${nama_file.toLowerCase()}-dto.fields.ts`), fieldContent);

        // Write form-schema
        const schemaContent = `export const ${dtoName}FormSchema = ${JSON.stringify(schemaMap, null, 2)};\n`;
        fs.writeFileSync(path.join(SCHEMA_DIR, `${nama_file.toLowerCase()}.form-schema.ts`), schemaContent);

        console.log(`✅ Generated fields and schema for ${dtoName}`);
    });
});

console.log('🎉 Done generating SDK + Form Fields!');

// ===================== STEP 4: Fix exports di models.ts =====================
console.log('🛠  Memperbaiki export type di models.ts...');
const modelsIndexPath = path.join(OUTPUT_PATH, 'models.ts');
if (fs.existsSync(modelsIndexPath)) {
    const content = fs.readFileSync(modelsIndexPath, 'utf8');
    const fixed = content.replace(/^export\s+\{(.+?)\}/gm, 'export type {$1}');
    fs.writeFileSync(modelsIndexPath, fixed);
    console.log('✅ models.ts sudah diganti ke export type');
} else {
    console.warn('⚠️  models.ts tidak ditemukan, skip export fix.');
}


// ===================== STEP 5: Generate index.ts for models/ and services/ =====================
console.log('✅ models.ts sudah diganti ke export type');

// ===================== STEP 5: Generate index.ts for models/ and services/ =====================
function generateBarrelFile(dirPath: string) {
    const files = fs.readdirSync(dirPath)
        .filter(file => file.endsWith('.ts') && file !== 'index.ts')
        .map(file => {
            const name = path.basename(file, '.ts');
            return `export * from './${name}';`;
        })
        .join('\n');

    fs.writeFileSync(path.join(dirPath, 'index.ts'), files);
    console.log(`📦 index.ts generated for ${dirPath}`);
}

const servicesDir = path.join(OUTPUT_PATH, 'services');
if (fs.existsSync(MODEL_DIR)) generateBarrelFile(MODEL_DIR);
if (fs.existsSync(servicesDir)) generateBarrelFile(servicesDir);

console.log('🎉 SDK, Fields, Schema, and index.ts generation complete!');
