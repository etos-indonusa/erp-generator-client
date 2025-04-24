import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPilotDto } from '../models/amims-pilot-dto';
import { PilotControllerCreate$Params } from '../fn/pilot/pilot-controller-create';
import { PilotControllerFindAll$Params } from '../fn/pilot/pilot-controller-find-all';
import { PilotControllerFindOne$Params } from '../fn/pilot/pilot-controller-find-one';
import { PilotControllerRemove$Params } from '../fn/pilot/pilot-controller-remove';
import { PilotControllerUpdate$Params } from '../fn/pilot/pilot-controller-update';
import * as i0 from "@angular/core";
export declare class PilotService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `pilotControllerFindAll()` */
    static readonly PilotControllerFindAllPath = "/amims/pilot/pilot";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `pilotControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    pilotControllerFindAll$Response(params?: PilotControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPilotDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `pilotControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    pilotControllerFindAll(params?: PilotControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPilotDto>;
        'total'?: number;
    }>;
    /** Path part for operation `pilotControllerCreate()` */
    static readonly PilotControllerCreatePath = "/amims/pilot/pilot";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `pilotControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    pilotControllerCreate$Response(params: PilotControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPilotDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `pilotControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    pilotControllerCreate(params: PilotControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPilotDto;
    }>;
    /** Path part for operation `pilotControllerFindOne()` */
    static readonly PilotControllerFindOnePath = "/amims/pilot/pilot/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `pilotControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    pilotControllerFindOne$Response(params: PilotControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPilotDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `pilotControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    pilotControllerFindOne(params: PilotControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPilotDto;
    }>;
    /** Path part for operation `pilotControllerUpdate()` */
    static readonly PilotControllerUpdatePath = "/amims/pilot/pilot/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `pilotControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    pilotControllerUpdate$Response(params: PilotControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPilotDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `pilotControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    pilotControllerUpdate(params: PilotControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPilotDto;
    }>;
    /** Path part for operation `pilotControllerRemove()` */
    static readonly PilotControllerRemovePath = "/amims/pilot/pilot/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `pilotControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    pilotControllerRemove$Response(params: PilotControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPilotDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `pilotControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    pilotControllerRemove(params: PilotControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPilotDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PilotService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PilotService>;
}
