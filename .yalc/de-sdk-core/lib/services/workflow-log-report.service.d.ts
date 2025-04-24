import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ToolsWorkflowLogReportDto } from '../models/tools-workflow-log-report-dto';
import { WorkflowLogReportControllerFindAll$Params } from '../fn/workflow-log-report/workflow-log-report-controller-find-all';
import { WorkflowLogReportControllerFindOne$Params } from '../fn/workflow-log-report/workflow-log-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class WorkflowLogReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `workflowLogReportControllerFindAll()` */
    static readonly WorkflowLogReportControllerFindAllPath = "/auth/workflow_log/workflow_log_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowLogReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowLogReportControllerFindAll$Response(params: WorkflowLogReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsWorkflowLogReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowLogReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowLogReportControllerFindAll(params: WorkflowLogReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsWorkflowLogReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `workflowLogReportControllerFindOne()` */
    static readonly WorkflowLogReportControllerFindOnePath = "/auth/workflow_log/workflow_log_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowLogReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowLogReportControllerFindOne$Response(params: WorkflowLogReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowLogReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowLogReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowLogReportControllerFindOne(params: WorkflowLogReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowLogReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<WorkflowLogReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WorkflowLogReportService>;
}
