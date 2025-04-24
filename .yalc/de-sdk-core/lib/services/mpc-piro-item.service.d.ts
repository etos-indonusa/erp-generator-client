import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMpcPiroItemDto } from '../models/amims-mpc-piro-item-dto';
import { MpcPiroItemControllerCreate$Params } from '../fn/mpc-piro-item/mpc-piro-item-controller-create';
import { MpcPiroItemControllerFindAll$Params } from '../fn/mpc-piro-item/mpc-piro-item-controller-find-all';
import { MpcPiroItemControllerFindOne$Params } from '../fn/mpc-piro-item/mpc-piro-item-controller-find-one';
import { MpcPiroItemControllerRemove$Params } from '../fn/mpc-piro-item/mpc-piro-item-controller-remove';
import { MpcPiroItemControllerUpdate$Params } from '../fn/mpc-piro-item/mpc-piro-item-controller-update';
import * as i0 from "@angular/core";
export declare class MpcPiroItemService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `mpcPiroItemControllerFindAll()` */
    static readonly MpcPiroItemControllerFindAllPath = "/amims/mpc_piro_item/mpc_piro_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcPiroItemControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcPiroItemControllerFindAll$Response(params?: MpcPiroItemControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcPiroItemDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcPiroItemControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcPiroItemControllerFindAll(params?: MpcPiroItemControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcPiroItemDto>;
        'total'?: number;
    }>;
    /** Path part for operation `mpcPiroItemControllerCreate()` */
    static readonly MpcPiroItemControllerCreatePath = "/amims/mpc_piro_item/mpc_piro_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcPiroItemControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcPiroItemControllerCreate$Response(params: MpcPiroItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcPiroItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcPiroItemControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcPiroItemControllerCreate(params: MpcPiroItemControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcPiroItemDto;
    }>;
    /** Path part for operation `mpcPiroItemControllerFindOne()` */
    static readonly MpcPiroItemControllerFindOnePath = "/amims/mpc_piro_item/mpc_piro_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcPiroItemControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcPiroItemControllerFindOne$Response(params: MpcPiroItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcPiroItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcPiroItemControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcPiroItemControllerFindOne(params: MpcPiroItemControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcPiroItemDto;
    }>;
    /** Path part for operation `mpcPiroItemControllerUpdate()` */
    static readonly MpcPiroItemControllerUpdatePath = "/amims/mpc_piro_item/mpc_piro_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcPiroItemControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcPiroItemControllerUpdate$Response(params: MpcPiroItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcPiroItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcPiroItemControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcPiroItemControllerUpdate(params: MpcPiroItemControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcPiroItemDto;
    }>;
    /** Path part for operation `mpcPiroItemControllerRemove()` */
    static readonly MpcPiroItemControllerRemovePath = "/amims/mpc_piro_item/mpc_piro_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcPiroItemControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcPiroItemControllerRemove$Response(params: MpcPiroItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcPiroItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcPiroItemControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcPiroItemControllerRemove(params: MpcPiroItemControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcPiroItemDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MpcPiroItemService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MpcPiroItemService>;
}
