import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ToolsWorkflowStepReportDto } from '../models/tools-workflow-step-report-dto';
import { WorkflowStepReportControllerFindAll$Params } from '../fn/workflow-step-report/workflow-step-report-controller-find-all';
import { WorkflowStepReportControllerFindOne$Params } from '../fn/workflow-step-report/workflow-step-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class WorkflowStepReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `workflowStepReportControllerFindAll()` */
    static readonly WorkflowStepReportControllerFindAllPath = "/auth/workflow_step/workflow_step_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowStepReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowStepReportControllerFindAll$Response(params: WorkflowStepReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsWorkflowStepReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowStepReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowStepReportControllerFindAll(params: WorkflowStepReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsWorkflowStepReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `workflowStepReportControllerFindOne()` */
    static readonly WorkflowStepReportControllerFindOnePath = "/auth/workflow_step/workflow_step_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowStepReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowStepReportControllerFindOne$Response(params: WorkflowStepReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowStepReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowStepReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowStepReportControllerFindOne(params: WorkflowStepReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowStepReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<WorkflowStepReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WorkflowStepReportService>;
}
