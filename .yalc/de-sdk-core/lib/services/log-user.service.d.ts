import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLogUserDto } from '../models/amims-log-user-dto';
import { LogUserControllerCreate$Params } from '../fn/log-user/log-user-controller-create';
import { LogUserControllerFindAll$Params } from '../fn/log-user/log-user-controller-find-all';
import { LogUserControllerFindOne$Params } from '../fn/log-user/log-user-controller-find-one';
import { LogUserControllerRemove$Params } from '../fn/log-user/log-user-controller-remove';
import { LogUserControllerUpdate$Params } from '../fn/log-user/log-user-controller-update';
import * as i0 from "@angular/core";
export declare class LogUserService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `logUserControllerFindAll()` */
    static readonly LogUserControllerFindAllPath = "/amims/log_user/log_user";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logUserControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    logUserControllerFindAll$Response(params?: LogUserControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogUserDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logUserControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    logUserControllerFindAll(params?: LogUserControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogUserDto>;
        'total'?: number;
    }>;
    /** Path part for operation `logUserControllerCreate()` */
    static readonly LogUserControllerCreatePath = "/amims/log_user/log_user";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logUserControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logUserControllerCreate$Response(params: LogUserControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogUserDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logUserControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logUserControllerCreate(params: LogUserControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogUserDto;
    }>;
    /** Path part for operation `logUserControllerFindOne()` */
    static readonly LogUserControllerFindOnePath = "/amims/log_user/log_user/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logUserControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    logUserControllerFindOne$Response(params: LogUserControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogUserDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logUserControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    logUserControllerFindOne(params: LogUserControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogUserDto;
    }>;
    /** Path part for operation `logUserControllerUpdate()` */
    static readonly LogUserControllerUpdatePath = "/amims/log_user/log_user/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logUserControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logUserControllerUpdate$Response(params: LogUserControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogUserDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logUserControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logUserControllerUpdate(params: LogUserControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogUserDto;
    }>;
    /** Path part for operation `logUserControllerRemove()` */
    static readonly LogUserControllerRemovePath = "/amims/log_user/log_user/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logUserControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    logUserControllerRemove$Response(params: LogUserControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogUserDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logUserControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    logUserControllerRemove(params: LogUserControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogUserDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogUserService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LogUserService>;
}
