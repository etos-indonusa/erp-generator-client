import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ToolsWorkflowReportDto } from '../models/tools-workflow-report-dto';
import { WorkflowReportControllerFindAll$Params } from '../fn/workflow-report/workflow-report-controller-find-all';
import { WorkflowReportControllerFindOne$Params } from '../fn/workflow-report/workflow-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class WorkflowReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `workflowReportControllerFindAll()` */
    static readonly WorkflowReportControllerFindAllPath = "/auth/workflow/workflow_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowReportControllerFindAll$Response(params: WorkflowReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsWorkflowReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowReportControllerFindAll(params: WorkflowReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsWorkflowReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `workflowReportControllerFindOne()` */
    static readonly WorkflowReportControllerFindOnePath = "/auth/workflow/workflow_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowReportControllerFindOne$Response(params: WorkflowReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowReportControllerFindOne(params: WorkflowReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<WorkflowReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WorkflowReportService>;
}
