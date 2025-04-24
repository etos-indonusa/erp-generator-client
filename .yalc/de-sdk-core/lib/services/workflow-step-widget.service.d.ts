import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ToolsWorkflowStepWidgetDto } from '../models/tools-workflow-step-widget-dto';
import { WorkflowStepWidgetControllerFindAll$Params } from '../fn/workflow-step-widget/workflow-step-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class WorkflowStepWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `workflowStepWidgetControllerFindAll()` */
    static readonly WorkflowStepWidgetControllerFindAllPath = "/auth/workflow_step/workflow_step_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowStepWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowStepWidgetControllerFindAll$Response(params: WorkflowStepWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsWorkflowStepWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowStepWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowStepWidgetControllerFindAll(params: WorkflowStepWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsWorkflowStepWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<WorkflowStepWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WorkflowStepWidgetService>;
}
