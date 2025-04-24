import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLogTsnTsoDto } from '../models/amims-log-tsn-tso-dto';
import { LogTsnTsoControllerCreate$Params } from '../fn/log-tsn-tso/log-tsn-tso-controller-create';
import { LogTsnTsoControllerFindAll$Params } from '../fn/log-tsn-tso/log-tsn-tso-controller-find-all';
import { LogTsnTsoControllerFindOne$Params } from '../fn/log-tsn-tso/log-tsn-tso-controller-find-one';
import { LogTsnTsoControllerRemove$Params } from '../fn/log-tsn-tso/log-tsn-tso-controller-remove';
import { LogTsnTsoControllerUpdate$Params } from '../fn/log-tsn-tso/log-tsn-tso-controller-update';
import * as i0 from "@angular/core";
export declare class LogTsnTsoService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `logTsnTsoControllerFindAll()` */
    static readonly LogTsnTsoControllerFindAllPath = "/amims/log_tsn_tso/log_tsn_tso";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logTsnTsoControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    logTsnTsoControllerFindAll$Response(params?: LogTsnTsoControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogTsnTsoDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logTsnTsoControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    logTsnTsoControllerFindAll(params?: LogTsnTsoControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogTsnTsoDto>;
        'total'?: number;
    }>;
    /** Path part for operation `logTsnTsoControllerCreate()` */
    static readonly LogTsnTsoControllerCreatePath = "/amims/log_tsn_tso/log_tsn_tso";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logTsnTsoControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logTsnTsoControllerCreate$Response(params: LogTsnTsoControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogTsnTsoDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logTsnTsoControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logTsnTsoControllerCreate(params: LogTsnTsoControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogTsnTsoDto;
    }>;
    /** Path part for operation `logTsnTsoControllerFindOne()` */
    static readonly LogTsnTsoControllerFindOnePath = "/amims/log_tsn_tso/log_tsn_tso/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logTsnTsoControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    logTsnTsoControllerFindOne$Response(params: LogTsnTsoControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogTsnTsoDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logTsnTsoControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    logTsnTsoControllerFindOne(params: LogTsnTsoControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogTsnTsoDto;
    }>;
    /** Path part for operation `logTsnTsoControllerUpdate()` */
    static readonly LogTsnTsoControllerUpdatePath = "/amims/log_tsn_tso/log_tsn_tso/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logTsnTsoControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logTsnTsoControllerUpdate$Response(params: LogTsnTsoControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogTsnTsoDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logTsnTsoControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logTsnTsoControllerUpdate(params: LogTsnTsoControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogTsnTsoDto;
    }>;
    /** Path part for operation `logTsnTsoControllerRemove()` */
    static readonly LogTsnTsoControllerRemovePath = "/amims/log_tsn_tso/log_tsn_tso/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logTsnTsoControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    logTsnTsoControllerRemove$Response(params: LogTsnTsoControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogTsnTsoDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logTsnTsoControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    logTsnTsoControllerRemove(params: LogTsnTsoControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogTsnTsoDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogTsnTsoService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LogTsnTsoService>;
}
