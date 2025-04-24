import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsInternalGrnDto } from '../models/amims-internal-grn-dto';
import { InternalGrnControllerCreate$Params } from '../fn/internal-grn/internal-grn-controller-create';
import { InternalGrnControllerFindAll$Params } from '../fn/internal-grn/internal-grn-controller-find-all';
import { InternalGrnControllerFindOne$Params } from '../fn/internal-grn/internal-grn-controller-find-one';
import { InternalGrnControllerRemove$Params } from '../fn/internal-grn/internal-grn-controller-remove';
import { InternalGrnControllerUpdate$Params } from '../fn/internal-grn/internal-grn-controller-update';
import * as i0 from "@angular/core";
export declare class InternalGrnService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `internalGrnControllerFindAll()` */
    static readonly InternalGrnControllerFindAllPath = "/amims/internal_grn/internal_grn";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `internalGrnControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    internalGrnControllerFindAll$Response(params?: InternalGrnControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsInternalGrnDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `internalGrnControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    internalGrnControllerFindAll(params?: InternalGrnControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsInternalGrnDto>;
        'total'?: number;
    }>;
    /** Path part for operation `internalGrnControllerCreate()` */
    static readonly InternalGrnControllerCreatePath = "/amims/internal_grn/internal_grn";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `internalGrnControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    internalGrnControllerCreate$Response(params: InternalGrnControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsInternalGrnDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `internalGrnControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    internalGrnControllerCreate(params: InternalGrnControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsInternalGrnDto;
    }>;
    /** Path part for operation `internalGrnControllerFindOne()` */
    static readonly InternalGrnControllerFindOnePath = "/amims/internal_grn/internal_grn/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `internalGrnControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    internalGrnControllerFindOne$Response(params: InternalGrnControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsInternalGrnDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `internalGrnControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    internalGrnControllerFindOne(params: InternalGrnControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsInternalGrnDto;
    }>;
    /** Path part for operation `internalGrnControllerUpdate()` */
    static readonly InternalGrnControllerUpdatePath = "/amims/internal_grn/internal_grn/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `internalGrnControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    internalGrnControllerUpdate$Response(params: InternalGrnControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsInternalGrnDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `internalGrnControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    internalGrnControllerUpdate(params: InternalGrnControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsInternalGrnDto;
    }>;
    /** Path part for operation `internalGrnControllerRemove()` */
    static readonly InternalGrnControllerRemovePath = "/amims/internal_grn/internal_grn/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `internalGrnControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    internalGrnControllerRemove$Response(params: InternalGrnControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsInternalGrnDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `internalGrnControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    internalGrnControllerRemove(params: InternalGrnControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsInternalGrnDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<InternalGrnService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InternalGrnService>;
}
