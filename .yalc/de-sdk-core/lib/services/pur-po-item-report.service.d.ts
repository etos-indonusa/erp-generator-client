import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurPoItemReportDto } from '../models/amims-pur-po-item-report-dto';
import { PurPoItemReportControllerFindAll$Params } from '../fn/pur-po-item-report/pur-po-item-report-controller-find-all';
import { PurPoItemReportControllerFindOne$Params } from '../fn/pur-po-item-report/pur-po-item-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PurPoItemReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purPoItemReportControllerFindAll()` */
    static readonly PurPoItemReportControllerFindAllPath = "/amims/pur_po_item/pur_po_item_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPoItemReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPoItemReportControllerFindAll$Response(params: PurPoItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPoItemReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPoItemReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPoItemReportControllerFindAll(params: PurPoItemReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPoItemReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `purPoItemReportControllerFindOne()` */
    static readonly PurPoItemReportControllerFindOnePath = "/amims/pur_po_item/pur_po_item_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPoItemReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPoItemReportControllerFindOne$Response(params: PurPoItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPoItemReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPoItemReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPoItemReportControllerFindOne(params: PurPoItemReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPoItemReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurPoItemReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurPoItemReportService>;
}
