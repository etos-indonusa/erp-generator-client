import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ToolsWorkflowWidgetDto } from '../models/tools-workflow-widget-dto';
import { WorkflowWidgetControllerFindAll$Params } from '../fn/workflow-widget/workflow-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class WorkflowWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `workflowWidgetControllerFindAll()` */
    static readonly WorkflowWidgetControllerFindAllPath = "/auth/workflow/workflow_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowWidgetControllerFindAll$Response(params: WorkflowWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsWorkflowWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowWidgetControllerFindAll(params: WorkflowWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsWorkflowWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<WorkflowWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WorkflowWidgetService>;
}
