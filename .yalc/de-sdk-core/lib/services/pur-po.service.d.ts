import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurPoDto } from '../models/amims-pur-po-dto';
import { PurPoControllerCreate$Params } from '../fn/pur-po/pur-po-controller-create';
import { PurPoControllerFindAll$Params } from '../fn/pur-po/pur-po-controller-find-all';
import { PurPoControllerFindOne$Params } from '../fn/pur-po/pur-po-controller-find-one';
import { PurPoControllerRemove$Params } from '../fn/pur-po/pur-po-controller-remove';
import { PurPoControllerUpdate$Params } from '../fn/pur-po/pur-po-controller-update';
import * as i0 from "@angular/core";
export declare class PurPoService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purPoControllerFindAll()` */
    static readonly PurPoControllerFindAllPath = "/amims/pur_po/pur_po";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPoControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPoControllerFindAll$Response(params?: PurPoControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPoDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPoControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPoControllerFindAll(params?: PurPoControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPoDto>;
        'total'?: number;
    }>;
    /** Path part for operation `purPoControllerCreate()` */
    static readonly PurPoControllerCreatePath = "/amims/pur_po/pur_po";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPoControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPoControllerCreate$Response(params: PurPoControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPoDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPoControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPoControllerCreate(params: PurPoControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPoDto;
    }>;
    /** Path part for operation `purPoControllerFindOne()` */
    static readonly PurPoControllerFindOnePath = "/amims/pur_po/pur_po/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPoControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPoControllerFindOne$Response(params: PurPoControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPoDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPoControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPoControllerFindOne(params: PurPoControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPoDto;
    }>;
    /** Path part for operation `purPoControllerUpdate()` */
    static readonly PurPoControllerUpdatePath = "/amims/pur_po/pur_po/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPoControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPoControllerUpdate$Response(params: PurPoControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPoDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPoControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPoControllerUpdate(params: PurPoControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPoDto;
    }>;
    /** Path part for operation `purPoControllerRemove()` */
    static readonly PurPoControllerRemovePath = "/amims/pur_po/pur_po/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPoControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPoControllerRemove$Response(params: PurPoControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPoDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPoControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPoControllerRemove(params: PurPoControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPoDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurPoService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurPoService>;
}
