import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurVendorContactReportDto } from '../models/amims-pur-vendor-contact-report-dto';
import { PurVendorContactReportControllerFindAll$Params } from '../fn/pur-vendor-contact-report/pur-vendor-contact-report-controller-find-all';
import { PurVendorContactReportControllerFindOne$Params } from '../fn/pur-vendor-contact-report/pur-vendor-contact-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PurVendorContactReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purVendorContactReportControllerFindAll()` */
    static readonly PurVendorContactReportControllerFindAllPath = "/amims/pur_vendor_contact/pur_vendor_contact_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purVendorContactReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purVendorContactReportControllerFindAll$Response(params: PurVendorContactReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurVendorContactReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purVendorContactReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purVendorContactReportControllerFindAll(params: PurVendorContactReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurVendorContactReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `purVendorContactReportControllerFindOne()` */
    static readonly PurVendorContactReportControllerFindOnePath = "/amims/pur_vendor_contact/pur_vendor_contact_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purVendorContactReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    purVendorContactReportControllerFindOne$Response(params: PurVendorContactReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorContactReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purVendorContactReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purVendorContactReportControllerFindOne(params: PurVendorContactReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorContactReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurVendorContactReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurVendorContactReportService>;
}
