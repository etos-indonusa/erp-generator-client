import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLogTransferDto } from '../models/amims-log-transfer-dto';
import { LogTransferControllerCreate$Params } from '../fn/log-transfer/log-transfer-controller-create';
import { LogTransferControllerFindAll$Params } from '../fn/log-transfer/log-transfer-controller-find-all';
import { LogTransferControllerFindOne$Params } from '../fn/log-transfer/log-transfer-controller-find-one';
import { LogTransferControllerRemove$Params } from '../fn/log-transfer/log-transfer-controller-remove';
import { LogTransferControllerUpdate$Params } from '../fn/log-transfer/log-transfer-controller-update';
import * as i0 from "@angular/core";
export declare class LogTransferService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `logTransferControllerFindAll()` */
    static readonly LogTransferControllerFindAllPath = "/amims/log_transfer/log_transfer";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logTransferControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    logTransferControllerFindAll$Response(params?: LogTransferControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogTransferDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logTransferControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    logTransferControllerFindAll(params?: LogTransferControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogTransferDto>;
        'total'?: number;
    }>;
    /** Path part for operation `logTransferControllerCreate()` */
    static readonly LogTransferControllerCreatePath = "/amims/log_transfer/log_transfer";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logTransferControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logTransferControllerCreate$Response(params: LogTransferControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogTransferDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logTransferControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logTransferControllerCreate(params: LogTransferControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogTransferDto;
    }>;
    /** Path part for operation `logTransferControllerFindOne()` */
    static readonly LogTransferControllerFindOnePath = "/amims/log_transfer/log_transfer/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logTransferControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    logTransferControllerFindOne$Response(params: LogTransferControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogTransferDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logTransferControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    logTransferControllerFindOne(params: LogTransferControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogTransferDto;
    }>;
    /** Path part for operation `logTransferControllerUpdate()` */
    static readonly LogTransferControllerUpdatePath = "/amims/log_transfer/log_transfer/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logTransferControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logTransferControllerUpdate$Response(params: LogTransferControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogTransferDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logTransferControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logTransferControllerUpdate(params: LogTransferControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogTransferDto;
    }>;
    /** Path part for operation `logTransferControllerRemove()` */
    static readonly LogTransferControllerRemovePath = "/amims/log_transfer/log_transfer/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logTransferControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    logTransferControllerRemove$Response(params: LogTransferControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogTransferDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logTransferControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    logTransferControllerRemove(params: LogTransferControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogTransferDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogTransferService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LogTransferService>;
}
