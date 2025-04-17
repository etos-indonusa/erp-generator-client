ng-openapi-gen --input https://erp.bogor.vm.devetek.com/api-json --output src/sdk/core
npx ts-node --project tsconfig.tools.json tools/generate-openapi-sdk-with-fields.ts https://erp.bogor.vm.devetek.com/api-json src/sdk/core
npx ts-node --project tsconfig.tools.json tools/generate-openapi-sdk-with-fields.ts https://erp-lib.bogor.vm.devetek.com/api-json src/sdk/lib

GENERATOR STANDAR 
npx ts-node tools/template/generator-crud-standart.ts --nama users

GENERATOR STANDAR
npm run generate:crud -- module --prefix=acl
npm run generate:crud -- users --prefix=acl

npm run generate:crud -- users --prefix=pelanggan
npm run generate:crud -- client-contact --prefix=pelanggan
npm run generate:crud -- client --prefix=pelanggan
npm run generate:crud -- company-config --prefix=pelanggan
npm run generate:crud -- contract --prefix=pelanggan
npm run generate:crud -- contract-site --prefix=pelanggan
npm run generate:crud -- contract-jenis  --prefix=pelanggan

GENERATOR REPORT
npm run generate:report -- client --prefix=pelanggan

npm run generate:report -- contract --prefix=pelanggan
npm run generate:report -- contract-site --prefix=pelanggan
npm run generate:report -- contract-site --prefix=pelanggan

npm run generate:report -- workflow --prefix=tools
npm run generate:crud -- workflow-step --prefix=tools

npm run generate:crud -- custom-field --prefix=tools
npm run generate:report -- custom-field-group --prefix=tools
npm run generate:report -- custom-field-value --prefix=tools