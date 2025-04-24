import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMaintenanceCodeReferenceDto } from '../models/amims-maintenance-code-reference-dto';
import { MaintenanceCodeReferenceControllerCreate$Params } from '../fn/maintenance-code-reference/maintenance-code-reference-controller-create';
import { MaintenanceCodeReferenceControllerFindAll$Params } from '../fn/maintenance-code-reference/maintenance-code-reference-controller-find-all';
import { MaintenanceCodeReferenceControllerFindOne$Params } from '../fn/maintenance-code-reference/maintenance-code-reference-controller-find-one';
import { MaintenanceCodeReferenceControllerRemove$Params } from '../fn/maintenance-code-reference/maintenance-code-reference-controller-remove';
import { MaintenanceCodeReferenceControllerUpdate$Params } from '../fn/maintenance-code-reference/maintenance-code-reference-controller-update';
import * as i0 from "@angular/core";
export declare class MaintenanceCodeReferenceService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `maintenanceCodeReferenceControllerFindAll()` */
    static readonly MaintenanceCodeReferenceControllerFindAllPath = "/amims/maintenance_code_reference/maintenance_code_reference";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `maintenanceCodeReferenceControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceCodeReferenceControllerFindAll$Response(params?: MaintenanceCodeReferenceControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMaintenanceCodeReferenceDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `maintenanceCodeReferenceControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceCodeReferenceControllerFindAll(params?: MaintenanceCodeReferenceControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMaintenanceCodeReferenceDto>;
        'total'?: number;
    }>;
    /** Path part for operation `maintenanceCodeReferenceControllerCreate()` */
    static readonly MaintenanceCodeReferenceControllerCreatePath = "/amims/maintenance_code_reference/maintenance_code_reference";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `maintenanceCodeReferenceControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    maintenanceCodeReferenceControllerCreate$Response(params: MaintenanceCodeReferenceControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceCodeReferenceDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `maintenanceCodeReferenceControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    maintenanceCodeReferenceControllerCreate(params: MaintenanceCodeReferenceControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceCodeReferenceDto;
    }>;
    /** Path part for operation `maintenanceCodeReferenceControllerFindOne()` */
    static readonly MaintenanceCodeReferenceControllerFindOnePath = "/amims/maintenance_code_reference/maintenance_code_reference/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `maintenanceCodeReferenceControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceCodeReferenceControllerFindOne$Response(params: MaintenanceCodeReferenceControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceCodeReferenceDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `maintenanceCodeReferenceControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceCodeReferenceControllerFindOne(params: MaintenanceCodeReferenceControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceCodeReferenceDto;
    }>;
    /** Path part for operation `maintenanceCodeReferenceControllerUpdate()` */
    static readonly MaintenanceCodeReferenceControllerUpdatePath = "/amims/maintenance_code_reference/maintenance_code_reference/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `maintenanceCodeReferenceControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    maintenanceCodeReferenceControllerUpdate$Response(params: MaintenanceCodeReferenceControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceCodeReferenceDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `maintenanceCodeReferenceControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    maintenanceCodeReferenceControllerUpdate(params: MaintenanceCodeReferenceControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceCodeReferenceDto;
    }>;
    /** Path part for operation `maintenanceCodeReferenceControllerRemove()` */
    static readonly MaintenanceCodeReferenceControllerRemovePath = "/amims/maintenance_code_reference/maintenance_code_reference/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `maintenanceCodeReferenceControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceCodeReferenceControllerRemove$Response(params: MaintenanceCodeReferenceControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceCodeReferenceDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `maintenanceCodeReferenceControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceCodeReferenceControllerRemove(params: MaintenanceCodeReferenceControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceCodeReferenceDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaintenanceCodeReferenceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MaintenanceCodeReferenceService>;
}
