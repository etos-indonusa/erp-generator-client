import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsStoreDestroyDto } from '../models/amims-store-destroy-dto';
import { StoreDestroyControllerCreate$Params } from '../fn/store-destroy/store-destroy-controller-create';
import { StoreDestroyControllerFindAll$Params } from '../fn/store-destroy/store-destroy-controller-find-all';
import { StoreDestroyControllerFindOne$Params } from '../fn/store-destroy/store-destroy-controller-find-one';
import { StoreDestroyControllerRemove$Params } from '../fn/store-destroy/store-destroy-controller-remove';
import { StoreDestroyControllerUpdate$Params } from '../fn/store-destroy/store-destroy-controller-update';
import * as i0 from "@angular/core";
export declare class StoreDestroyService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `storeDestroyControllerFindAll()` */
    static readonly StoreDestroyControllerFindAllPath = "/amims/store_destroy/store_destroy";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `storeDestroyControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    storeDestroyControllerFindAll$Response(params?: StoreDestroyControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsStoreDestroyDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `storeDestroyControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    storeDestroyControllerFindAll(params?: StoreDestroyControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsStoreDestroyDto>;
        'total'?: number;
    }>;
    /** Path part for operation `storeDestroyControllerCreate()` */
    static readonly StoreDestroyControllerCreatePath = "/amims/store_destroy/store_destroy";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `storeDestroyControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    storeDestroyControllerCreate$Response(params: StoreDestroyControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreDestroyDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `storeDestroyControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    storeDestroyControllerCreate(params: StoreDestroyControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreDestroyDto;
    }>;
    /** Path part for operation `storeDestroyControllerFindOne()` */
    static readonly StoreDestroyControllerFindOnePath = "/amims/store_destroy/store_destroy/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `storeDestroyControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    storeDestroyControllerFindOne$Response(params: StoreDestroyControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreDestroyDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `storeDestroyControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    storeDestroyControllerFindOne(params: StoreDestroyControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreDestroyDto;
    }>;
    /** Path part for operation `storeDestroyControllerUpdate()` */
    static readonly StoreDestroyControllerUpdatePath = "/amims/store_destroy/store_destroy/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `storeDestroyControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    storeDestroyControllerUpdate$Response(params: StoreDestroyControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreDestroyDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `storeDestroyControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    storeDestroyControllerUpdate(params: StoreDestroyControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreDestroyDto;
    }>;
    /** Path part for operation `storeDestroyControllerRemove()` */
    static readonly StoreDestroyControllerRemovePath = "/amims/store_destroy/store_destroy/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `storeDestroyControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    storeDestroyControllerRemove$Response(params: StoreDestroyControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreDestroyDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `storeDestroyControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    storeDestroyControllerRemove(params: StoreDestroyControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreDestroyDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StoreDestroyService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StoreDestroyService>;
}
