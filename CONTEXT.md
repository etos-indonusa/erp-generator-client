# AMIMS Frontend Context

## Purpose
- Angular 18 single-page app for the Aircraft Maintenance Information Management System (AMIMS) with emphasis on helicopter maintenance workflows.
- Consumes REST APIs published by the AMIMS back end via the generated `de-sdk-core` library (Swagger/OpenAPI client).
- Primary workspace for feature work lives under `src/app/views/modules`, especially the AMIMS maintenance, inventory, and master submodules.

## Tech Stack
- Framework: Angular 18 (standalone routing + traditional NgModules), RxJS 7, NgRx Store/Effects for auth state.
- UI: Ng Zorro (`ng-zorro-antd`), NG Bootstrap, SweetAlert2, FullCalendar, ApexCharts, ngx-mask, ngx-dropzone.
- Localization: `@ngx-translate/core` with Indonesian (`id`) as default (`TranslateService` initialized in `AppModule` and module constructors).
- Styling: global Bootstrap 5 + modular SCSS per component.

## Entry Points
- `src/app/app.module.ts`: bootstraps shared modules (`TampilanModule`), registers `ApiModule.forRoot({ rootUrl: environment.core })`, and wires interceptors + NgRx.
- `src/app/app.routes.ts`: top-level routing. `/app` lazy-loads `ModulesModule` (authenticated workspace), `/auth` loads the auth shell, wildcard routes redirect to `/error/404`.
- `src/app/views/layout/layout-wrapper`: layout shell with sidebar/header. Sidebar items configured in `src/app/views/layout/sidebar/menu.ts`.

## Key Directories
- `src/app/core`: core services, interceptors, guards.
- `src/app/shared`: reusable UI (pipes, breadcrumbs, document module, etc.) aggregated via `TampilanModule`.
- `src/app/views/modules`: feature areas. Each folder is a lazy-loaded Angular module. Important children:
  - `amims/amims-maintenance`: helicopter maintenance features (`wp`, `wp-jo`, `maintenance`, `maintenance-program`, `tech-log`, `engineer-rti`, etc.).
  - `amims/amims-inventory`: inventory management (site, part, mpart, etc.).
  - `amims/amims-master`: master data (location-flight, pilot, shipping, currency, ATA, MEL, document libs).
  - `amims/amims-erp`: document processes (GRN, MPC, QA, engineer requisitions).
  - `acl`: user/role/module management.
  - `tools`: auxiliary tooling modules (document numbering, workflows).

## AMIMS Maintenance Snapshot
- Routing defined in `src/app/views/modules/amims/amims-maintenance/amims-maintenance-routing.module.ts` with lazy modules for each maintenance feature.
- Components fetch data through services from `de-sdk-core` (e.g., `WpService`, `AircraftService`) and display via Ng Zorro tables/drawers.
- Example: `wp/wp-share/wp-share-list` handles filtering and drawer workflows using `NzDrawerService`, `WpReportService`, and `UserInfoService`.

## API & SDK Integration
- Swagger clients generated into `projects/sdkcore` (`ng build sdkcore` produces `dist/sdkcore`).
- Published locally via Yalc (`tools/publish-sdk-local-yalc.ts`) and consumed as dependency `de-sdk-core` (see `package.json`).
- Regenerate clients with `tools/generate-openapi-sdk-with-fields.ts`, targeting `environment.core` and `environment.lib` endpoints.

## Tooling & Generators
- CRUD/Report scaffolding: `npm run generate:crud` and `npm run generate:report` wrap scripts in `tools/generator-crud-standart.ts` and `tools/generator-report.ts`. Use prefixes (e.g., `--prefix=amims`) to route output under the desired module.
- Utility script `tools/remove-extra-lines.ts` cleans HTML whitespace; see usage hints in `README.md` and `amims.md`.
- Additional helper commands listed in `README.md` / `amims.md` for mass code generation (maintenance, inventory, document modules).

## Configuration
- Environments: `src/environments/environment.common.ts` holds shared flags and API roots; dev/prod variants extend it.
- Localization enforced in multiple modules by injecting `TranslateService` and forcing `translate.use('id')` (see `ModulesModule`, `WpShareListComponent`).
- Auth: NgRx store slice `auth`, `AuthInterceptor` attaches credentials; `UserInfoService` currently returns stubbed user info until local storage wiring is re-enabled.

## Development Tips
- When creating new AMIMS pages, generate via tooling, then register lazy routes under `amims-maintenance` (or relevant submodule) and expose navigation through `menu.ts`.
- Reuse shared pipes/components from `TampilanModule`; import it into feature modules needing forms, translation, or breadcrumb support.
- Prefer API access via `de-sdk-core` services. Extend the SDK (regenerate) instead of hand-writing HTTP clients.
- Keep Indonesian copy in `assets/i18n/id.json`; add English fallback only if required.
- Before publishing SDK updates, run `ng build sdkcore` then `npm publish --access public` or publish locally with Yalc.

## References
- `README.md` + `amims.md`: command snippets for SDK generation and module scaffolding.
- `projects/sdkcore`: generated Angular library packaging the backend API.
- `src/app/services`: app-wide helpers (`AclService`, `TokenService`, `UserInfoService`).
- `src/environments`: API endpoints and app flags.
