import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTechLogJoReportDto } from '../models/amims-tech-log-jo-report-dto';
import { TechLogJoReportControllerFindAll$Params } from '../fn/tech-log-jo-report/tech-log-jo-report-controller-find-all';
import { TechLogJoReportControllerFindOne$Params } from '../fn/tech-log-jo-report/tech-log-jo-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class TechLogJoReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `techLogJoReportControllerFindAll()` */
    static readonly TechLogJoReportControllerFindAllPath = "/amims/tech_log_jo/tech_log_jo_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogJoReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogJoReportControllerFindAll$Response(params: TechLogJoReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogJoReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogJoReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogJoReportControllerFindAll(params: TechLogJoReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogJoReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `techLogJoReportControllerFindOne()` */
    static readonly TechLogJoReportControllerFindOnePath = "/amims/tech_log_jo/tech_log_jo_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogJoReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogJoReportControllerFindOne$Response(params: TechLogJoReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogJoReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogJoReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogJoReportControllerFindOne(params: TechLogJoReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogJoReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TechLogJoReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TechLogJoReportService>;
}
