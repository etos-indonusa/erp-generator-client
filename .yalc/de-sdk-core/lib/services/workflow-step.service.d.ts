import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ToolsWorkflowStepDto } from '../models/tools-workflow-step-dto';
import { WorkflowStepControllerCreate$Params } from '../fn/workflow-step/workflow-step-controller-create';
import { WorkflowStepControllerFindAll$Params } from '../fn/workflow-step/workflow-step-controller-find-all';
import { WorkflowStepControllerFindOne$Params } from '../fn/workflow-step/workflow-step-controller-find-one';
import { WorkflowStepControllerRemove$Params } from '../fn/workflow-step/workflow-step-controller-remove';
import { WorkflowStepControllerUpdate$Params } from '../fn/workflow-step/workflow-step-controller-update';
import * as i0 from "@angular/core";
export declare class WorkflowStepService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `workflowStepControllerFindAll()` */
    static readonly WorkflowStepControllerFindAllPath = "/auth/workflow_step/workflow_step";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowStepControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowStepControllerFindAll$Response(params?: WorkflowStepControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsWorkflowStepDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowStepControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowStepControllerFindAll(params?: WorkflowStepControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsWorkflowStepDto>;
        'total'?: number;
    }>;
    /** Path part for operation `workflowStepControllerCreate()` */
    static readonly WorkflowStepControllerCreatePath = "/auth/workflow_step/workflow_step";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowStepControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowStepControllerCreate$Response(params: WorkflowStepControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowStepDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowStepControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowStepControllerCreate(params: WorkflowStepControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowStepDto;
    }>;
    /** Path part for operation `workflowStepControllerFindOne()` */
    static readonly WorkflowStepControllerFindOnePath = "/auth/workflow_step/workflow_step/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowStepControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowStepControllerFindOne$Response(params: WorkflowStepControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowStepDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowStepControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowStepControllerFindOne(params: WorkflowStepControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowStepDto;
    }>;
    /** Path part for operation `workflowStepControllerUpdate()` */
    static readonly WorkflowStepControllerUpdatePath = "/auth/workflow_step/workflow_step/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowStepControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowStepControllerUpdate$Response(params: WorkflowStepControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowStepDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowStepControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowStepControllerUpdate(params: WorkflowStepControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowStepDto;
    }>;
    /** Path part for operation `workflowStepControllerRemove()` */
    static readonly WorkflowStepControllerRemovePath = "/auth/workflow_step/workflow_step/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowStepControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowStepControllerRemove$Response(params: WorkflowStepControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowStepDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowStepControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowStepControllerRemove(params: WorkflowStepControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowStepDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<WorkflowStepService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WorkflowStepService>;
}
