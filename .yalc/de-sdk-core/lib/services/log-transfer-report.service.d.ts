import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLogTransferReportDto } from '../models/amims-log-transfer-report-dto';
import { LogTransferReportControllerFindAll$Params } from '../fn/log-transfer-report/log-transfer-report-controller-find-all';
import { LogTransferReportControllerFindOne$Params } from '../fn/log-transfer-report/log-transfer-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class LogTransferReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `logTransferReportControllerFindAll()` */
    static readonly LogTransferReportControllerFindAllPath = "/amims/log_transfer/log_transfer_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logTransferReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logTransferReportControllerFindAll$Response(params: LogTransferReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogTransferReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logTransferReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logTransferReportControllerFindAll(params: LogTransferReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogTransferReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `logTransferReportControllerFindOne()` */
    static readonly LogTransferReportControllerFindOnePath = "/amims/log_transfer/log_transfer_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logTransferReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    logTransferReportControllerFindOne$Response(params: LogTransferReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogTransferReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logTransferReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    logTransferReportControllerFindOne(params: LogTransferReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLogTransferReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogTransferReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LogTransferReportService>;
}
