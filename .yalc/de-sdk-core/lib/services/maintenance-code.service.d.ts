import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMaintenanceCodeDto } from '../models/amims-maintenance-code-dto';
import { MaintenanceCodeControllerCreate$Params } from '../fn/maintenance-code/maintenance-code-controller-create';
import { MaintenanceCodeControllerFindAll$Params } from '../fn/maintenance-code/maintenance-code-controller-find-all';
import { MaintenanceCodeControllerFindOne$Params } from '../fn/maintenance-code/maintenance-code-controller-find-one';
import { MaintenanceCodeControllerRemove$Params } from '../fn/maintenance-code/maintenance-code-controller-remove';
import { MaintenanceCodeControllerUpdate$Params } from '../fn/maintenance-code/maintenance-code-controller-update';
import * as i0 from "@angular/core";
export declare class MaintenanceCodeService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `maintenanceCodeControllerFindAll()` */
    static readonly MaintenanceCodeControllerFindAllPath = "/amims/maintenance_code/maintenance_code";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `maintenanceCodeControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceCodeControllerFindAll$Response(params?: MaintenanceCodeControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMaintenanceCodeDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `maintenanceCodeControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceCodeControllerFindAll(params?: MaintenanceCodeControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMaintenanceCodeDto>;
        'total'?: number;
    }>;
    /** Path part for operation `maintenanceCodeControllerCreate()` */
    static readonly MaintenanceCodeControllerCreatePath = "/amims/maintenance_code/maintenance_code";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `maintenanceCodeControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    maintenanceCodeControllerCreate$Response(params: MaintenanceCodeControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceCodeDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `maintenanceCodeControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    maintenanceCodeControllerCreate(params: MaintenanceCodeControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceCodeDto;
    }>;
    /** Path part for operation `maintenanceCodeControllerFindOne()` */
    static readonly MaintenanceCodeControllerFindOnePath = "/amims/maintenance_code/maintenance_code/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `maintenanceCodeControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceCodeControllerFindOne$Response(params: MaintenanceCodeControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceCodeDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `maintenanceCodeControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceCodeControllerFindOne(params: MaintenanceCodeControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceCodeDto;
    }>;
    /** Path part for operation `maintenanceCodeControllerUpdate()` */
    static readonly MaintenanceCodeControllerUpdatePath = "/amims/maintenance_code/maintenance_code/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `maintenanceCodeControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    maintenanceCodeControllerUpdate$Response(params: MaintenanceCodeControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceCodeDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `maintenanceCodeControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    maintenanceCodeControllerUpdate(params: MaintenanceCodeControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceCodeDto;
    }>;
    /** Path part for operation `maintenanceCodeControllerRemove()` */
    static readonly MaintenanceCodeControllerRemovePath = "/amims/maintenance_code/maintenance_code/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `maintenanceCodeControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceCodeControllerRemove$Response(params: MaintenanceCodeControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceCodeDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `maintenanceCodeControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceCodeControllerRemove(params: MaintenanceCodeControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceCodeDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaintenanceCodeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MaintenanceCodeService>;
}
