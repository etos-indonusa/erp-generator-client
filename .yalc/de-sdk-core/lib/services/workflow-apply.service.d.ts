import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { WorkflowApplyControllerApplyStep$Params } from '../fn/workflow-apply/workflow-apply-controller-apply-step';
import * as i0 from "@angular/core";
export declare class WorkflowApplyService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `workflowApplyControllerApplyStep()` */
    static readonly WorkflowApplyControllerApplyStepPath = "/auth/workflow/workflow/apply";
    /**
     * Apply workflow step.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowApplyControllerApplyStep()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowApplyControllerApplyStep$Response(params: WorkflowApplyControllerApplyStep$Params, context?: HttpContext): Observable<StrictHttpResponse<void>>;
    /**
     * Apply workflow step.
     *
     *
     *
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowApplyControllerApplyStep$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowApplyControllerApplyStep(params: WorkflowApplyControllerApplyStep$Params, context?: HttpContext): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<WorkflowApplyService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WorkflowApplyService>;
}
