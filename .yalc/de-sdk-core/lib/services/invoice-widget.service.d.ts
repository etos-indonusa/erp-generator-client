import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { InvoiceWidgetControllerFindAll$Params } from '../fn/invoice-widget/invoice-widget-controller-find-all';
import { PelangganInvoiceWidgetDto } from '../models/pelanggan-invoice-widget-dto';
import * as i0 from "@angular/core";
export declare class InvoiceWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `invoiceWidgetControllerFindAll()` */
    static readonly InvoiceWidgetControllerFindAllPath = "/pelanggan/invoice/invoice_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `invoiceWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    invoiceWidgetControllerFindAll$Response(params: InvoiceWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganInvoiceWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `invoiceWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    invoiceWidgetControllerFindAll(params: InvoiceWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganInvoiceWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<InvoiceWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InvoiceWidgetService>;
}
