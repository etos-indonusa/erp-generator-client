import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsInternalGrnItemDto } from '../models/amims-internal-grn-item-dto';
import { InternalGrnItemControllerCreate$Params } from '../fn/internal-grn-item/internal-grn-item-controller-create';
import { InternalGrnItemControllerFindAll$Params } from '../fn/internal-grn-item/internal-grn-item-controller-find-all';
import { InternalGrnItemControllerFindOne$Params } from '../fn/internal-grn-item/internal-grn-item-controller-find-one';
import { InternalGrnItemControllerRemove$Params } from '../fn/internal-grn-item/internal-grn-item-controller-remove';
import { InternalGrnItemControllerUpdate$Params } from '../fn/internal-grn-item/internal-grn-item-controller-update';
import * as i0 from "@angular/core";
export declare class InternalGrnItemService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `internalGrnItemControllerFindAll()` */
    static readonly InternalGrnItemControllerFindAllPath = "/amims/internal_grn_item/internal_grn_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `internalGrnItemControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    internalGrnItemControllerFindAll$Response(params?: InternalGrnItemControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsInternalGrnItemDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `internalGrnItemControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    internalGrnItemControllerFindAll(params?: InternalGrnItemControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsInternalGrnItemDto>;
        'total'?: number;
    }>;
    /** Path part for operation `internalGrnItemControllerCreate()` */
    static readonly InternalGrnItemControllerCreatePath = "/amims/internal_grn_item/internal_grn_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `internalGrnItemControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    internalGrnItemControllerCreate$Response(params: InternalGrnItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsInternalGrnItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `internalGrnItemControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    internalGrnItemControllerCreate(params: InternalGrnItemControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsInternalGrnItemDto;
    }>;
    /** Path part for operation `internalGrnItemControllerFindOne()` */
    static readonly InternalGrnItemControllerFindOnePath = "/amims/internal_grn_item/internal_grn_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `internalGrnItemControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    internalGrnItemControllerFindOne$Response(params: InternalGrnItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsInternalGrnItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `internalGrnItemControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    internalGrnItemControllerFindOne(params: InternalGrnItemControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsInternalGrnItemDto;
    }>;
    /** Path part for operation `internalGrnItemControllerUpdate()` */
    static readonly InternalGrnItemControllerUpdatePath = "/amims/internal_grn_item/internal_grn_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `internalGrnItemControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    internalGrnItemControllerUpdate$Response(params: InternalGrnItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsInternalGrnItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `internalGrnItemControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    internalGrnItemControllerUpdate(params: InternalGrnItemControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsInternalGrnItemDto;
    }>;
    /** Path part for operation `internalGrnItemControllerRemove()` */
    static readonly InternalGrnItemControllerRemovePath = "/amims/internal_grn_item/internal_grn_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `internalGrnItemControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    internalGrnItemControllerRemove$Response(params: InternalGrnItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsInternalGrnItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `internalGrnItemControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    internalGrnItemControllerRemove(params: InternalGrnItemControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsInternalGrnItemDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<InternalGrnItemService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InternalGrnItemService>;
}
