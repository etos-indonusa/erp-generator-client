import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurPrclReportDto } from '../models/amims-pur-prcl-report-dto';
import { PurPrclReportControllerFindAll$Params } from '../fn/pur-prcl-report/pur-prcl-report-controller-find-all';
import { PurPrclReportControllerFindOne$Params } from '../fn/pur-prcl-report/pur-prcl-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PurPrclReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purPrclReportControllerFindAll()` */
    static readonly PurPrclReportControllerFindAllPath = "/amims/pur_prcl/pur_prcl_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPrclReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPrclReportControllerFindAll$Response(params: PurPrclReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPrclReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPrclReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPrclReportControllerFindAll(params: PurPrclReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPrclReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `purPrclReportControllerFindOne()` */
    static readonly PurPrclReportControllerFindOnePath = "/amims/pur_prcl/pur_prcl_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPrclReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPrclReportControllerFindOne$Response(params: PurPrclReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrclReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPrclReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purPrclReportControllerFindOne(params: PurPrclReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurPrclReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurPrclReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurPrclReportService>;
}
