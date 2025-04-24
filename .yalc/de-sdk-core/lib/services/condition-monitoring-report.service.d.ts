import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsConditionMonitoringReportDto } from '../models/amims-condition-monitoring-report-dto';
import { ConditionMonitoringReportControllerFindAll$Params } from '../fn/condition-monitoring-report/condition-monitoring-report-controller-find-all';
import { ConditionMonitoringReportControllerFindOne$Params } from '../fn/condition-monitoring-report/condition-monitoring-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class ConditionMonitoringReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `conditionMonitoringReportControllerFindAll()` */
    static readonly ConditionMonitoringReportControllerFindAllPath = "/amims/condition_monitoring/condition_monitoring_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `conditionMonitoringReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    conditionMonitoringReportControllerFindAll$Response(params: ConditionMonitoringReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsConditionMonitoringReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `conditionMonitoringReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    conditionMonitoringReportControllerFindAll(params: ConditionMonitoringReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsConditionMonitoringReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `conditionMonitoringReportControllerFindOne()` */
    static readonly ConditionMonitoringReportControllerFindOnePath = "/amims/condition_monitoring/condition_monitoring_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `conditionMonitoringReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    conditionMonitoringReportControllerFindOne$Response(params: ConditionMonitoringReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsConditionMonitoringReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `conditionMonitoringReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    conditionMonitoringReportControllerFindOne(params: ConditionMonitoringReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsConditionMonitoringReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConditionMonitoringReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConditionMonitoringReportService>;
}
