import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurVendorItemReportDto } from '../models/amims-pur-vendor-item-report-dto';
import { PurVendorItemReportControllerFindAll$Params } from '../fn/pur-vendor-item-report/pur-vendor-item-report-controller-find-all';
import { PurVendorItemReportControllerFindOne$Params } from '../fn/pur-vendor-item-report/pur-vendor-item-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PurVendorItemReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purVendorItemReportControllerFindAll()` */
    static readonly PurVendorItemReportControllerFindAllPath = "/amims/pur_vendor_item/pur_vendor_item_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purVendorItemReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purVendorItemReportControllerFindAll$Response(params: PurVendorItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurVendorItemReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purVendorItemReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purVendorItemReportControllerFindAll(params: PurVendorItemReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurVendorItemReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `purVendorItemReportControllerFindOne()` */
    static readonly PurVendorItemReportControllerFindOnePath = "/amims/pur_vendor_item/pur_vendor_item_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purVendorItemReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    purVendorItemReportControllerFindOne$Response(params: PurVendorItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorItemReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purVendorItemReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purVendorItemReportControllerFindOne(params: PurVendorItemReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorItemReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurVendorItemReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurVendorItemReportService>;
}
