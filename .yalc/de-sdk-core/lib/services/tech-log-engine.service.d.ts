import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTechLogEngineDto } from '../models/amims-tech-log-engine-dto';
import { TechLogEngineControllerCreate$Params } from '../fn/tech-log-engine/tech-log-engine-controller-create';
import { TechLogEngineControllerFindAll$Params } from '../fn/tech-log-engine/tech-log-engine-controller-find-all';
import { TechLogEngineControllerFindOne$Params } from '../fn/tech-log-engine/tech-log-engine-controller-find-one';
import { TechLogEngineControllerRemove$Params } from '../fn/tech-log-engine/tech-log-engine-controller-remove';
import { TechLogEngineControllerUpdate$Params } from '../fn/tech-log-engine/tech-log-engine-controller-update';
import * as i0 from "@angular/core";
export declare class TechLogEngineService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `techLogEngineControllerFindAll()` */
    static readonly TechLogEngineControllerFindAllPath = "/amims/tech_log_engine/tech_log_engine";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogEngineControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogEngineControllerFindAll$Response(params?: TechLogEngineControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogEngineDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogEngineControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogEngineControllerFindAll(params?: TechLogEngineControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogEngineDto>;
        'total'?: number;
    }>;
    /** Path part for operation `techLogEngineControllerCreate()` */
    static readonly TechLogEngineControllerCreatePath = "/amims/tech_log_engine/tech_log_engine";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogEngineControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogEngineControllerCreate$Response(params: TechLogEngineControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogEngineDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogEngineControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogEngineControllerCreate(params: TechLogEngineControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogEngineDto;
    }>;
    /** Path part for operation `techLogEngineControllerFindOne()` */
    static readonly TechLogEngineControllerFindOnePath = "/amims/tech_log_engine/tech_log_engine/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogEngineControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogEngineControllerFindOne$Response(params: TechLogEngineControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogEngineDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogEngineControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogEngineControllerFindOne(params: TechLogEngineControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogEngineDto;
    }>;
    /** Path part for operation `techLogEngineControllerUpdate()` */
    static readonly TechLogEngineControllerUpdatePath = "/amims/tech_log_engine/tech_log_engine/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogEngineControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogEngineControllerUpdate$Response(params: TechLogEngineControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogEngineDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogEngineControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogEngineControllerUpdate(params: TechLogEngineControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogEngineDto;
    }>;
    /** Path part for operation `techLogEngineControllerRemove()` */
    static readonly TechLogEngineControllerRemovePath = "/amims/tech_log_engine/tech_log_engine/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogEngineControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogEngineControllerRemove$Response(params: TechLogEngineControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogEngineDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogEngineControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogEngineControllerRemove(params: TechLogEngineControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogEngineDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TechLogEngineService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TechLogEngineService>;
}
