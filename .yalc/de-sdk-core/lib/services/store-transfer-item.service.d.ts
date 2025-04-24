import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsStoreTransferItemDto } from '../models/amims-store-transfer-item-dto';
import { StoreTransferItemControllerCreate$Params } from '../fn/store-transfer-item/store-transfer-item-controller-create';
import { StoreTransferItemControllerFindAll$Params } from '../fn/store-transfer-item/store-transfer-item-controller-find-all';
import { StoreTransferItemControllerFindOne$Params } from '../fn/store-transfer-item/store-transfer-item-controller-find-one';
import { StoreTransferItemControllerRemove$Params } from '../fn/store-transfer-item/store-transfer-item-controller-remove';
import { StoreTransferItemControllerUpdate$Params } from '../fn/store-transfer-item/store-transfer-item-controller-update';
import * as i0 from "@angular/core";
export declare class StoreTransferItemService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `storeTransferItemControllerFindAll()` */
    static readonly StoreTransferItemControllerFindAllPath = "/amims/store_transfer_item/store_transfer_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `storeTransferItemControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    storeTransferItemControllerFindAll$Response(params?: StoreTransferItemControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsStoreTransferItemDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `storeTransferItemControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    storeTransferItemControllerFindAll(params?: StoreTransferItemControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsStoreTransferItemDto>;
        'total'?: number;
    }>;
    /** Path part for operation `storeTransferItemControllerCreate()` */
    static readonly StoreTransferItemControllerCreatePath = "/amims/store_transfer_item/store_transfer_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `storeTransferItemControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    storeTransferItemControllerCreate$Response(params: StoreTransferItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreTransferItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `storeTransferItemControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    storeTransferItemControllerCreate(params: StoreTransferItemControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreTransferItemDto;
    }>;
    /** Path part for operation `storeTransferItemControllerFindOne()` */
    static readonly StoreTransferItemControllerFindOnePath = "/amims/store_transfer_item/store_transfer_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `storeTransferItemControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    storeTransferItemControllerFindOne$Response(params: StoreTransferItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreTransferItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `storeTransferItemControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    storeTransferItemControllerFindOne(params: StoreTransferItemControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreTransferItemDto;
    }>;
    /** Path part for operation `storeTransferItemControllerUpdate()` */
    static readonly StoreTransferItemControllerUpdatePath = "/amims/store_transfer_item/store_transfer_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `storeTransferItemControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    storeTransferItemControllerUpdate$Response(params: StoreTransferItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreTransferItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `storeTransferItemControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    storeTransferItemControllerUpdate(params: StoreTransferItemControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreTransferItemDto;
    }>;
    /** Path part for operation `storeTransferItemControllerRemove()` */
    static readonly StoreTransferItemControllerRemovePath = "/amims/store_transfer_item/store_transfer_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `storeTransferItemControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    storeTransferItemControllerRemove$Response(params: StoreTransferItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreTransferItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `storeTransferItemControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    storeTransferItemControllerRemove(params: StoreTransferItemControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreTransferItemDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StoreTransferItemService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StoreTransferItemService>;
}
