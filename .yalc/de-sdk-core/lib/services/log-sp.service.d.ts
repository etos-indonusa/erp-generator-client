import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLogSpDto } from '../models/amims-log-sp-dto';
import { LogSpControllerCreate$Params } from '../fn/log-sp/log-sp-controller-create';
import { LogSpControllerFindAll$Params } from '../fn/log-sp/log-sp-controller-find-all';
import { LogSpControllerFindOne$Params } from '../fn/log-sp/log-sp-controller-find-one';
import { LogSpControllerRemove$Params } from '../fn/log-sp/log-sp-controller-remove';
import { LogSpControllerUpdate$Params } from '../fn/log-sp/log-sp-controller-update';
import * as i0 from "@angular/core";
export declare class LogSpService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `logSpControllerFindAll()` */
    static readonly LogSpControllerFindAllPath = "/amims/log_sp/log_sp";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logSpControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    logSpControllerFindAll$Response(params?: LogSpControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogSpDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logSpControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    logSpControllerFindAll(params?: LogSpControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogSpDto>;
        'total'?: number;
    }>;
    /** Path part for operation `logSpControllerCreate()` */
    static readonly LogSpControllerCreatePath = "/amims/log_sp/log_sp";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logSpControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logSpControllerCreate$Response(params: LogSpControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogSpDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logSpControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logSpControllerCreate(params: LogSpControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogSpDto;
    }>;
    /** Path part for operation `logSpControllerFindOne()` */
    static readonly LogSpControllerFindOnePath = "/amims/log_sp/log_sp/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logSpControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    logSpControllerFindOne$Response(params: LogSpControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogSpDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logSpControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    logSpControllerFindOne(params: LogSpControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogSpDto;
    }>;
    /** Path part for operation `logSpControllerUpdate()` */
    static readonly LogSpControllerUpdatePath = "/amims/log_sp/log_sp/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logSpControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logSpControllerUpdate$Response(params: LogSpControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogSpDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logSpControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logSpControllerUpdate(params: LogSpControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogSpDto;
    }>;
    /** Path part for operation `logSpControllerRemove()` */
    static readonly LogSpControllerRemovePath = "/amims/log_sp/log_sp/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logSpControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    logSpControllerRemove$Response(params: LogSpControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogSpDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logSpControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    logSpControllerRemove(params: LogSpControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogSpDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogSpService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LogSpService>;
}
