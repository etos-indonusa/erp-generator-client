import { ModuleWithProviders } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfigurationParams } from './api-configuration';
import * as i0 from "@angular/core";
/**
 * Module that provides all services and configuration.
 */
export declare class ApiModule {
    static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule>;
    constructor(parentModule: ApiModule, http: HttpClient);
    static ɵfac: i0.ɵɵFactoryDeclaration<ApiModule, [{ optional: true; skipSelf: true; }, { optional: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ApiModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ApiModule>;
}
