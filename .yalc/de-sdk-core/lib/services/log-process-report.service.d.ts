import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLogProcessReportDto } from '../models/amims-log-process-report-dto';
import { LogProcessReportControllerFindAll$Params } from '../fn/log-process-report/log-process-report-controller-find-all';
import { LogProcessReportControllerFindOne$Params } from '../fn/log-process-report/log-process-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class LogProcessReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `logProcessReportControllerFindAll()` */
    static readonly LogProcessReportControllerFindAllPath = "/amims/log_process/log_process_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logProcessReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logProcessReportControllerFindAll$Response(params: LogProcessReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogProcessReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logProcessReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logProcessReportControllerFindAll(params: LogProcessReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogProcessReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `logProcessReportControllerFindOne()` */
    static readonly LogProcessReportControllerFindOnePath = "/amims/log_process/log_process_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logProcessReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    logProcessReportControllerFindOne$Response(params: LogProcessReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogProcessReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logProcessReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    logProcessReportControllerFindOne(params: LogProcessReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogProcessReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogProcessReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LogProcessReportService>;
}
