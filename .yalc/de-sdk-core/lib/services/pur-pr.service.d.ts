import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurPrDto } from '../models/amims-pur-pr-dto';
import { PurPrControllerCreate$Params } from '../fn/pur-pr/pur-pr-controller-create';
import { PurPrControllerFindAll$Params } from '../fn/pur-pr/pur-pr-controller-find-all';
import { PurPrControllerFindOne$Params } from '../fn/pur-pr/pur-pr-controller-find-one';
import { PurPrControllerRemove$Params } from '../fn/pur-pr/pur-pr-controller-remove';
import { PurPrControllerUpdate$Params } from '../fn/pur-pr/pur-pr-controller-update';
import * as i0 from "@angular/core";
export declare class PurPrService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purPrControllerFindAll()` */
    static readonly PurPrControllerFindAllPath = "/amims/pur_pr/pur_pr";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPrControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPrControllerFindAll$Response(params?: PurPrControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPrDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPrControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPrControllerFindAll(params?: PurPrControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPrDto>;
        'total'?: number;
    }>;
    /** Path part for operation `purPrControllerCreate()` */
    static readonly PurPrControllerCreatePath = "/amims/pur_pr/pur_pr";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPrControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPrControllerCreate$Response(params: PurPrControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPrControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPrControllerCreate(params: PurPrControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrDto;
    }>;
    /** Path part for operation `purPrControllerFindOne()` */
    static readonly PurPrControllerFindOnePath = "/amims/pur_pr/pur_pr/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPrControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPrControllerFindOne$Response(params: PurPrControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPrControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPrControllerFindOne(params: PurPrControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrDto;
    }>;
    /** Path part for operation `purPrControllerUpdate()` */
    static readonly PurPrControllerUpdatePath = "/amims/pur_pr/pur_pr/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPrControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPrControllerUpdate$Response(params: PurPrControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPrControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPrControllerUpdate(params: PurPrControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrDto;
    }>;
    /** Path part for operation `purPrControllerRemove()` */
    static readonly PurPrControllerRemovePath = "/amims/pur_pr/pur_pr/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPrControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPrControllerRemove$Response(params: PurPrControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPrControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPrControllerRemove(params: PurPrControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurPrService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurPrService>;
}
