import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTechLogEngineCheckReportDto } from '../models/amims-tech-log-engine-check-report-dto';
import { TechLogEngineCheckReportControllerFindAll$Params } from '../fn/tech-log-engine-check-report/tech-log-engine-check-report-controller-find-all';
import { TechLogEngineCheckReportControllerFindOne$Params } from '../fn/tech-log-engine-check-report/tech-log-engine-check-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class TechLogEngineCheckReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `techLogEngineCheckReportControllerFindAll()` */
    static readonly TechLogEngineCheckReportControllerFindAllPath = "/amims/tech_log_engine_check/tech_log_engine_check_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogEngineCheckReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogEngineCheckReportControllerFindAll$Response(params: TechLogEngineCheckReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogEngineCheckReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogEngineCheckReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogEngineCheckReportControllerFindAll(params: TechLogEngineCheckReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogEngineCheckReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `techLogEngineCheckReportControllerFindOne()` */
    static readonly TechLogEngineCheckReportControllerFindOnePath = "/amims/tech_log_engine_check/tech_log_engine_check_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogEngineCheckReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogEngineCheckReportControllerFindOne$Response(params: TechLogEngineCheckReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogEngineCheckReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogEngineCheckReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogEngineCheckReportControllerFindOne(params: TechLogEngineCheckReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogEngineCheckReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TechLogEngineCheckReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TechLogEngineCheckReportService>;
}
