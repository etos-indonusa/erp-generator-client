import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurPrItemDto } from '../models/amims-pur-pr-item-dto';
import { PurPrItemControllerCreate$Params } from '../fn/pur-pr-item/pur-pr-item-controller-create';
import { PurPrItemControllerFindAll$Params } from '../fn/pur-pr-item/pur-pr-item-controller-find-all';
import { PurPrItemControllerFindOne$Params } from '../fn/pur-pr-item/pur-pr-item-controller-find-one';
import { PurPrItemControllerRemove$Params } from '../fn/pur-pr-item/pur-pr-item-controller-remove';
import { PurPrItemControllerUpdate$Params } from '../fn/pur-pr-item/pur-pr-item-controller-update';
import * as i0 from "@angular/core";
export declare class PurPrItemService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purPrItemControllerFindAll()` */
    static readonly PurPrItemControllerFindAllPath = "/amims/pur_pr_item/pur_pr_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPrItemControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPrItemControllerFindAll$Response(params?: PurPrItemControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPrItemDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPrItemControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPrItemControllerFindAll(params?: PurPrItemControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPrItemDto>;
        'total'?: number;
    }>;
    /** Path part for operation `purPrItemControllerCreate()` */
    static readonly PurPrItemControllerCreatePath = "/amims/pur_pr_item/pur_pr_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPrItemControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPrItemControllerCreate$Response(params: PurPrItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPrItemControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPrItemControllerCreate(params: PurPrItemControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrItemDto;
    }>;
    /** Path part for operation `purPrItemControllerFindOne()` */
    static readonly PurPrItemControllerFindOnePath = "/amims/pur_pr_item/pur_pr_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPrItemControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPrItemControllerFindOne$Response(params: PurPrItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPrItemControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPrItemControllerFindOne(params: PurPrItemControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrItemDto;
    }>;
    /** Path part for operation `purPrItemControllerUpdate()` */
    static readonly PurPrItemControllerUpdatePath = "/amims/pur_pr_item/pur_pr_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPrItemControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPrItemControllerUpdate$Response(params: PurPrItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPrItemControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPrItemControllerUpdate(params: PurPrItemControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrItemDto;
    }>;
    /** Path part for operation `purPrItemControllerRemove()` */
    static readonly PurPrItemControllerRemovePath = "/amims/pur_pr_item/pur_pr_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPrItemControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPrItemControllerRemove$Response(params: PurPrItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPrItemControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPrItemControllerRemove(params: PurPrItemControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrItemDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurPrItemService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurPrItemService>;
}
