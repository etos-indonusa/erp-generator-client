import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLastMaintenanceDto } from '../models/amims-last-maintenance-dto';
import { LastMaintenanceControllerCreate$Params } from '../fn/last-maintenance/last-maintenance-controller-create';
import { LastMaintenanceControllerFindAll$Params } from '../fn/last-maintenance/last-maintenance-controller-find-all';
import { LastMaintenanceControllerFindOne$Params } from '../fn/last-maintenance/last-maintenance-controller-find-one';
import { LastMaintenanceControllerRemove$Params } from '../fn/last-maintenance/last-maintenance-controller-remove';
import { LastMaintenanceControllerUpdate$Params } from '../fn/last-maintenance/last-maintenance-controller-update';
import * as i0 from "@angular/core";
export declare class LastMaintenanceService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `lastMaintenanceControllerFindAll()` */
    static readonly LastMaintenanceControllerFindAllPath = "/amims/last_maintenance/last_maintenance";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `lastMaintenanceControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    lastMaintenanceControllerFindAll$Response(params?: LastMaintenanceControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLastMaintenanceDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `lastMaintenanceControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    lastMaintenanceControllerFindAll(params?: LastMaintenanceControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLastMaintenanceDto>;
        'total'?: number;
    }>;
    /** Path part for operation `lastMaintenanceControllerCreate()` */
    static readonly LastMaintenanceControllerCreatePath = "/amims/last_maintenance/last_maintenance";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `lastMaintenanceControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    lastMaintenanceControllerCreate$Response(params: LastMaintenanceControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLastMaintenanceDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `lastMaintenanceControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    lastMaintenanceControllerCreate(params: LastMaintenanceControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLastMaintenanceDto;
    }>;
    /** Path part for operation `lastMaintenanceControllerFindOne()` */
    static readonly LastMaintenanceControllerFindOnePath = "/amims/last_maintenance/last_maintenance/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `lastMaintenanceControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    lastMaintenanceControllerFindOne$Response(params: LastMaintenanceControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLastMaintenanceDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `lastMaintenanceControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    lastMaintenanceControllerFindOne(params: LastMaintenanceControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLastMaintenanceDto;
    }>;
    /** Path part for operation `lastMaintenanceControllerUpdate()` */
    static readonly LastMaintenanceControllerUpdatePath = "/amims/last_maintenance/last_maintenance/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `lastMaintenanceControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    lastMaintenanceControllerUpdate$Response(params: LastMaintenanceControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLastMaintenanceDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `lastMaintenanceControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    lastMaintenanceControllerUpdate(params: LastMaintenanceControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLastMaintenanceDto;
    }>;
    /** Path part for operation `lastMaintenanceControllerRemove()` */
    static readonly LastMaintenanceControllerRemovePath = "/amims/last_maintenance/last_maintenance/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `lastMaintenanceControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    lastMaintenanceControllerRemove$Response(params: LastMaintenanceControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLastMaintenanceDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `lastMaintenanceControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    lastMaintenanceControllerRemove(params: LastMaintenanceControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLastMaintenanceDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LastMaintenanceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LastMaintenanceService>;
}
