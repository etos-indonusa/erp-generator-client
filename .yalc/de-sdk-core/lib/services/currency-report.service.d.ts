import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsCurrencyReportDto } from '../models/amims-currency-report-dto';
import { CurrencyReportControllerFindAll$Params } from '../fn/currency-report/currency-report-controller-find-all';
import { CurrencyReportControllerFindOne$Params } from '../fn/currency-report/currency-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class CurrencyReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `currencyReportControllerFindAll()` */
    static readonly CurrencyReportControllerFindAllPath = "/amims/currency/currency_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `currencyReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    currencyReportControllerFindAll$Response(params: CurrencyReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsCurrencyReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `currencyReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    currencyReportControllerFindAll(params: CurrencyReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsCurrencyReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `currencyReportControllerFindOne()` */
    static readonly CurrencyReportControllerFindOnePath = "/amims/currency/currency_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `currencyReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    currencyReportControllerFindOne$Response(params: CurrencyReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsCurrencyReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `currencyReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    currencyReportControllerFindOne(params: CurrencyReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsCurrencyReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CurrencyReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CurrencyReportService>;
}
