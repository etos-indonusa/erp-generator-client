import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ToolsWorkflowLogDto } from '../models/tools-workflow-log-dto';
import { WorkflowLogControllerCreate$Params } from '../fn/workflow-log/workflow-log-controller-create';
import { WorkflowLogControllerFindAll$Params } from '../fn/workflow-log/workflow-log-controller-find-all';
import { WorkflowLogControllerFindOne$Params } from '../fn/workflow-log/workflow-log-controller-find-one';
import { WorkflowLogControllerRemove$Params } from '../fn/workflow-log/workflow-log-controller-remove';
import { WorkflowLogControllerUpdate$Params } from '../fn/workflow-log/workflow-log-controller-update';
import * as i0 from "@angular/core";
export declare class WorkflowLogService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `workflowLogControllerFindAll()` */
    static readonly WorkflowLogControllerFindAllPath = "/auth/workflow_log/workflow_log";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowLogControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowLogControllerFindAll$Response(params?: WorkflowLogControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsWorkflowLogDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowLogControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowLogControllerFindAll(params?: WorkflowLogControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsWorkflowLogDto>;
        'total'?: number;
    }>;
    /** Path part for operation `workflowLogControllerCreate()` */
    static readonly WorkflowLogControllerCreatePath = "/auth/workflow_log/workflow_log";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowLogControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowLogControllerCreate$Response(params: WorkflowLogControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowLogDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowLogControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowLogControllerCreate(params: WorkflowLogControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowLogDto;
    }>;
    /** Path part for operation `workflowLogControllerFindOne()` */
    static readonly WorkflowLogControllerFindOnePath = "/auth/workflow_log/workflow_log/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowLogControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowLogControllerFindOne$Response(params: WorkflowLogControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowLogDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowLogControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowLogControllerFindOne(params: WorkflowLogControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowLogDto;
    }>;
    /** Path part for operation `workflowLogControllerUpdate()` */
    static readonly WorkflowLogControllerUpdatePath = "/auth/workflow_log/workflow_log/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowLogControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowLogControllerUpdate$Response(params: WorkflowLogControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowLogDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowLogControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowLogControllerUpdate(params: WorkflowLogControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowLogDto;
    }>;
    /** Path part for operation `workflowLogControllerRemove()` */
    static readonly WorkflowLogControllerRemovePath = "/auth/workflow_log/workflow_log/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowLogControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowLogControllerRemove$Response(params: WorkflowLogControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowLogDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowLogControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowLogControllerRemove(params: WorkflowLogControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowLogDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<WorkflowLogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WorkflowLogService>;
}
