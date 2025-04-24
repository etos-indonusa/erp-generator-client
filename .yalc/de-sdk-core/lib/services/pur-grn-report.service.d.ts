import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurGrnReportDto } from '../models/amims-pur-grn-report-dto';
import { PurGrnReportControllerFindAll$Params } from '../fn/pur-grn-report/pur-grn-report-controller-find-all';
import { PurGrnReportControllerFindOne$Params } from '../fn/pur-grn-report/pur-grn-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PurGrnReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purGrnReportControllerFindAll()` */
    static readonly PurGrnReportControllerFindAllPath = "/amims/pur_grn/pur_grn_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purGrnReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purGrnReportControllerFindAll$Response(params: PurGrnReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurGrnReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purGrnReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purGrnReportControllerFindAll(params: PurGrnReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurGrnReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `purGrnReportControllerFindOne()` */
    static readonly PurGrnReportControllerFindOnePath = "/amims/pur_grn/pur_grn_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purGrnReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    purGrnReportControllerFindOne$Response(params: PurGrnReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurGrnReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purGrnReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purGrnReportControllerFindOne(params: PurGrnReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurGrnReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurGrnReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurGrnReportService>;
}
