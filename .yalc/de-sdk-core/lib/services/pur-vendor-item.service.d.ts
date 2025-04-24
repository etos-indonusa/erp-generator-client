import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurVendorItemDto } from '../models/amims-pur-vendor-item-dto';
import { PurVendorItemControllerCreate$Params } from '../fn/pur-vendor-item/pur-vendor-item-controller-create';
import { PurVendorItemControllerFindAll$Params } from '../fn/pur-vendor-item/pur-vendor-item-controller-find-all';
import { PurVendorItemControllerFindOne$Params } from '../fn/pur-vendor-item/pur-vendor-item-controller-find-one';
import { PurVendorItemControllerRemove$Params } from '../fn/pur-vendor-item/pur-vendor-item-controller-remove';
import { PurVendorItemControllerUpdate$Params } from '../fn/pur-vendor-item/pur-vendor-item-controller-update';
import * as i0 from "@angular/core";
export declare class PurVendorItemService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purVendorItemControllerFindAll()` */
    static readonly PurVendorItemControllerFindAllPath = "/amims/pur_vendor_item/pur_vendor_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purVendorItemControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    purVendorItemControllerFindAll$Response(params?: PurVendorItemControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurVendorItemDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purVendorItemControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purVendorItemControllerFindAll(params?: PurVendorItemControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurVendorItemDto>;
        'total'?: number;
    }>;
    /** Path part for operation `purVendorItemControllerCreate()` */
    static readonly PurVendorItemControllerCreatePath = "/amims/pur_vendor_item/pur_vendor_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purVendorItemControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purVendorItemControllerCreate$Response(params: PurVendorItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purVendorItemControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purVendorItemControllerCreate(params: PurVendorItemControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorItemDto;
    }>;
    /** Path part for operation `purVendorItemControllerFindOne()` */
    static readonly PurVendorItemControllerFindOnePath = "/amims/pur_vendor_item/pur_vendor_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purVendorItemControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    purVendorItemControllerFindOne$Response(params: PurVendorItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purVendorItemControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purVendorItemControllerFindOne(params: PurVendorItemControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorItemDto;
    }>;
    /** Path part for operation `purVendorItemControllerUpdate()` */
    static readonly PurVendorItemControllerUpdatePath = "/amims/pur_vendor_item/pur_vendor_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purVendorItemControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purVendorItemControllerUpdate$Response(params: PurVendorItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purVendorItemControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purVendorItemControllerUpdate(params: PurVendorItemControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorItemDto;
    }>;
    /** Path part for operation `purVendorItemControllerRemove()` */
    static readonly PurVendorItemControllerRemovePath = "/amims/pur_vendor_item/pur_vendor_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purVendorItemControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    purVendorItemControllerRemove$Response(params: PurVendorItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purVendorItemControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purVendorItemControllerRemove(params: PurVendorItemControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorItemDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurVendorItemService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurVendorItemService>;
}
