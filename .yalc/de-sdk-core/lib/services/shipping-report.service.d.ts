import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsShippingReportDto } from '../models/amims-shipping-report-dto';
import { ShippingReportControllerFindAll$Params } from '../fn/shipping-report/shipping-report-controller-find-all';
import { ShippingReportControllerFindOne$Params } from '../fn/shipping-report/shipping-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class ShippingReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `shippingReportControllerFindAll()` */
    static readonly ShippingReportControllerFindAllPath = "/amims/shipping/shipping_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `shippingReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    shippingReportControllerFindAll$Response(params: ShippingReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsShippingReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `shippingReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    shippingReportControllerFindAll(params: ShippingReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsShippingReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `shippingReportControllerFindOne()` */
    static readonly ShippingReportControllerFindOnePath = "/amims/shipping/shipping_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `shippingReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    shippingReportControllerFindOne$Response(params: ShippingReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsShippingReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `shippingReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    shippingReportControllerFindOne(params: ShippingReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsShippingReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShippingReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ShippingReportService>;
}
