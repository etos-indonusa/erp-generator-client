import * as fs from 'fs';
import * as path from 'path';
import * as ejs from 'ejs';
import * as fse from 'fs-extra';

const nama = process.argv[2];

if (!nama) {
    console.error('❌ Nama modul wajib diisi. Contoh: npm run generate:crud users');
    process.exit(1);
}

const Nama = nama.charAt(0).toUpperCase() + nama.slice(1);
const NAMA = nama.toUpperCase();

const templateDir = path.resolve('tools/templates/crud-standart');
const outputDir = path.resolve('src/app/views/modules', nama);

// ⬇️ Fungsi ganti nama file/folder
function renderName(input: string): string {
    return input.replace(/__nama__/g, nama);
}

// ⬇️ Fungsi ambil field string dari DTO
function getSearchableFieldsFromDto(dtoPath: string): string[] {
    const dtoContent = fs.readFileSync(dtoPath, 'utf-8');
    const regex = /(\w+):\s+(string|String);/g;

    const blacklist = ['id_', 'created', 'updated', 'date', 'tanggal'];

    const fields: string[] = [];
    let match;
    while ((match = regex.exec(dtoContent)) !== null) {
        const name = match[1];
        const isBlacklisted = blacklist.some(b => name.toLowerCase().includes(b));
        if (!isBlacklisted) {
            fields.push(name);
        }
    }
    return fields;
}

function injectToI18n(fields: string[]) {
    const i18nPath = path.resolve('src/assets/i18n/id.json');
    if (!fs.existsSync(i18nPath)) {
        console.warn('⚠️ Tidak ditemukan: id.json');
        return;
    }

    const content = fs.readFileSync(i18nPath, 'utf-8');
    let json: Record<string, string> = {};

    try {
        json = JSON.parse(content);
    } catch (err) {
        console.error('❌ Gagal parsing id.json:', err);
        return;
    }

    let updated = false;

    fields.forEach(field => {
        if (!(field in json)) {
            const label = field
                .replace(/^is_/, '') // hapus prefix is_ jika ada
                .replace(/_/g, ' ') // snake_case → space
                .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase → space
                .replace(/\b\w/g, l => l.toUpperCase()); // Kapitalisasi
            json[field] = label;
            updated = true;
            console.log(`🈶 Tambah i18n: "${field}": "${label}"`);
        }
    });

    if (updated) {
        fs.writeFileSync(i18nPath, JSON.stringify(json, null, 2), 'utf-8');
        console.log(`✅ i18n berhasil diupdate ke ${i18nPath}`);
    } else {
        console.log(`✅ Tidak ada i18n baru, semua field sudah ada`);
    }
}

// nama filed pada tabel 
function getDisplayFieldsFromDto(dtoPath: string): string[] {
    const dtoContent = fs.readFileSync(dtoPath, 'utf-8');
    const regex = /^\s*(\w+)\??:\s*[^;=]+[;=]?/gm;

    const blacklistPatterns = [
        /^id_/,        // snake_case
        /^id[A-Z]/,    // camelCase seperti idUsers
        /^created/i,
        /^updated/i
    ];

    const fields: string[] = [];
    let match;
    while ((match = regex.exec(dtoContent)) !== null) {
        const name = match[1];
        const isBlacklisted = blacklistPatterns.some(rx => rx.test(name));
        if (!isBlacklisted) {
            fields.push(name);
        }
    }
    return fields;
}



// ⬇️ Render isi file EJS
function renderAndWrite(templatePath: string, destPath: string, data: any) {
    const template = fs.readFileSync(templatePath, 'utf8');
    const content = ejs.render(template, data);
    fs.writeFileSync(destPath, content, 'utf8');
    console.log(`✅ Generated: ${path.relative(process.cwd(), destPath)}`);
}

// ⬇️ Proses rekursif
function processDirectory(templatePath: string, destPath: string, data: any) {
    const items = fs.readdirSync(templatePath);
    for (const item of items) {
        const sourceItemPath = path.join(templatePath, item);
        const isDirectory = fs.statSync(sourceItemPath).isDirectory();
        const renderedItemName = renderName(item);
        const destItemPath = path.join(destPath, renderedItemName);

        if (isDirectory) {
            fse.ensureDirSync(destItemPath);
            processDirectory(sourceItemPath, destItemPath, data);
        } else if (item.endsWith('.ejs')) {
            renderAndWrite(sourceItemPath, destItemPath.replace(/\.ejs$/, ''), data);
        } else {
            fse.copySync(sourceItemPath, destItemPath);
        }
    }
}

