import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurReturnItemDto } from '../models/amims-pur-return-item-dto';
import { PurReturnItemControllerCreate$Params } from '../fn/pur-return-item/pur-return-item-controller-create';
import { PurReturnItemControllerFindAll$Params } from '../fn/pur-return-item/pur-return-item-controller-find-all';
import { PurReturnItemControllerFindOne$Params } from '../fn/pur-return-item/pur-return-item-controller-find-one';
import { PurReturnItemControllerRemove$Params } from '../fn/pur-return-item/pur-return-item-controller-remove';
import { PurReturnItemControllerUpdate$Params } from '../fn/pur-return-item/pur-return-item-controller-update';
import * as i0 from "@angular/core";
export declare class PurReturnItemService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purReturnItemControllerFindAll()` */
    static readonly PurReturnItemControllerFindAllPath = "/amims/pur_return_item/pur_return_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purReturnItemControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    purReturnItemControllerFindAll$Response(params?: PurReturnItemControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurReturnItemDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purReturnItemControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purReturnItemControllerFindAll(params?: PurReturnItemControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurReturnItemDto>;
        'total'?: number;
    }>;
    /** Path part for operation `purReturnItemControllerCreate()` */
    static readonly PurReturnItemControllerCreatePath = "/amims/pur_return_item/pur_return_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purReturnItemControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purReturnItemControllerCreate$Response(params: PurReturnItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurReturnItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purReturnItemControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purReturnItemControllerCreate(params: PurReturnItemControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurReturnItemDto;
    }>;
    /** Path part for operation `purReturnItemControllerFindOne()` */
    static readonly PurReturnItemControllerFindOnePath = "/amims/pur_return_item/pur_return_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purReturnItemControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    purReturnItemControllerFindOne$Response(params: PurReturnItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurReturnItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purReturnItemControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purReturnItemControllerFindOne(params: PurReturnItemControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurReturnItemDto;
    }>;
    /** Path part for operation `purReturnItemControllerUpdate()` */
    static readonly PurReturnItemControllerUpdatePath = "/amims/pur_return_item/pur_return_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purReturnItemControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purReturnItemControllerUpdate$Response(params: PurReturnItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurReturnItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purReturnItemControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purReturnItemControllerUpdate(params: PurReturnItemControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurReturnItemDto;
    }>;
    /** Path part for operation `purReturnItemControllerRemove()` */
    static readonly PurReturnItemControllerRemovePath = "/amims/pur_return_item/pur_return_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purReturnItemControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    purReturnItemControllerRemove$Response(params: PurReturnItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurReturnItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purReturnItemControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purReturnItemControllerRemove(params: PurReturnItemControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurReturnItemDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurReturnItemService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurReturnItemService>;
}
