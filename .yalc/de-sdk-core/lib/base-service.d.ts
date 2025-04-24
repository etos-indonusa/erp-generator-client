import { HttpClient } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';
import * as i0 from "@angular/core";
/**
 * Base class for services
 */
export declare class BaseService {
    protected config: ApiConfiguration;
    protected http: HttpClient;
    constructor(config: ApiConfiguration, http: HttpClient);
    private _rootUrl?;
    /**
     * Returns the root url for all operations in this service. If not set directly in this
     * service, will fallback to `ApiConfiguration.rootUrl`.
     */
    get rootUrl(): string;
    /**
     * Sets the root URL for API operations in this service.
     */
    set rootUrl(rootUrl: string);
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BaseService>;
}
