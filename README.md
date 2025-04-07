ng-openapi-gen --input https://erp.bogor.vm.devetek.com/api-json --output src/sdk/core
npx ts-node --project tsconfig.tools.json tools/generate-openapi-sdk-with-fields.ts https://erp.bogor.vm.devetek.com/api-json src/sdk/core

GENERATOR STANDAR 
npx ts-node tools/template/generator-crud-standart.ts --nama users

GENERATOR STANDAR
npm run generate:crud users
npm run generate:crud client-contact
npm run generate:crud client
npm run generate:crud company-config
npm run generate:crud contract
npm run generate:crud contract-site 

GENERATOR REPORT
npm run generate:report contract