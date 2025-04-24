import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { InvoiceReportControllerFindAll$Params } from '../fn/invoice-report/invoice-report-controller-find-all';
import { InvoiceReportControllerFindOne$Params } from '../fn/invoice-report/invoice-report-controller-find-one';
import { PelangganInvoiceReportDto } from '../models/pelanggan-invoice-report-dto';
import * as i0 from "@angular/core";
export declare class InvoiceReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `invoiceReportControllerFindAll()` */
    static readonly InvoiceReportControllerFindAllPath = "/auth/invoice/invoice_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `invoiceReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    invoiceReportControllerFindAll$Response(params: InvoiceReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganInvoiceReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `invoiceReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    invoiceReportControllerFindAll(params: InvoiceReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganInvoiceReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `invoiceReportControllerFindOne()` */
    static readonly InvoiceReportControllerFindOnePath = "/auth/invoice/invoice_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `invoiceReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    invoiceReportControllerFindOne$Response(params: InvoiceReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganInvoiceReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `invoiceReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    invoiceReportControllerFindOne(params: InvoiceReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganInvoiceReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<InvoiceReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InvoiceReportService>;
}
