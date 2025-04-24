import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ToolsWorkflowLogWidgetDto } from '../models/tools-workflow-log-widget-dto';
import { WorkflowLogWidgetControllerFindAll$Params } from '../fn/workflow-log-widget/workflow-log-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class WorkflowLogWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `workflowLogWidgetControllerFindAll()` */
    static readonly WorkflowLogWidgetControllerFindAllPath = "/auth/workflow_log/workflow_log_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowLogWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowLogWidgetControllerFindAll$Response(params: WorkflowLogWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsWorkflowLogWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowLogWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowLogWidgetControllerFindAll(params: WorkflowLogWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsWorkflowLogWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<WorkflowLogWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WorkflowLogWidgetService>;
}
