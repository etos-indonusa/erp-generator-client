import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTechLogEngineCheckDto } from '../models/amims-tech-log-engine-check-dto';
import { TechLogEngineCheckControllerCreate$Params } from '../fn/tech-log-engine-check/tech-log-engine-check-controller-create';
import { TechLogEngineCheckControllerFindAll$Params } from '../fn/tech-log-engine-check/tech-log-engine-check-controller-find-all';
import { TechLogEngineCheckControllerFindOne$Params } from '../fn/tech-log-engine-check/tech-log-engine-check-controller-find-one';
import { TechLogEngineCheckControllerRemove$Params } from '../fn/tech-log-engine-check/tech-log-engine-check-controller-remove';
import { TechLogEngineCheckControllerUpdate$Params } from '../fn/tech-log-engine-check/tech-log-engine-check-controller-update';
import * as i0 from "@angular/core";
export declare class TechLogEngineCheckService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `techLogEngineCheckControllerFindAll()` */
    static readonly TechLogEngineCheckControllerFindAllPath = "/amims/tech_log_engine_check/tech_log_engine_check";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogEngineCheckControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogEngineCheckControllerFindAll$Response(params?: TechLogEngineCheckControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogEngineCheckDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogEngineCheckControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogEngineCheckControllerFindAll(params?: TechLogEngineCheckControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogEngineCheckDto>;
        'total'?: number;
    }>;
    /** Path part for operation `techLogEngineCheckControllerCreate()` */
    static readonly TechLogEngineCheckControllerCreatePath = "/amims/tech_log_engine_check/tech_log_engine_check";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogEngineCheckControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogEngineCheckControllerCreate$Response(params: TechLogEngineCheckControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogEngineCheckDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogEngineCheckControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogEngineCheckControllerCreate(params: TechLogEngineCheckControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogEngineCheckDto;
    }>;
    /** Path part for operation `techLogEngineCheckControllerFindOne()` */
    static readonly TechLogEngineCheckControllerFindOnePath = "/amims/tech_log_engine_check/tech_log_engine_check/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogEngineCheckControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogEngineCheckControllerFindOne$Response(params: TechLogEngineCheckControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogEngineCheckDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogEngineCheckControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogEngineCheckControllerFindOne(params: TechLogEngineCheckControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogEngineCheckDto;
    }>;
    /** Path part for operation `techLogEngineCheckControllerUpdate()` */
    static readonly TechLogEngineCheckControllerUpdatePath = "/amims/tech_log_engine_check/tech_log_engine_check/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogEngineCheckControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogEngineCheckControllerUpdate$Response(params: TechLogEngineCheckControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogEngineCheckDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogEngineCheckControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogEngineCheckControllerUpdate(params: TechLogEngineCheckControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogEngineCheckDto;
    }>;
    /** Path part for operation `techLogEngineCheckControllerRemove()` */
    static readonly TechLogEngineCheckControllerRemovePath = "/amims/tech_log_engine_check/tech_log_engine_check/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogEngineCheckControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogEngineCheckControllerRemove$Response(params: TechLogEngineCheckControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogEngineCheckDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogEngineCheckControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogEngineCheckControllerRemove(params: TechLogEngineCheckControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogEngineCheckDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TechLogEngineCheckService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TechLogEngineCheckService>;
}
