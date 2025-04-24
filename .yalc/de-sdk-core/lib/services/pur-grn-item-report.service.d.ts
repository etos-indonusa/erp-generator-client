import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurGrnItemReportDto } from '../models/amims-pur-grn-item-report-dto';
import { PurGrnItemReportControllerFindAll$Params } from '../fn/pur-grn-item-report/pur-grn-item-report-controller-find-all';
import { PurGrnItemReportControllerFindOne$Params } from '../fn/pur-grn-item-report/pur-grn-item-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PurGrnItemReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purGrnItemReportControllerFindAll()` */
    static readonly PurGrnItemReportControllerFindAllPath = "/amims/pur_grn_item/pur_grn_item_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purGrnItemReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purGrnItemReportControllerFindAll$Response(params: PurGrnItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurGrnItemReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purGrnItemReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purGrnItemReportControllerFindAll(params: PurGrnItemReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurGrnItemReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `purGrnItemReportControllerFindOne()` */
    static readonly PurGrnItemReportControllerFindOnePath = "/amims/pur_grn_item/pur_grn_item_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purGrnItemReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    purGrnItemReportControllerFindOne$Response(params: PurGrnItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurGrnItemReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purGrnItemReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purGrnItemReportControllerFindOne(params: PurGrnItemReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurGrnItemReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurGrnItemReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurGrnItemReportService>;
}
