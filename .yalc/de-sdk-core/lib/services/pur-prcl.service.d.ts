import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurPrclDto } from '../models/amims-pur-prcl-dto';
import { PurPrclControllerCreate$Params } from '../fn/pur-prcl/pur-prcl-controller-create';
import { PurPrclControllerFindAll$Params } from '../fn/pur-prcl/pur-prcl-controller-find-all';
import { PurPrclControllerFindOne$Params } from '../fn/pur-prcl/pur-prcl-controller-find-one';
import { PurPrclControllerRemove$Params } from '../fn/pur-prcl/pur-prcl-controller-remove';
import { PurPrclControllerUpdate$Params } from '../fn/pur-prcl/pur-prcl-controller-update';
import * as i0 from "@angular/core";
export declare class PurPrclService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purPrclControllerFindAll()` */
    static readonly PurPrclControllerFindAllPath = "/amims/pur_prcl/pur_prcl";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPrclControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPrclControllerFindAll$Response(params?: PurPrclControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPrclDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPrclControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPrclControllerFindAll(params?: PurPrclControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPrclDto>;
        'total'?: number;
    }>;
    /** Path part for operation `purPrclControllerCreate()` */
    static readonly PurPrclControllerCreatePath = "/amims/pur_prcl/pur_prcl";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPrclControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPrclControllerCreate$Response(params: PurPrclControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrclDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPrclControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPrclControllerCreate(params: PurPrclControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrclDto;
    }>;
    /** Path part for operation `purPrclControllerFindOne()` */
    static readonly PurPrclControllerFindOnePath = "/amims/pur_prcl/pur_prcl/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPrclControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPrclControllerFindOne$Response(params: PurPrclControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrclDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPrclControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPrclControllerFindOne(params: PurPrclControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrclDto;
    }>;
    /** Path part for operation `purPrclControllerUpdate()` */
    static readonly PurPrclControllerUpdatePath = "/amims/pur_prcl/pur_prcl/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPrclControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPrclControllerUpdate$Response(params: PurPrclControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrclDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPrclControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPrclControllerUpdate(params: PurPrclControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrclDto;
    }>;
    /** Path part for operation `purPrclControllerRemove()` */
    static readonly PurPrclControllerRemovePath = "/amims/pur_prcl/pur_prcl/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPrclControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPrclControllerRemove$Response(params: PurPrclControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrclDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPrclControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPrclControllerRemove(params: PurPrclControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrclDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurPrclService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurPrclService>;
}
