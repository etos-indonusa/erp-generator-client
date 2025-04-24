import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMcurrencyDto } from '../models/amims-mcurrency-dto';
import { McurrencyControllerCreate$Params } from '../fn/mcurrency/mcurrency-controller-create';
import { McurrencyControllerFindAll$Params } from '../fn/mcurrency/mcurrency-controller-find-all';
import { McurrencyControllerFindOne$Params } from '../fn/mcurrency/mcurrency-controller-find-one';
import { McurrencyControllerRemove$Params } from '../fn/mcurrency/mcurrency-controller-remove';
import { McurrencyControllerUpdate$Params } from '../fn/mcurrency/mcurrency-controller-update';
import * as i0 from "@angular/core";
export declare class McurrencyService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `mcurrencyControllerFindAll()` */
    static readonly McurrencyControllerFindAllPath = "/amims/mcurrency/mcurrency";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mcurrencyControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    mcurrencyControllerFindAll$Response(params?: McurrencyControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMcurrencyDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mcurrencyControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mcurrencyControllerFindAll(params?: McurrencyControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMcurrencyDto>;
        'total'?: number;
    }>;
    /** Path part for operation `mcurrencyControllerCreate()` */
    static readonly McurrencyControllerCreatePath = "/amims/mcurrency/mcurrency";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mcurrencyControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mcurrencyControllerCreate$Response(params: McurrencyControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMcurrencyDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mcurrencyControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mcurrencyControllerCreate(params: McurrencyControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMcurrencyDto;
    }>;
    /** Path part for operation `mcurrencyControllerFindOne()` */
    static readonly McurrencyControllerFindOnePath = "/amims/mcurrency/mcurrency/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mcurrencyControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    mcurrencyControllerFindOne$Response(params: McurrencyControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMcurrencyDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mcurrencyControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mcurrencyControllerFindOne(params: McurrencyControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMcurrencyDto;
    }>;
    /** Path part for operation `mcurrencyControllerUpdate()` */
    static readonly McurrencyControllerUpdatePath = "/amims/mcurrency/mcurrency/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mcurrencyControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mcurrencyControllerUpdate$Response(params: McurrencyControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMcurrencyDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mcurrencyControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mcurrencyControllerUpdate(params: McurrencyControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMcurrencyDto;
    }>;
    /** Path part for operation `mcurrencyControllerRemove()` */
    static readonly McurrencyControllerRemovePath = "/amims/mcurrency/mcurrency/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mcurrencyControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    mcurrencyControllerRemove$Response(params: McurrencyControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMcurrencyDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mcurrencyControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mcurrencyControllerRemove(params: McurrencyControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMcurrencyDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<McurrencyService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<McurrencyService>;
}
