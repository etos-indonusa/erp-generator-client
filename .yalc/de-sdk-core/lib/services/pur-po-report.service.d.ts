import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurPoReportDto } from '../models/amims-pur-po-report-dto';
import { PurPoReportControllerFindAll$Params } from '../fn/pur-po-report/pur-po-report-controller-find-all';
import { PurPoReportControllerFindOne$Params } from '../fn/pur-po-report/pur-po-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PurPoReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purPoReportControllerFindAll()` */
    static readonly PurPoReportControllerFindAllPath = "/amims/pur_po/pur_po_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPoReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPoReportControllerFindAll$Response(params: PurPoReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPoReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPoReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPoReportControllerFindAll(params: PurPoReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPoReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `purPoReportControllerFindOne()` */
    static readonly PurPoReportControllerFindOnePath = "/amims/pur_po/pur_po_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPoReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPoReportControllerFindOne$Response(params: PurPoReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPoReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPoReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPoReportControllerFindOne(params: PurPoReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPoReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurPoReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurPoReportService>;
}
