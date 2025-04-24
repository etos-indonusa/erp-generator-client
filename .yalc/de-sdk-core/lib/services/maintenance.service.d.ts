import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMaintenanceDto } from '../models/amims-maintenance-dto';
import { MaintenanceControllerCreate$Params } from '../fn/maintenance/maintenance-controller-create';
import { MaintenanceControllerFindAll$Params } from '../fn/maintenance/maintenance-controller-find-all';
import { MaintenanceControllerFindOne$Params } from '../fn/maintenance/maintenance-controller-find-one';
import { MaintenanceControllerRemove$Params } from '../fn/maintenance/maintenance-controller-remove';
import { MaintenanceControllerUpdate$Params } from '../fn/maintenance/maintenance-controller-update';
import * as i0 from "@angular/core";
export declare class MaintenanceService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `maintenanceControllerFindAll()` */
    static readonly MaintenanceControllerFindAllPath = "/amims/maintenance/maintenance";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `maintenanceControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceControllerFindAll$Response(params?: MaintenanceControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMaintenanceDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `maintenanceControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceControllerFindAll(params?: MaintenanceControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMaintenanceDto>;
        'total'?: number;
    }>;
    /** Path part for operation `maintenanceControllerCreate()` */
    static readonly MaintenanceControllerCreatePath = "/amims/maintenance/maintenance";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `maintenanceControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    maintenanceControllerCreate$Response(params: MaintenanceControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `maintenanceControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    maintenanceControllerCreate(params: MaintenanceControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceDto;
    }>;
    /** Path part for operation `maintenanceControllerFindOne()` */
    static readonly MaintenanceControllerFindOnePath = "/amims/maintenance/maintenance/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `maintenanceControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceControllerFindOne$Response(params: MaintenanceControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `maintenanceControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceControllerFindOne(params: MaintenanceControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceDto;
    }>;
    /** Path part for operation `maintenanceControllerUpdate()` */
    static readonly MaintenanceControllerUpdatePath = "/amims/maintenance/maintenance/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `maintenanceControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    maintenanceControllerUpdate$Response(params: MaintenanceControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `maintenanceControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    maintenanceControllerUpdate(params: MaintenanceControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceDto;
    }>;
    /** Path part for operation `maintenanceControllerRemove()` */
    static readonly MaintenanceControllerRemovePath = "/amims/maintenance/maintenance/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `maintenanceControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceControllerRemove$Response(params: MaintenanceControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `maintenanceControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceControllerRemove(params: MaintenanceControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaintenanceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MaintenanceService>;
}
