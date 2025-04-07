import * as fs from 'fs';
import * as path from 'path';
import * as ejs from 'ejs';
import * as fse from 'fs-extra';

const nama = process.argv[2];
const nama_report = process.argv[2] + '_report';

if (!nama) {
    console.error('❌ Nama modul wajib diisi. Contoh: npm run generate:crud users');
    process.exit(1);
}
const Nama = nama
    .replace(/[-_](.)/g, (_, c) => c.toUpperCase()) // kebab/snake to camel
    .replace(/^\w/, c => c.toUpperCase()); // kapital di awal

const Nama_report = nama_report
    .replace(/[-_](.)/g, (_, c) => c.toUpperCase()) // kebab/snake to camel
    .replace(/^\w/, c => c.toUpperCase()); // kapital di awal

const nama_object = nama
    .replace(/[-_](.)/g, (_, c) => c.toUpperCase()) // kebab/snake to camel
    .replace(/^\w/, c => c.toLowerCase()); // kapital di awal

const nama_object_report = nama_report
    .replace(/[-_](.)/g, (_, c) => c.toUpperCase()) // kebab/snake to camel
    .replace(/^\w/, c => c.toLowerCase()); // kapital di awal

const NAMA = nama.toUpperCase();
const NAMA_REPORT = nama_report.toUpperCase();


const templateDir = path.resolve('tools/templates/view-report');
const outputDir = path.resolve('src/app/views/modules', nama);

// ⬇️ Fungsi ganti nama file/folder
function renderName(input: string): string {
    return input.replace(/__nama__/g, nama);
}

