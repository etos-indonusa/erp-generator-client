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

// ✅ TAMBAHAN untuk refactor <div class="col-12 mt-4"> dan <div class="fw-bold border-bottom
content = content.replace(
    /<div class="col-12 mt-4(.*?)>\s*\n\s*<div class="fw-bold border-bottom[^>]*>\s*(.*?)\s*<\/div>\s*<div class="row">/g,
    (match, attrAfterMt4, titleBlock) => {
        const titleKeyMatch = titleBlock.match(/\{\{\s*'([^']+)'/);
        let titleKey = titleKeyMatch ? titleKeyMatch[1] : 'expand';

        // Ganti titik ke underscore
        titleKey = titleKey.replace(/\./g, '_');
        titleKey = titleKey.replace(/([A-Z])/g, '_$1').toLowerCase();

        const expandId = `expand_${titleKey}`;

        return `<div class="col-12 {{ ${expandId}.hidden ? 'mb-0' : 'mb-4' }} ${attrAfterMt4}>
    <div class="fw-bold border-bottom mb-2">
      ${titleBlock}
      <button class="btn btn-link btn-sm" (click)="${expandId}.hidden = !${expandId}.hidden">
        <span *ngIf="${expandId}.hidden">Expand</span>
        <span *ngIf="!${expandId}.hidden">Collapse</span>
        <span *ngIf="${expandId}.hidden" nz-icon nzType="down" nzTheme="outline"></span>
        <span *ngIf="!${expandId}.hidden" nz-icon nzType="up" nzTheme="outline"></span>
      </button>
    </div>
    <div class="row" #${expandId} hidden>`;
    }
);


// ✅ Tambahan: Replace semua date:'short' ➔ date:'2025-01-14'
content = content.replace(/date\s*:\s*'short'/g, `date: 'yyyy-MM-dd'`);

// 8. Hapus semua blok <div class="col-md-3">...</div> yang memuat {{ data?.idXxxx }}
content = content.replace(
    /<div class="col-md-3">[\s\S]*?<div class="text-secondary small">\s*\{\{\s*'id[^']+'\s*\|\s*translate\s*\}\}\s*<\/div>[\s\S]*?<div class="fw-semibold text-dark">\s*\{\{\s*data\?\.\s*id\w+\s*\|\|\s*'-'\s*\}\}\s*<\/div>[\s\S]*?<\/div>/g,
    ''
);

// 8. ✅ Replace semua {{ data.xxx }} ➔ {{ data?.xxx }}
content = content.replace(/\bdata\.(\w+)/g, 'data?.$1');


// Save hasilnya
fs.writeFileSync(filePath, content, 'utf-8');
console.log(`✅ Cleaned & refactored: ${filePath}`);
