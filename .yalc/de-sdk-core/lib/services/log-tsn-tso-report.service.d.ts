import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLogTsnTsoReportDto } from '../models/amims-log-tsn-tso-report-dto';
import { LogTsnTsoReportControllerFindAll$Params } from '../fn/log-tsn-tso-report/log-tsn-tso-report-controller-find-all';
import { LogTsnTsoReportControllerFindOne$Params } from '../fn/log-tsn-tso-report/log-tsn-tso-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class LogTsnTsoReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `logTsnTsoReportControllerFindAll()` */
    static readonly LogTsnTsoReportControllerFindAllPath = "/amims/log_tsn_tso/log_tsn_tso_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logTsnTsoReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logTsnTsoReportControllerFindAll$Response(params: LogTsnTsoReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogTsnTsoReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logTsnTsoReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logTsnTsoReportControllerFindAll(params: LogTsnTsoReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogTsnTsoReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `logTsnTsoReportControllerFindOne()` */
    static readonly LogTsnTsoReportControllerFindOnePath = "/amims/log_tsn_tso/log_tsn_tso_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logTsnTsoReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    logTsnTsoReportControllerFindOne$Response(params: LogTsnTsoReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogTsnTsoReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logTsnTsoReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    logTsnTsoReportControllerFindOne(params: LogTsnTsoReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogTsnTsoReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogTsnTsoReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LogTsnTsoReportService>;
}
