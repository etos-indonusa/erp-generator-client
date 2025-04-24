import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTechDiscrepanciesReportDto } from '../models/amims-tech-discrepancies-report-dto';
import { TechDiscrepanciesReportControllerFindAll$Params } from '../fn/tech-discrepancies-report/tech-discrepancies-report-controller-find-all';
import { TechDiscrepanciesReportControllerFindOne$Params } from '../fn/tech-discrepancies-report/tech-discrepancies-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class TechDiscrepanciesReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `techDiscrepanciesReportControllerFindAll()` */
    static readonly TechDiscrepanciesReportControllerFindAllPath = "/amims/tech_discrepancies/tech_discrepancies_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techDiscrepanciesReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techDiscrepanciesReportControllerFindAll$Response(params: TechDiscrepanciesReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechDiscrepanciesReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techDiscrepanciesReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techDiscrepanciesReportControllerFindAll(params: TechDiscrepanciesReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechDiscrepanciesReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `techDiscrepanciesReportControllerFindOne()` */
    static readonly TechDiscrepanciesReportControllerFindOnePath = "/amims/tech_discrepancies/tech_discrepancies_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techDiscrepanciesReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    techDiscrepanciesReportControllerFindOne$Response(params: TechDiscrepanciesReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechDiscrepanciesReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techDiscrepanciesReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techDiscrepanciesReportControllerFindOne(params: TechDiscrepanciesReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechDiscrepanciesReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TechDiscrepanciesReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TechDiscrepanciesReportService>;
}
