import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

// CONFIG
const sdkName = 'sdkcore';
const sdkName_nama_paket = 'sdkcore';
const projectDistPath = path.resolve(process.cwd(), `dist/${sdkName}`);
const projectPackageJson = path.join(projectDistPath, 'package.json');

// Step 1: Build SDK
console.log('📦 Building SDK...');
execSync(`ng build ${sdkName}`, { stdio: 'inherit' });

// Step 2: Perbaiki package.json
if (fs.existsSync(projectPackageJson)) {
    const pkg = JSON.parse(fs.readFileSync(projectPackageJson, 'utf-8'));

    pkg.main = 'fesm2022/de-sdk-core.mjs';
    pkg.module = 'fesm2022/de-sdk-core.mjs';
    pkg.typings = 'index.d.ts';
    pkg.exports = {
        ".": {
            "types": "./index.d.ts",
            "esm2022": "./esm2022/de-sdk-core.mjs",
            "esm": "./esm2022/de-sdk-core.mjs",
            "default": "./fesm2022/de-sdk-core.mjs"
        },
        "./package.json": {
            "default": "./package.json"
        }
    };

    fs.writeFileSync(projectPackageJson, JSON.stringify(pkg, null, 2));
    console.log('✅ Fixed SDK package.json');
} else {
    console.error('❌ Gagal menemukan package.json hasil build!');
    process.exit(1);
}

// Step 3: Publish with yalc
console.log('🚀 Publishing to yalc...');
execSync(`yalc publish --push`, { cwd: projectDistPath, stdio: 'inherit' });

console.log('🎉 SDK published to yalc successfully!');

// Step 4: Add to current project
console.log('🔗 Linking to current project...');
const projectRoot = path.resolve(__dirname, '../');

execSync(`yalc add ${sdkName}`, { cwd: projectRoot, stdio: 'inherit' });
execSync(`npm install`, { cwd: projectRoot, stdio: 'inherit' });
