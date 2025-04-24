import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLogProcessDto } from '../models/amims-log-process-dto';
import { LogProcessControllerCreate$Params } from '../fn/log-process/log-process-controller-create';
import { LogProcessControllerFindAll$Params } from '../fn/log-process/log-process-controller-find-all';
import { LogProcessControllerFindOne$Params } from '../fn/log-process/log-process-controller-find-one';
import { LogProcessControllerRemove$Params } from '../fn/log-process/log-process-controller-remove';
import { LogProcessControllerUpdate$Params } from '../fn/log-process/log-process-controller-update';
import * as i0 from "@angular/core";
export declare class LogProcessService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `logProcessControllerFindAll()` */
    static readonly LogProcessControllerFindAllPath = "/amims/log_process/log_process";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logProcessControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    logProcessControllerFindAll$Response(params?: LogProcessControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogProcessDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logProcessControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    logProcessControllerFindAll(params?: LogProcessControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogProcessDto>;
        'total'?: number;
    }>;
    /** Path part for operation `logProcessControllerCreate()` */
    static readonly LogProcessControllerCreatePath = "/amims/log_process/log_process";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logProcessControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logProcessControllerCreate$Response(params: LogProcessControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogProcessDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logProcessControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logProcessControllerCreate(params: LogProcessControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogProcessDto;
    }>;
    /** Path part for operation `logProcessControllerFindOne()` */
    static readonly LogProcessControllerFindOnePath = "/amims/log_process/log_process/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logProcessControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    logProcessControllerFindOne$Response(params: LogProcessControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogProcessDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logProcessControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    logProcessControllerFindOne(params: LogProcessControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogProcessDto;
    }>;
    /** Path part for operation `logProcessControllerUpdate()` */
    static readonly LogProcessControllerUpdatePath = "/amims/log_process/log_process/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logProcessControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logProcessControllerUpdate$Response(params: LogProcessControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogProcessDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logProcessControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logProcessControllerUpdate(params: LogProcessControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogProcessDto;
    }>;
    /** Path part for operation `logProcessControllerRemove()` */
    static readonly LogProcessControllerRemovePath = "/amims/log_process/log_process/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logProcessControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    logProcessControllerRemove$Response(params: LogProcessControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogProcessDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logProcessControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    logProcessControllerRemove(params: LogProcessControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogProcessDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogProcessService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LogProcessService>;
}