function generateFormHtmlFromDto(dtoPath: string, dtoName: string): { html: string, relationVars: string[] } {
    const dtoContent = fs.readFileSync(dtoPath, 'utf-8');
    const regex = /^\s*(\w+)\??:\s*([^;=]+)/gm;

    const blacklistPatterns = [
        /^created/i, /^updated/i
    ];

    const modelBaseName = dtoName.replace(/dto$/i, '').replace(/^\w/, c => c.toLowerCase()); // misal: users
    const pkPatterns = [`id_${modelBaseName}`, `id${modelBaseName.charAt(0).toUpperCase()}${modelBaseName.slice(1)}`];

    const rows: string[] = [];
    const relationVars: string[] = [];

    let match;
    while ((match = regex.exec(dtoContent)) !== null) {
        const name = match[1];
        const type = match[2]?.trim();

        const isBlacklisted =
            blacklistPatterns.some(rx => rx.test(name)) ||
            pkPatterns.includes(name);
        if (isBlacklisted) continue;

        const isCheckbox = name.startsWith('is_') || /^is[A-Z]/.test(name);
        const isTextarea = ['catatan', 'alamat', 'keterangan', 'note'].some(k => name.toLowerCase().includes(k));
        const isDate = ['date', 'tanggal'].some(s => name.toLowerCase().includes(s)) || type === 'Date';
        const isRelation = /^id_/.test(name) || /^id[A-Z]/.test(name);

        if (isCheckbox) {
            rows.push(`
        <nz-form-item>
            <nz-form-control>
                <label nz-checkbox formControlName="${name}">{{ '${name}' | translate }}</label>
            </nz-form-control>
        </nz-form-item>
            `);
        } else if (isDate) {
            rows.push(`
        <nz-form-item>
            <nz-form-label nzFor="${name}">{{ '${name}' | translate }}</nz-form-label>
            <nz-form-control>
                <nz-date-picker formControlName="${name}" style="width: 100%" />
            </nz-form-control>
        </nz-form-item>
            `);
        } else if (isRelation) {
            const base = name.replace(/^id_/, '').replace(/^id/, '');
            const listName = 'list' + base.charAt(0).toUpperCase() + base.slice(1);
            rows.push(`
        <nz-form-item>
            <nz-form-label nzFor="${name}">{{ '${name}' | translate }}</nz-form-label>
            <nz-form-control>
                <nz-select formControlName="${name}" [nzOptions]="${listName}" nzPlaceHolder="Pilih {{ '${name}' | translate }}"></nz-select>
            </nz-form-control>
        </nz-form-item>
            `);
            relationVars.push(`${listName}: any[] = [];`);
        } else {
            const inputType = type === 'number' ? 'type="number"' : '';
            const element = isTextarea
                ? `<textarea nz-input id="${name}" formControlName="${name}" placeholder="Masukkan {{ '${name}' | translate }}"></textarea>`
                : `<input nz-input ${inputType} id="${name}" formControlName="${name}" placeholder="Masukkan {{ '${name}' | translate }}" />`;

            rows.push(`
        <nz-form-item>
            <nz-form-label nzFor="${name}">{{ '${name}' | translate }}</nz-form-label>
            <nz-form-control>
                ${element}
            </nz-form-control>
        </nz-form-item>
            `);
        }
    }

    return {
        html: rows.join('\n'),
        relationVars
    };
}



function injectToModulesRouting(moduleName: string) {
    const routingPath = path.resolve('src/app/views/modules/modules-routing.module.ts');
    if (!fs.existsSync(routingPath)) {
        console.warn('⚠️ Tidak ditemukan modules-routing.module.ts');
        return;
    }

    const routingContent = fs.readFileSync(routingPath, 'utf-8');

    const newRoute = `{
                path: '${moduleName}',
                loadChildren: () => import('./${moduleName}/${moduleName}.module').then(m => m.${Nama}Module)
            },`;

    if (routingContent.includes(`path: '${moduleName}'`)) {
        console.log(`✅ Route '${moduleName}' sudah ada, skip inject.`);
        return;
    }

    const modifiedContent = routingContent.replace(
        /(children:\s*\[\s*)((.|\s)*?)(\s*\])/,
        `$1$2\n            ${newRoute}$4`
    );

    fs.writeFileSync(routingPath, modifiedContent, 'utf-8');
    console.log(`🚀 Route '${moduleName}' berhasil ditambahkan ke modules-routing.module.ts`);
}

