import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ToolsWorkflowDto } from '../models/tools-workflow-dto';
import { WorkflowControllerCreate$Params } from '../fn/workflow/workflow-controller-create';
import { WorkflowControllerFindAll$Params } from '../fn/workflow/workflow-controller-find-all';
import { WorkflowControllerFindOne$Params } from '../fn/workflow/workflow-controller-find-one';
import { WorkflowControllerRemove$Params } from '../fn/workflow/workflow-controller-remove';
import { WorkflowControllerUpdate$Params } from '../fn/workflow/workflow-controller-update';
import * as i0 from "@angular/core";
export declare class WorkflowService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `workflowControllerFindAll()` */
    static readonly WorkflowControllerFindAllPath = "/auth/workflow/workflow";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowControllerFindAll$Response(params?: WorkflowControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsWorkflowDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowControllerFindAll(params?: WorkflowControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsWorkflowDto>;
        'total'?: number;
    }>;
    /** Path part for operation `workflowControllerCreate()` */
    static readonly WorkflowControllerCreatePath = "/auth/workflow/workflow";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowControllerCreate$Response(params: WorkflowControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowControllerCreate(params: WorkflowControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowDto;
    }>;
    /** Path part for operation `workflowControllerFindOne()` */
    static readonly WorkflowControllerFindOnePath = "/auth/workflow/workflow/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowControllerFindOne$Response(params: WorkflowControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowControllerFindOne(params: WorkflowControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowDto;
    }>;
    /** Path part for operation `workflowControllerUpdate()` */
    static readonly WorkflowControllerUpdatePath = "/auth/workflow/workflow/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowControllerUpdate$Response(params: WorkflowControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowControllerUpdate(params: WorkflowControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowDto;
    }>;
    /** Path part for operation `workflowControllerRemove()` */
    static readonly WorkflowControllerRemovePath = "/auth/workflow/workflow/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowControllerRemove$Response(params: WorkflowControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowControllerRemove(params: WorkflowControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<WorkflowService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WorkflowService>;
}
