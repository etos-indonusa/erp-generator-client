import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartLogReportDto } from '../models/amims-part-log-report-dto';
import { PartLogReportControllerFindAll$Params } from '../fn/part-log-report/part-log-report-controller-find-all';
import { PartLogReportControllerFindOne$Params } from '../fn/part-log-report/part-log-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PartLogReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partLogReportControllerFindAll()` */
    static readonly PartLogReportControllerFindAllPath = "/amims/part_log/part_log_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partLogReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partLogReportControllerFindAll$Response(params: PartLogReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartLogReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partLogReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partLogReportControllerFindAll(params: PartLogReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartLogReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `partLogReportControllerFindOne()` */
    static readonly PartLogReportControllerFindOnePath = "/amims/part_log/part_log_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partLogReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    partLogReportControllerFindOne$Response(params: PartLogReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartLogReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partLogReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partLogReportControllerFindOne(params: PartLogReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartLogReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartLogReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartLogReportService>;
}
