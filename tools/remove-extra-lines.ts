import * as fs from 'fs';

const args = process.argv.slice(2);
const filePath = args[0];

if (!filePath || !fs.existsSync(filePath)) {
    console.error('❌ File path tidak ditemukan.');
    process.exit(1);
}

let content = fs.readFileSync(filePath, 'utf-8');

// 1. Hilangkan *ngIf="data?.xxx !== undefined && data?.xxx !== null"
content = content.replace(/\*ngIf="data\?\.(\w+) !== undefined && data\?\.\1 !== null"/g, '');

// 2. Hapus <br> kosong di antara elemen
content = content.replace(/\n\s*<br>\s*\n/g, '\n');

// 3. Gabungkan <div> yang terpisah oleh line kosong
content = content.replace(/(<\/div>\s*)\n{2,}(\s*<div class="col-md-3")/g, '$1\n$2');

// 4. Hapus baris kosong berlebih (lebih dari 1 newline)
content = content.replace(/\n{3,}/g, '\n\n');

// 5. Hapus spasi di akhir file
content = content.replace(/\s+$/, '');

fs.writeFileSync(filePath, content, 'utf-8');
console.log(`✅ Cleaned & compacted: ${filePath}`);
