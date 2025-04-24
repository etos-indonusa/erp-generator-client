import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsStoreTransferDto } from '../models/amims-store-transfer-dto';
import { StoreTransferControllerCreate$Params } from '../fn/store-transfer/store-transfer-controller-create';
import { StoreTransferControllerFindAll$Params } from '../fn/store-transfer/store-transfer-controller-find-all';
import { StoreTransferControllerFindOne$Params } from '../fn/store-transfer/store-transfer-controller-find-one';
import { StoreTransferControllerRemove$Params } from '../fn/store-transfer/store-transfer-controller-remove';
import { StoreTransferControllerUpdate$Params } from '../fn/store-transfer/store-transfer-controller-update';
import * as i0 from "@angular/core";
export declare class StoreTransferService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `storeTransferControllerFindAll()` */
    static readonly StoreTransferControllerFindAllPath = "/amims/store_transfer/store_transfer";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `storeTransferControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    storeTransferControllerFindAll$Response(params?: StoreTransferControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsStoreTransferDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `storeTransferControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    storeTransferControllerFindAll(params?: StoreTransferControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsStoreTransferDto>;
        'total'?: number;
    }>;
    /** Path part for operation `storeTransferControllerCreate()` */
    static readonly StoreTransferControllerCreatePath = "/amims/store_transfer/store_transfer";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `storeTransferControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    storeTransferControllerCreate$Response(params: StoreTransferControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreTransferDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `storeTransferControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    storeTransferControllerCreate(params: StoreTransferControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreTransferDto;
    }>;
    /** Path part for operation `storeTransferControllerFindOne()` */
    static readonly StoreTransferControllerFindOnePath = "/amims/store_transfer/store_transfer/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `storeTransferControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    storeTransferControllerFindOne$Response(params: StoreTransferControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreTransferDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `storeTransferControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    storeTransferControllerFindOne(params: StoreTransferControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreTransferDto;
    }>;
    /** Path part for operation `storeTransferControllerUpdate()` */
    static readonly StoreTransferControllerUpdatePath = "/amims/store_transfer/store_transfer/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `storeTransferControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    storeTransferControllerUpdate$Response(params: StoreTransferControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreTransferDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `storeTransferControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    storeTransferControllerUpdate(params: StoreTransferControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreTransferDto;
    }>;
    /** Path part for operation `storeTransferControllerRemove()` */
    static readonly StoreTransferControllerRemovePath = "/amims/store_transfer/store_transfer/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `storeTransferControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    storeTransferControllerRemove$Response(params: StoreTransferControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreTransferDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `storeTransferControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    storeTransferControllerRemove(params: StoreTransferControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreTransferDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StoreTransferService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StoreTransferService>;
}
