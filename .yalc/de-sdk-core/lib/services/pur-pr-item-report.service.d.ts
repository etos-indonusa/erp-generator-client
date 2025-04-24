import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurPrItemReportDto } from '../models/amims-pur-pr-item-report-dto';
import { PurPrItemReportControllerFindAll$Params } from '../fn/pur-pr-item-report/pur-pr-item-report-controller-find-all';
import { PurPrItemReportControllerFindOne$Params } from '../fn/pur-pr-item-report/pur-pr-item-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PurPrItemReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purPrItemReportControllerFindAll()` */
    static readonly PurPrItemReportControllerFindAllPath = "/amims/pur_pr_item/pur_pr_item_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPrItemReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPrItemReportControllerFindAll$Response(params: PurPrItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPrItemReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPrItemReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPrItemReportControllerFindAll(params: PurPrItemReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPrItemReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `purPrItemReportControllerFindOne()` */
    static readonly PurPrItemReportControllerFindOnePath = "/amims/pur_pr_item/pur_pr_item_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPrItemReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPrItemReportControllerFindOne$Response(params: PurPrItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrItemReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPrItemReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPrItemReportControllerFindOne(params: PurPrItemReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrItemReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurPrItemReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurPrItemReportService>;
}
