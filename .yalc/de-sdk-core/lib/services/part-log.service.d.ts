import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartLogDto } from '../models/amims-part-log-dto';
import { PartLogControllerCreate$Params } from '../fn/part-log/part-log-controller-create';
import { PartLogControllerFindAll$Params } from '../fn/part-log/part-log-controller-find-all';
import { PartLogControllerFindOne$Params } from '../fn/part-log/part-log-controller-find-one';
import { PartLogControllerRemove$Params } from '../fn/part-log/part-log-controller-remove';
import { PartLogControllerUpdate$Params } from '../fn/part-log/part-log-controller-update';
import * as i0 from "@angular/core";
export declare class PartLogService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partLogControllerFindAll()` */
    static readonly PartLogControllerFindAllPath = "/amims/part_log/part_log";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partLogControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    partLogControllerFindAll$Response(params?: PartLogControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartLogDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partLogControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partLogControllerFindAll(params?: PartLogControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartLogDto>;
        'total'?: number;
    }>;
    /** Path part for operation `partLogControllerCreate()` */
    static readonly PartLogControllerCreatePath = "/amims/part_log/part_log";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partLogControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partLogControllerCreate$Response(params: PartLogControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartLogDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partLogControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partLogControllerCreate(params: PartLogControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartLogDto;
    }>;
    /** Path part for operation `partLogControllerFindOne()` */
    static readonly PartLogControllerFindOnePath = "/amims/part_log/part_log/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partLogControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    partLogControllerFindOne$Response(params: PartLogControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartLogDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partLogControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partLogControllerFindOne(params: PartLogControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartLogDto;
    }>;
    /** Path part for operation `partLogControllerUpdate()` */
    static readonly PartLogControllerUpdatePath = "/amims/part_log/part_log/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partLogControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partLogControllerUpdate$Response(params: PartLogControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartLogDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partLogControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partLogControllerUpdate(params: PartLogControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartLogDto;
    }>;
    /** Path part for operation `partLogControllerRemove()` */
    static readonly PartLogControllerRemovePath = "/amims/part_log/part_log/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partLogControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    partLogControllerRemove$Response(params: PartLogControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartLogDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partLogControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partLogControllerRemove(params: PartLogControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartLogDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartLogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartLogService>;
}
