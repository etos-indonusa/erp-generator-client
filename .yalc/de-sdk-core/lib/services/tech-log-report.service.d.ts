import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTechLogReportDto } from '../models/amims-tech-log-report-dto';
import { TechLogReportControllerFindAll$Params } from '../fn/tech-log-report/tech-log-report-controller-find-all';
import { TechLogReportControllerFindOne$Params } from '../fn/tech-log-report/tech-log-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class TechLogReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `techLogReportControllerFindAll()` */
    static readonly TechLogReportControllerFindAllPath = "/amims/tech_log/tech_log_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogReportControllerFindAll$Response(params: TechLogReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogReportControllerFindAll(params: TechLogReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `techLogReportControllerFindOne()` */
    static readonly TechLogReportControllerFindOnePath = "/amims/tech_log/tech_log_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogReportControllerFindOne$Response(params: TechLogReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogReportControllerFindOne(params: TechLogReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TechLogReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TechLogReportService>;
}
