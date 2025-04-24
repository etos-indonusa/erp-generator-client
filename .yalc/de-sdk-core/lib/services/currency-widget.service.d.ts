import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsCurrencyWidgetDto } from '../models/amims-currency-widget-dto';
import { CurrencyWidgetControllerFindAll$Params } from '../fn/currency-widget/currency-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class CurrencyWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `currencyWidgetControllerFindAll()` */
    static readonly CurrencyWidgetControllerFindAllPath = "/amims/currency/currency_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `currencyWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    currencyWidgetControllerFindAll$Response(params: CurrencyWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsCurrencyWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `currencyWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    currencyWidgetControllerFindAll(params: CurrencyWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsCurrencyWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CurrencyWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CurrencyWidgetService>;
}
