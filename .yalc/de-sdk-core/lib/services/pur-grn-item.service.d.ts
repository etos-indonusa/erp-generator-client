import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurGrnItemDto } from '../models/amims-pur-grn-item-dto';
import { PurGrnItemControllerCreate$Params } from '../fn/pur-grn-item/pur-grn-item-controller-create';
import { PurGrnItemControllerFindAll$Params } from '../fn/pur-grn-item/pur-grn-item-controller-find-all';
import { PurGrnItemControllerFindOne$Params } from '../fn/pur-grn-item/pur-grn-item-controller-find-one';
import { PurGrnItemControllerRemove$Params } from '../fn/pur-grn-item/pur-grn-item-controller-remove';
import { PurGrnItemControllerUpdate$Params } from '../fn/pur-grn-item/pur-grn-item-controller-update';
import * as i0 from "@angular/core";
export declare class PurGrnItemService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purGrnItemControllerFindAll()` */
    static readonly PurGrnItemControllerFindAllPath = "/amims/pur_grn_item/pur_grn_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purGrnItemControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    purGrnItemControllerFindAll$Response(params?: PurGrnItemControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurGrnItemDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purGrnItemControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purGrnItemControllerFindAll(params?: PurGrnItemControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurGrnItemDto>;
        'total'?: number;
    }>;
    /** Path part for operation `purGrnItemControllerCreate()` */
    static readonly PurGrnItemControllerCreatePath = "/amims/pur_grn_item/pur_grn_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purGrnItemControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purGrnItemControllerCreate$Response(params: PurGrnItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurGrnItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purGrnItemControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purGrnItemControllerCreate(params: PurGrnItemControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurGrnItemDto;
    }>;
    /** Path part for operation `purGrnItemControllerFindOne()` */
    static readonly PurGrnItemControllerFindOnePath = "/amims/pur_grn_item/pur_grn_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purGrnItemControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    purGrnItemControllerFindOne$Response(params: PurGrnItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurGrnItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purGrnItemControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purGrnItemControllerFindOne(params: PurGrnItemControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurGrnItemDto;
    }>;
    /** Path part for operation `purGrnItemControllerUpdate()` */
    static readonly PurGrnItemControllerUpdatePath = "/amims/pur_grn_item/pur_grn_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purGrnItemControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purGrnItemControllerUpdate$Response(params: PurGrnItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurGrnItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purGrnItemControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purGrnItemControllerUpdate(params: PurGrnItemControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurGrnItemDto;
    }>;
    /** Path part for operation `purGrnItemControllerRemove()` */
    static readonly PurGrnItemControllerRemovePath = "/amims/pur_grn_item/pur_grn_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purGrnItemControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    purGrnItemControllerRemove$Response(params: PurGrnItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurGrnItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purGrnItemControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purGrnItemControllerRemove(params: PurGrnItemControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurGrnItemDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurGrnItemService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurGrnItemService>;
}
