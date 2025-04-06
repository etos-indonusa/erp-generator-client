ng-openapi-gen --input https://erp.bogor.vm.devetek.com/api-json --output src/sdk/core
npx ts-node --project tsconfig.tools.json tools/generate-openapi-sdk-with-fields.ts https://erp.bogor.vm.devetek.com/api-json src/sdk/core

GENERATOR STANDAR 
npx ts-node tools/template/generator-crud-standart.ts --nama users