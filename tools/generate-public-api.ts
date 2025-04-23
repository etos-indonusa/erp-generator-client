import * as fs from 'fs';
import * as path from 'path';

const SDK_LIB_PATH = path.resolve('projects/sdkcore/src/lib');
const PUBLIC_API_PATH = path.resolve(SDK_LIB_PATH, '../public-api.ts');

const folders = ['dto-to-fields', 'fn', 'form-schema', 'models', 'services'];

let exportLines: string[] = [];

folders.forEach(folder => {
    const folderPath = path.join(SDK_LIB_PATH, folder);
    if (!fs.existsSync(folderPath)) return;

    const files = fs.readdirSync(folderPath)
        .filter(f => f.endsWith('.ts') && f !== 'index.ts')
        .map(f => f.replace(/\.ts$/, ''));

    files.forEach(file => {
        exportLines.push(`export * from './lib/${folder}/${file}';`);
    });
});

fs.writeFileSync(PUBLIC_API_PATH, exportLines.join('\n') + '\n');
console.log(`✅ public-api.ts generated at: ${PUBLIC_API_PATH}`);
