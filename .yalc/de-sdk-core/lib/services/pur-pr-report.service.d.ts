import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurPrReportDto } from '../models/amims-pur-pr-report-dto';
import { PurPrReportControllerFindAll$Params } from '../fn/pur-pr-report/pur-pr-report-controller-find-all';
import { PurPrReportControllerFindOne$Params } from '../fn/pur-pr-report/pur-pr-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PurPrReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purPrReportControllerFindAll()` */
    static readonly PurPrReportControllerFindAllPath = "/amims/pur_pr/pur_pr_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPrReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPrReportControllerFindAll$Response(params: PurPrReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPrReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPrReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPrReportControllerFindAll(params: PurPrReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPrReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `purPrReportControllerFindOne()` */
    static readonly PurPrReportControllerFindOnePath = "/amims/pur_pr/pur_pr_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPrReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPrReportControllerFindOne$Response(params: PurPrReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPrReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPrReportControllerFindOne(params: PurPrReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurPrReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurPrReportService>;
}
