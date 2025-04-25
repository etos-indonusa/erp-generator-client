import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { InvoiceControllerCreate$Params } from '../fn/invoice/invoice-controller-create';
import { InvoiceControllerFindAll$Params } from '../fn/invoice/invoice-controller-find-all';
import { InvoiceControllerFindOne$Params } from '../fn/invoice/invoice-controller-find-one';
import { InvoiceControllerRemove$Params } from '../fn/invoice/invoice-controller-remove';
import { InvoiceControllerUpdate$Params } from '../fn/invoice/invoice-controller-update';
import { PelangganInvoiceDto } from '../models/pelanggan-invoice-dto';
import * as i0 from "@angular/core";
export declare class InvoiceService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `invoiceControllerFindAll()` */
    static readonly InvoiceControllerFindAllPath = "/pelanggan/invoice/invoice";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `invoiceControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    invoiceControllerFindAll$Response(params?: InvoiceControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganInvoiceDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `invoiceControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    invoiceControllerFindAll(params?: InvoiceControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganInvoiceDto>;
        'total'?: number;
    }>;
    /** Path part for operation `invoiceControllerCreate()` */
    static readonly InvoiceControllerCreatePath = "/pelanggan/invoice/invoice";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `invoiceControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    invoiceControllerCreate$Response(params: InvoiceControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganInvoiceDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `invoiceControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    invoiceControllerCreate(params: InvoiceControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganInvoiceDto;
    }>;
    /** Path part for operation `invoiceControllerFindOne()` */
    static readonly InvoiceControllerFindOnePath = "/pelanggan/invoice/invoice/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `invoiceControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    invoiceControllerFindOne$Response(params: InvoiceControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganInvoiceDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `invoiceControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    invoiceControllerFindOne(params: InvoiceControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganInvoiceDto;
    }>;
    /** Path part for operation `invoiceControllerUpdate()` */
    static readonly InvoiceControllerUpdatePath = "/pelanggan/invoice/invoice/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `invoiceControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    invoiceControllerUpdate$Response(params: InvoiceControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganInvoiceDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `invoiceControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    invoiceControllerUpdate(params: InvoiceControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganInvoiceDto;
    }>;
    /** Path part for operation `invoiceControllerRemove()` */
    static readonly InvoiceControllerRemovePath = "/pelanggan/invoice/invoice/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `invoiceControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    invoiceControllerRemove$Response(params: InvoiceControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganInvoiceDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `invoiceControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    invoiceControllerRemove(params: InvoiceControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganInvoiceDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<InvoiceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InvoiceService>;
}
