import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTechLogEngineReportDto } from '../models/amims-tech-log-engine-report-dto';
import { TechLogEngineReportControllerFindAll$Params } from '../fn/tech-log-engine-report/tech-log-engine-report-controller-find-all';
import { TechLogEngineReportControllerFindOne$Params } from '../fn/tech-log-engine-report/tech-log-engine-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class TechLogEngineReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `techLogEngineReportControllerFindAll()` */
    static readonly TechLogEngineReportControllerFindAllPath = "/amims/tech_log_engine/tech_log_engine_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogEngineReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogEngineReportControllerFindAll$Response(params: TechLogEngineReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogEngineReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogEngineReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogEngineReportControllerFindAll(params: TechLogEngineReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogEngineReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `techLogEngineReportControllerFindOne()` */
    static readonly TechLogEngineReportControllerFindOnePath = "/amims/tech_log_engine/tech_log_engine_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogEngineReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogEngineReportControllerFindOne$Response(params: TechLogEngineReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogEngineReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogEngineReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogEngineReportControllerFindOne(params: TechLogEngineReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogEngineReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TechLogEngineReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TechLogEngineReportService>;
}
