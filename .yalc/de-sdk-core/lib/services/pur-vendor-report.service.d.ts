import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurVendorReportDto } from '../models/amims-pur-vendor-report-dto';
import { PurVendorReportControllerFindAll$Params } from '../fn/pur-vendor-report/pur-vendor-report-controller-find-all';
import { PurVendorReportControllerFindOne$Params } from '../fn/pur-vendor-report/pur-vendor-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PurVendorReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purVendorReportControllerFindAll()` */
    static readonly PurVendorReportControllerFindAllPath = "/amims/pur_vendor/pur_vendor_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purVendorReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purVendorReportControllerFindAll$Response(params: PurVendorReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurVendorReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purVendorReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purVendorReportControllerFindAll(params: PurVendorReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurVendorReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `purVendorReportControllerFindOne()` */
    static readonly PurVendorReportControllerFindOnePath = "/amims/pur_vendor/pur_vendor_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purVendorReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    purVendorReportControllerFindOne$Response(params: PurVendorReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purVendorReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purVendorReportControllerFindOne(params: PurVendorReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurVendorReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurVendorReportService>;
}
