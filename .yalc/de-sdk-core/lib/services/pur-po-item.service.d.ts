import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurPoItemDto } from '../models/amims-pur-po-item-dto';
import { PurPoItemControllerCreate$Params } from '../fn/pur-po-item/pur-po-item-controller-create';
import { PurPoItemControllerFindAll$Params } from '../fn/pur-po-item/pur-po-item-controller-find-all';
import { PurPoItemControllerFindOne$Params } from '../fn/pur-po-item/pur-po-item-controller-find-one';
import { PurPoItemControllerRemove$Params } from '../fn/pur-po-item/pur-po-item-controller-remove';
import { PurPoItemControllerUpdate$Params } from '../fn/pur-po-item/pur-po-item-controller-update';
import * as i0 from "@angular/core";
export declare class PurPoItemService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purPoItemControllerFindAll()` */
    static readonly PurPoItemControllerFindAllPath = "/amims/pur_po_item/pur_po_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPoItemControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPoItemControllerFindAll$Response(params?: PurPoItemControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPoItemDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPoItemControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPoItemControllerFindAll(params?: PurPoItemControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPoItemDto>;
        'total'?: number;
    }>;
    /** Path part for operation `purPoItemControllerCreate()` */
    static readonly PurPoItemControllerCreatePath = "/amims/pur_po_item/pur_po_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPoItemControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPoItemControllerCreate$Response(params: PurPoItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPoItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPoItemControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPoItemControllerCreate(params: PurPoItemControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPoItemDto;
    }>;
    /** Path part for operation `purPoItemControllerFindOne()` */
    static readonly PurPoItemControllerFindOnePath = "/amims/pur_po_item/pur_po_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPoItemControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPoItemControllerFindOne$Response(params: PurPoItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPoItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPoItemControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPoItemControllerFindOne(params: PurPoItemControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPoItemDto;
    }>;
    /** Path part for operation `purPoItemControllerUpdate()` */
    static readonly PurPoItemControllerUpdatePath = "/amims/pur_po_item/pur_po_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPoItemControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPoItemControllerUpdate$Response(params: PurPoItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPoItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPoItemControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPoItemControllerUpdate(params: PurPoItemControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPoItemDto;
    }>;
    /** Path part for operation `purPoItemControllerRemove()` */
    static readonly PurPoItemControllerRemovePath = "/amims/pur_po_item/pur_po_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPoItemControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPoItemControllerRemove$Response(params: PurPoItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPoItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPoItemControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPoItemControllerRemove(params: PurPoItemControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPoItemDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurPoItemService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurPoItemService>;
}
