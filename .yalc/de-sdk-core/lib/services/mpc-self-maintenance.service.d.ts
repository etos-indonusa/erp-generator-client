import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMpcSelfMaintenanceDto } from '../models/amims-mpc-self-maintenance-dto';
import { MpcSelfMaintenanceControllerCreate$Params } from '../fn/mpc-self-maintenance/mpc-self-maintenance-controller-create';
import { MpcSelfMaintenanceControllerFindAll$Params } from '../fn/mpc-self-maintenance/mpc-self-maintenance-controller-find-all';
import { MpcSelfMaintenanceControllerFindOne$Params } from '../fn/mpc-self-maintenance/mpc-self-maintenance-controller-find-one';
import { MpcSelfMaintenanceControllerRemove$Params } from '../fn/mpc-self-maintenance/mpc-self-maintenance-controller-remove';
import { MpcSelfMaintenanceControllerUpdate$Params } from '../fn/mpc-self-maintenance/mpc-self-maintenance-controller-update';
import * as i0 from "@angular/core";
export declare class MpcSelfMaintenanceService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `mpcSelfMaintenanceControllerFindAll()` */
    static readonly MpcSelfMaintenanceControllerFindAllPath = "/amims/mpc_self_maintenance/mpc_self_maintenance";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcSelfMaintenanceControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcSelfMaintenanceControllerFindAll$Response(params?: MpcSelfMaintenanceControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcSelfMaintenanceDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcSelfMaintenanceControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcSelfMaintenanceControllerFindAll(params?: MpcSelfMaintenanceControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcSelfMaintenanceDto>;
        'total'?: number;
    }>;
    /** Path part for operation `mpcSelfMaintenanceControllerCreate()` */
    static readonly MpcSelfMaintenanceControllerCreatePath = "/amims/mpc_self_maintenance/mpc_self_maintenance";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcSelfMaintenanceControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcSelfMaintenanceControllerCreate$Response(params: MpcSelfMaintenanceControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcSelfMaintenanceDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcSelfMaintenanceControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcSelfMaintenanceControllerCreate(params: MpcSelfMaintenanceControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcSelfMaintenanceDto;
    }>;
    /** Path part for operation `mpcSelfMaintenanceControllerFindOne()` */
    static readonly MpcSelfMaintenanceControllerFindOnePath = "/amims/mpc_self_maintenance/mpc_self_maintenance/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcSelfMaintenanceControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcSelfMaintenanceControllerFindOne$Response(params: MpcSelfMaintenanceControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcSelfMaintenanceDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcSelfMaintenanceControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcSelfMaintenanceControllerFindOne(params: MpcSelfMaintenanceControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcSelfMaintenanceDto;
    }>;
    /** Path part for operation `mpcSelfMaintenanceControllerUpdate()` */
    static readonly MpcSelfMaintenanceControllerUpdatePath = "/amims/mpc_self_maintenance/mpc_self_maintenance/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcSelfMaintenanceControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcSelfMaintenanceControllerUpdate$Response(params: MpcSelfMaintenanceControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcSelfMaintenanceDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcSelfMaintenanceControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcSelfMaintenanceControllerUpdate(params: MpcSelfMaintenanceControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcSelfMaintenanceDto;
    }>;
    /** Path part for operation `mpcSelfMaintenanceControllerRemove()` */
    static readonly MpcSelfMaintenanceControllerRemovePath = "/amims/mpc_self_maintenance/mpc_self_maintenance/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcSelfMaintenanceControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcSelfMaintenanceControllerRemove$Response(params: MpcSelfMaintenanceControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcSelfMaintenanceDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcSelfMaintenanceControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcSelfMaintenanceControllerRemove(params: MpcSelfMaintenanceControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcSelfMaintenanceDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MpcSelfMaintenanceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MpcSelfMaintenanceService>;
}
