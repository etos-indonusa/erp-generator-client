import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AclModuleDto } from '../models/acl-module-dto';
import { ModuleControllerCreate$Params } from '../fn/module/module-controller-create';
import { ModuleControllerFindAll$Params } from '../fn/module/module-controller-find-all';
import { ModuleControllerFindOne$Params } from '../fn/module/module-controller-find-one';
import { ModuleControllerRemove$Params } from '../fn/module/module-controller-remove';
import { ModuleControllerUpdate$Params } from '../fn/module/module-controller-update';
import * as i0 from "@angular/core";
export declare class ModuleService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `moduleControllerFindAll()` */
    static readonly ModuleControllerFindAllPath = "/auth/module/module";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `moduleControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    moduleControllerFindAll$Response(params?: ModuleControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AclModuleDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `moduleControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    moduleControllerFindAll(params?: ModuleControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AclModuleDto>;
        'total'?: number;
    }>;
    /** Path part for operation `moduleControllerCreate()` */
    static readonly ModuleControllerCreatePath = "/auth/module/module";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `moduleControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    moduleControllerCreate$Response(params: ModuleControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclModuleDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `moduleControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    moduleControllerCreate(params: ModuleControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclModuleDto;
    }>;
    /** Path part for operation `moduleControllerFindOne()` */
    static readonly ModuleControllerFindOnePath = "/auth/module/module/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `moduleControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    moduleControllerFindOne$Response(params: ModuleControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclModuleDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `moduleControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    moduleControllerFindOne(params: ModuleControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclModuleDto;
    }>;
    /** Path part for operation `moduleControllerUpdate()` */
    static readonly ModuleControllerUpdatePath = "/auth/module/module/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `moduleControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    moduleControllerUpdate$Response(params: ModuleControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclModuleDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `moduleControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    moduleControllerUpdate(params: ModuleControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclModuleDto;
    }>;
    /** Path part for operation `moduleControllerRemove()` */
    static readonly ModuleControllerRemovePath = "/auth/module/module/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `moduleControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    moduleControllerRemove$Response(params: ModuleControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclModuleDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `moduleControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    moduleControllerRemove(params: ModuleControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclModuleDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModuleService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ModuleService>;
}
