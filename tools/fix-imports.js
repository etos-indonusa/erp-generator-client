const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        const dirPath = path.join(dir, f);
        const isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
}

function fixImportInFile(filePath) {
    if (!filePath.endsWith('.ts')) return;

    let content = fs.readFileSync(filePath, 'utf8');

    const patterns = [
        /from\s+['"]de-sdk-jasa\/lib\/form-schema\/[^'"]+['"]/g,
        /from\s+['"]de-sdk-jasa\/lib\/services\/[^'"]+['"]/g,
        /from\s+['"]de-sdk-jasa\/lib\/models\/[^'"]+['"]/g,
        /from\s+['"]de-sdk-jasa\/lib\/services['"]/g, 
        /from\s+['"]de-sdk-jasa\/lib\/models['"]/g, 
    ];

    let newContent = content;
    patterns.forEach(pattern => {
        newContent = newContent.replace(pattern, `from 'de-sdk-jasa'`);
    });

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`✅ Fixed: ${filePath}`);
    }
}

walk(baseDir, fixImportInFile);