function getDtoDefaultObject(dtoPath: string): string {
    const dtoContent = fs.readFileSync(dtoPath, 'utf-8');
    const regex = /^\s*(?:public\s+|readonly\s+)?(\w+)\s*:\s*(string|number|boolean|Date|any|unknown)/gm;

    const defaults: string[] = [];

    let match;
    while ((match = regex.exec(dtoContent)) !== null) {
        const name = match[1];
        const type = match[2];

        let defaultValue = "''"; // default string
        if (type === 'number') defaultValue = '0';
        else if (type === 'boolean') defaultValue = 'false';
        else if (type === 'Date') defaultValue = 'null';

        defaults.push(`  ${name}: ${defaultValue}`);
    }

    return `{\n${defaults.join(',\n')}\n}`;
}

function injectToSidebarMenu(moduleName: string) {
    const menuPath = path.resolve('src/app/views/layout/sidebar/menu.ts');
    if (!fs.existsSync(menuPath)) {
        console.warn('⚠️ menu.ts tidak ditemukan.');
        return;
    }

    const menuContent = fs.readFileSync(menuPath, 'utf-8');
    const newEntry = `,{
        label: '${Nama}',
        icon: 'message-square',
        link: '/app/${moduleName}',
    }`;

    if (menuContent.includes(`link: '/app/${moduleName}'`)) {
        console.log(`✅ Menu '${moduleName}' sudah ada, skip inject.`);
        return;
    }

    const injectAfter = `{\\s*label:\\s*['"]IN Apps['"],\\s*isTitle:\\s*true\\s*}`;
    const regex = new RegExp(injectAfter);

    const match = regex.exec(menuContent);
    if (!match) {
        console.warn(`⚠️ Tidak ditemukan posisi 'IN Apps' di menu.ts`);
        return;
    }

    const insertPosition = match.index + match[0].length;
    const newContent = menuContent.slice(0, insertPosition) + `\n    ${newEntry}` + menuContent.slice(insertPosition);

    fs.writeFileSync(menuPath, newContent, 'utf-8');
    console.log(`🚀 Menu '${moduleName}' berhasil ditambahkan ke sidebar.`);
}



// ⬇️ Ambil field dari DTO jika ada
const dtoPath = path.resolve('src/sdk/core/models', `${nama}-dto.ts`);
let searchFields: string[] = [];

if (fs.existsSync(dtoPath)) {
    searchFields = getSearchableFieldsFromDto(dtoPath);
    console.log(`🔍 Found DTO: ${dtoPath}`);
    console.log(`🔎 Searchable fields:`, searchFields);
} else {
    console.warn(`⚠️ DTO tidak ditemukan di: ${dtoPath}`);
}

// tabel auto field 
let displayFields: string[] = [];
if (fs.existsSync(dtoPath)) {
    displayFields = getDisplayFieldsFromDto(dtoPath);
}

let dtoDefaultObject = '{}';
if (dtoPath) {
    dtoDefaultObject = getDtoDefaultObject(dtoPath);
}

// generate form 
let formHtml = '';
let relationVars: string[] = [];
if (dtoPath) {
    const result = generateFormHtmlFromDto(dtoPath, Nama);
    formHtml = result.html;
    relationVars = result.relationVars;
}

console.log("📋 Display Fields:", displayFields);
// ⬇️ Eksekusi
fse.ensureDirSync(outputDir);
processDirectory(templateDir, outputDir, {
    nama, Nama, NAMA, searchFields, displayFields, dtoDefaultObject, formHtml, relationVars
});
injectToModulesRouting(nama);
injectToSidebarMenu(nama);
injectToI18n(displayFields);

console.log(`\n🎉 Modul '${nama}' berhasil dibuat di: ${outputDir}`);