// ⬇️ Fungsi ambil field string dari DTO
function getSearchableFieldsFromDto(dtoPath: string): string[] {
    const dtoContent = fs.readFileSync(dtoPath, 'utf-8');
    const regex = /(\w+):\s+(string|String);/g;


    const blacklistPatterns = [
        /^id_/,        // snake_case
        /^id[A-Z]/,    // camelCase seperti idUsers 
        /^created[A-Z]/,    // camelCase seperti idUsers 
        /^updated[A-Z]/,    // camelCase seperti idUsers 
        /^date[A-Z]/,    // camelCase seperti idUsers 
        /^tanggal[A-Z]/,    // camelCase seperti idUsers 
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
function getRelationServiceName(field: string) {
    const raw = field.replace(/^id_/, '').replace(/^id/, '');
    const proper = raw.charAt(0).toUpperCase() + raw.slice(1);
    const camel = raw.charAt(0).toLowerCase() + raw.slice(1);
    return {
        listVar: `list${proper}`,
        serviceName: `${camel}Service`,
        serviceClass: `${proper}Service`,
        methodCall: `this.getAll${proper}();`,
        functionCode: `getAll${proper}() {
    this.${camel}Service.${camel}ControllerFindAll().subscribe(
      data => this.list${proper} = data.data ?? []
    );
  }`
    };
}

function generateFormHtmlFromDto(dtoPath: string, dtoName: string) {
    const dtoContent = fs.readFileSync(dtoPath, 'utf-8');
    const regex = /^\s*(\w+)\??:\s*([^;=]+)/gm;

    const blacklist = [/^created/i, /^updated/i];
    const base = dtoName.replace(/dto$/i, '').replace(/^\w/, c => c.toLowerCase());
    const pk = [`id_${base}`, `id${base.charAt(0).toUpperCase()}${base.slice(1)}`];

    const rows: string[] = [], vars: string[] = [], injects: string[] = [], inits: string[] = [], funcs: string[] = [];

    let match;
    while ((match = regex.exec(dtoContent)) !== null) {
        const name = match[1];
        const type = match[2]?.trim();
        const skip = blacklist.some(rx => rx.test(name)) || pk.includes(name);
        if (skip) continue;

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
            const r = getRelationServiceName(name);
            rows.push(`
        <nz-form-item>
            <nz-form-label nzFor="${name}">{{ '${name}' | translate }}</nz-form-label>
            <nz-form-control>
                <nz-select formControlName="${name}" nzShowSearch nzAllowClear nzPlaceHolder="Pilih {{ '${name}' | translate }}"> 
                    <nz-option *ngFor="let item of ${listName}" nzLabel="{{ item.${name} }}" nzValue="{{ item.${name} }}"></nz-option>
                </nz-select>
            </nz-form-control>
        </nz-form-item>
            `);
            relationVars.push(`${listName}: any[] = [];`);
            vars.push(`${r.listVar}: any[] = [];`);
            injects.push(`private ${r.serviceName}: ${r.serviceClass}`);
            inits.push(r.methodCall);
            funcs.push(r.functionCode);
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

    return { html: rows.join('\n'), relationVars: vars, relationInjects: injects, relationInitCalls: inits, relationFunctions: funcs };
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

function getJoinAndIncludeFromDto(dtoPath: string): {
    joinWhere: Record<string, {}>;
    include: { name: string; type: 'single' }[];
} {
    const content = fs.readFileSync(dtoPath, 'utf-8');
    const regex = /^\s*(id[_A-Z][a-zA-Z0-9_]*)/gm;
    const result: {
        joinWhere: Record<string, any>,
        include: { name: string; type: 'single' }[]
    } = {
        joinWhere: {},
        include: []
    };
    
    let match;
    while ((match = regex.exec(content)) !== null) {
        const field = match[1];
        const snake = toSnakeCase(field).replace(/^id_/, ''); // misal: idClientSite → id_client_site

        result.joinWhere[snake] = {};
        result.include.push({ name: snake, type: 'single' });
    }

    return result;
}

function toSnakeCase(str: string) {
    return str
        .replace(/^id([A-Z])/, (_, c) => 'id_' + c.toLowerCase())
        .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
        .toLowerCase();
}

const id_primary = toSnakeCase(nama_object)


// ⬇️ Ambil field dari DTO jika ada
const dtoPath = path.resolve('src/sdk/core/models', `${nama}-dto.ts`);
const dtoPath_report = path.resolve('src/sdk/core/models', `${nama}-report-dto.ts`);
let searchFields: string[] = [];
let searchFields_report: string[] = [];

if (fs.existsSync(dtoPath_report)) {
    searchFields = getSearchableFieldsFromDto(dtoPath_report);
    console.log(`🔍 Found DTO: ${dtoPath_report
        }`);
    console.log(`🔎 Searchable fields:`, dtoPath_report);
} else {
    console.warn(`⚠️ DTO tidak ditemukan di: ${dtoPath_report
        }`);
}

let autoJoinWhere = {};
let autoInclude: { name: string; type: 'single' }[] = [];
if (fs.existsSync(dtoPath)) {
    const auto = getJoinAndIncludeFromDto(dtoPath);
    console.log(`🔍 Found Join: ${JSON.stringify(auto)}`)
    autoJoinWhere = auto.joinWhere;
    autoInclude = auto.include;
}

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
let relationInjects: string[] = [], relationInitCalls: string[] = [], relationFunctions: string[] = [];

let relationVars: string[] = [];
if (dtoPath) {
    const result = generateFormHtmlFromDto(dtoPath, Nama);
    formHtml = result.html;
    relationVars = result.relationVars;
    relationInjects = result.relationInjects;
    relationInitCalls = result.relationInitCalls;
    relationFunctions = result.relationFunctions;
}

function getSmartDisplayFieldsFromDtoV2(dtoPath: string, visited: Set<string> = new Set()): {
    namaField: string;
    uiType: string;
    children?: any[];
}[] {
    const dtoContent = fs.readFileSync(dtoPath, 'utf-8');
    const regex = /^\s*(\w+)\??:\s*([^;=\n]+)/gm;

    const result: any[] = [];
    let match;

    const idFields = new Set<string>();

    while ((match = regex.exec(dtoContent)) !== null) {
        const namaField = match[1];
        const typeRaw = match[2].trim();
        const cleanType = typeRaw.replace(/\[\]|\|.*$/g, '').trim();

        // 🔹 Deteksi idXxx atau id_xxx → simpan relasi
        if (/^id[A-Z]/.test(namaField) || /^id_/.test(namaField)) {
            const baseName = namaField.replace(/^id_/, '').replace(/^id/, '');
            const objectField = baseName.charAt(0).toLowerCase() + baseName.slice(1);
            if (namaField != `id${Nama}`)
            {
                idFields.add(objectField);
                
            }
            continue;
        }

        // 🔹 Field biasa
        let uiType = 'text';
        const lower = namaField.toLowerCase();

        if (cleanType === 'boolean' || namaField.startsWith('is')) {
            uiType = 'boolean';
        } else if (
            cleanType === 'Date' ||
            lower.includes('tanggal') ||
            lower.includes('created') ||
            lower.includes('updated')
        ) {
            uiType = 'date';
        } else if (lower.includes('status')) {
            uiType = 'status';
        } else if (cleanType === 'number') {
            uiType = 'currency';
        }

        result.push({ namaField, uiType });
    }

    // 🔥 Inject field nested berdasarkan idXxx meskipun tidak didefinisikan
    for (const rel of idFields) {
        if (visited.has(rel)) continue;
        visited.add(rel);

        const dtoFileName = toKebabCase(rel) + '-dto.ts';
        const nestedPath = path.resolve(path.dirname(dtoPath), dtoFileName);

        if (fs.existsSync(nestedPath)) {
            const children = getSmartDisplayFieldsFromDtoV2(nestedPath, visited);
            result.push({ namaField: rel, uiType: 'nested', children });
        } else {
            console.warn(`⚠️ File DTO tidak ditemukan untuk '${rel}': ${nestedPath}`);
        }
    }

    return result;
}

function toKebabCase(str: string) {
    return str
        .replace(/^id([A-Z])/, (_, c) => 'id_' + c.toLowerCase())
        .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
        .toLowerCase()
        .replace(/_/g, '-');
}


let smartDisplayFields: any[] = [];
if (fs.existsSync(dtoPath)) {
    smartDisplayFields = getSmartDisplayFieldsFromDtoV2(dtoPath); 
}


console.log("📋 Display Fields:", displayFields);
// ⬇️ Eksekusi
fse.ensureDirSync(outputDir);
processDirectory(templateDir, outputDir, {
    nama_report, Nama_report, NAMA_REPORT, nama, Nama, NAMA, searchFields,
    displayFields, dtoDefaultObject, formHtml,
    relationVars, relationInjects, relationInitCalls, relationFunctions, nama_object,
    smartDisplayFields, nama_object_report,
    autoJoinWhere,
    autoInclude,
    id_primary
});
injectToModulesRouting(nama);
injectToSidebarMenu(nama);
injectToI18n(displayFields);

console.log(`\n🎉 Modul '${nama}' berhasil dibuat di: ${outputDir}`);
