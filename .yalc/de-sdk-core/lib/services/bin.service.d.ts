import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsBinDto } from '../models/amims-bin-dto';
import { BinControllerCreate$Params } from '../fn/bin/bin-controller-create';
import { BinControllerFindAll$Params } from '../fn/bin/bin-controller-find-all';
import { BinControllerFindOne$Params } from '../fn/bin/bin-controller-find-one';
import { BinControllerRemove$Params } from '../fn/bin/bin-controller-remove';
import { BinControllerUpdate$Params } from '../fn/bin/bin-controller-update';
import * as i0 from "@angular/core";
export declare class BinService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `binControllerFindAll()` */
    static readonly BinControllerFindAllPath = "/amims/bin/bin";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `binControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    binControllerFindAll$Response(params?: BinControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsBinDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `binControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    binControllerFindAll(params?: BinControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsBinDto>;
        'total'?: number;
    }>;
    /** Path part for operation `binControllerCreate()` */
    static readonly BinControllerCreatePath = "/amims/bin/bin";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `binControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    binControllerCreate$Response(params: BinControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsBinDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `binControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    binControllerCreate(params: BinControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsBinDto;
    }>;
    /** Path part for operation `binControllerFindOne()` */
    static readonly BinControllerFindOnePath = "/amims/bin/bin/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `binControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    binControllerFindOne$Response(params: BinControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsBinDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `binControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    binControllerFindOne(params: BinControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsBinDto;
    }>;
    /** Path part for operation `binControllerUpdate()` */
    static readonly BinControllerUpdatePath = "/amims/bin/bin/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `binControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    binControllerUpdate$Response(params: BinControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsBinDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `binControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    binControllerUpdate(params: BinControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsBinDto;
    }>;
    /** Path part for operation `binControllerRemove()` */
    static readonly BinControllerRemovePath = "/amims/bin/bin/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `binControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    binControllerRemove$Response(params: BinControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsBinDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `binControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    binControllerRemove(params: BinControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsBinDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BinService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BinService>;
}
