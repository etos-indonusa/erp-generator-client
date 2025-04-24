import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLogSpReportDto } from '../models/amims-log-sp-report-dto';
import { LogSpReportControllerFindAll$Params } from '../fn/log-sp-report/log-sp-report-controller-find-all';
import { LogSpReportControllerFindOne$Params } from '../fn/log-sp-report/log-sp-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class LogSpReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `logSpReportControllerFindAll()` */
    static readonly LogSpReportControllerFindAllPath = "/amims/log_sp/log_sp_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logSpReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logSpReportControllerFindAll$Response(params: LogSpReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogSpReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logSpReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logSpReportControllerFindAll(params: LogSpReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogSpReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `logSpReportControllerFindOne()` */
    static readonly LogSpReportControllerFindOnePath = "/amims/log_sp/log_sp_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logSpReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    logSpReportControllerFindOne$Response(params: LogSpReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogSpReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logSpReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    logSpReportControllerFindOne(params: LogSpReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogSpReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogSpReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LogSpReportService>;
}
