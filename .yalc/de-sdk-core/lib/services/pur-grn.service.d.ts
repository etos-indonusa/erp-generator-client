import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurGrnDto } from '../models/amims-pur-grn-dto';
import { PurGrnControllerCreate$Params } from '../fn/pur-grn/pur-grn-controller-create';
import { PurGrnControllerFindAll$Params } from '../fn/pur-grn/pur-grn-controller-find-all';
import { PurGrnControllerFindOne$Params } from '../fn/pur-grn/pur-grn-controller-find-one';
import { PurGrnControllerRemove$Params } from '../fn/pur-grn/pur-grn-controller-remove';
import { PurGrnControllerUpdate$Params } from '../fn/pur-grn/pur-grn-controller-update';
import * as i0 from "@angular/core";
export declare class PurGrnService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purGrnControllerFindAll()` */
    static readonly PurGrnControllerFindAllPath = "/amims/pur_grn/pur_grn";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purGrnControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    purGrnControllerFindAll$Response(params?: PurGrnControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurGrnDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purGrnControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purGrnControllerFindAll(params?: PurGrnControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurGrnDto>;
        'total'?: number;
    }>;
    /** Path part for operation `purGrnControllerCreate()` */
    static readonly PurGrnControllerCreatePath = "/amims/pur_grn/pur_grn";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purGrnControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purGrnControllerCreate$Response(params: PurGrnControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurGrnDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purGrnControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purGrnControllerCreate(params: PurGrnControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurGrnDto;
    }>;
    /** Path part for operation `purGrnControllerFindOne()` */
    static readonly PurGrnControllerFindOnePath = "/amims/pur_grn/pur_grn/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purGrnControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    purGrnControllerFindOne$Response(params: PurGrnControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurGrnDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purGrnControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purGrnControllerFindOne(params: PurGrnControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurGrnDto;
    }>;
    /** Path part for operation `purGrnControllerUpdate()` */
    static readonly PurGrnControllerUpdatePath = "/amims/pur_grn/pur_grn/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purGrnControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purGrnControllerUpdate$Response(params: PurGrnControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurGrnDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purGrnControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purGrnControllerUpdate(params: PurGrnControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurGrnDto;
    }>;
    /** Path part for operation `purGrnControllerRemove()` */
    static readonly PurGrnControllerRemovePath = "/amims/pur_grn/pur_grn/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purGrnControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    purGrnControllerRemove$Response(params: PurGrnControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurGrnDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purGrnControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purGrnControllerRemove(params: PurGrnControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurGrnDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurGrnService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurGrnService>;
}
