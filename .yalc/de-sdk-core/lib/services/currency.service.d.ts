import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsCurrencyDto } from '../models/amims-currency-dto';
import { CurrencyControllerCreate$Params } from '../fn/currency/currency-controller-create';
import { CurrencyControllerFindAll$Params } from '../fn/currency/currency-controller-find-all';
import { CurrencyControllerFindOne$Params } from '../fn/currency/currency-controller-find-one';
import { CurrencyControllerRemove$Params } from '../fn/currency/currency-controller-remove';
import { CurrencyControllerUpdate$Params } from '../fn/currency/currency-controller-update';
import * as i0 from "@angular/core";
export declare class CurrencyService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `currencyControllerFindAll()` */
    static readonly CurrencyControllerFindAllPath = "/amims/currency/currency";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `currencyControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    currencyControllerFindAll$Response(params?: CurrencyControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsCurrencyDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `currencyControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    currencyControllerFindAll(params?: CurrencyControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsCurrencyDto>;
        'total'?: number;
    }>;
    /** Path part for operation `currencyControllerCreate()` */
    static readonly CurrencyControllerCreatePath = "/amims/currency/currency";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `currencyControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    currencyControllerCreate$Response(params: CurrencyControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsCurrencyDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `currencyControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    currencyControllerCreate(params: CurrencyControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsCurrencyDto;
    }>;
    /** Path part for operation `currencyControllerFindOne()` */
    static readonly CurrencyControllerFindOnePath = "/amims/currency/currency/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `currencyControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    currencyControllerFindOne$Response(params: CurrencyControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsCurrencyDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `currencyControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    currencyControllerFindOne(params: CurrencyControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsCurrencyDto;
    }>;
    /** Path part for operation `currencyControllerUpdate()` */
    static readonly CurrencyControllerUpdatePath = "/amims/currency/currency/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `currencyControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    currencyControllerUpdate$Response(params: CurrencyControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsCurrencyDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `currencyControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    currencyControllerUpdate(params: CurrencyControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsCurrencyDto;
    }>;
    /** Path part for operation `currencyControllerRemove()` */
    static readonly CurrencyControllerRemovePath = "/amims/currency/currency/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `currencyControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    currencyControllerRemove$Response(params: CurrencyControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsCurrencyDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `currencyControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    currencyControllerRemove(params: CurrencyControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsCurrencyDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CurrencyService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CurrencyService>;
}
