import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ToolsWorkflowAggregatorDto } from '../models/tools-workflow-aggregator-dto';
import { WorkflowAggregatorControllerCreate$Params } from '../fn/workflow-aggregator/workflow-aggregator-controller-create';
import { WorkflowAggregatorControllerFindAll$Params } from '../fn/workflow-aggregator/workflow-aggregator-controller-find-all';
import { WorkflowAggregatorControllerFindOne$Params } from '../fn/workflow-aggregator/workflow-aggregator-controller-find-one';
import { WorkflowAggregatorControllerRemove$Params } from '../fn/workflow-aggregator/workflow-aggregator-controller-remove';
import { WorkflowAggregatorControllerUpdate$Params } from '../fn/workflow-aggregator/workflow-aggregator-controller-update';
import * as i0 from "@angular/core";
export declare class WorkflowAggregatorService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `workflowAggregatorControllerFindAll()` */
    static readonly WorkflowAggregatorControllerFindAllPath = "/auth/workflow_aggregator/workflow_aggregator";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowAggregatorControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowAggregatorControllerFindAll$Response(params?: WorkflowAggregatorControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsWorkflowAggregatorDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowAggregatorControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowAggregatorControllerFindAll(params?: WorkflowAggregatorControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsWorkflowAggregatorDto>;
        'total'?: number;
    }>;
    /** Path part for operation `workflowAggregatorControllerCreate()` */
    static readonly WorkflowAggregatorControllerCreatePath = "/auth/workflow_aggregator/workflow_aggregator";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowAggregatorControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowAggregatorControllerCreate$Response(params: WorkflowAggregatorControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowAggregatorDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowAggregatorControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowAggregatorControllerCreate(params: WorkflowAggregatorControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowAggregatorDto;
    }>;
    /** Path part for operation `workflowAggregatorControllerFindOne()` */
    static readonly WorkflowAggregatorControllerFindOnePath = "/auth/workflow_aggregator/workflow_aggregator/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowAggregatorControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowAggregatorControllerFindOne$Response(params: WorkflowAggregatorControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowAggregatorDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowAggregatorControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowAggregatorControllerFindOne(params: WorkflowAggregatorControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowAggregatorDto;
    }>;
    /** Path part for operation `workflowAggregatorControllerUpdate()` */
    static readonly WorkflowAggregatorControllerUpdatePath = "/auth/workflow_aggregator/workflow_aggregator/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowAggregatorControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowAggregatorControllerUpdate$Response(params: WorkflowAggregatorControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowAggregatorDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowAggregatorControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowAggregatorControllerUpdate(params: WorkflowAggregatorControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowAggregatorDto;
    }>;
    /** Path part for operation `workflowAggregatorControllerRemove()` */
    static readonly WorkflowAggregatorControllerRemovePath = "/auth/workflow_aggregator/workflow_aggregator/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowAggregatorControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowAggregatorControllerRemove$Response(params: WorkflowAggregatorControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowAggregatorDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowAggregatorControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowAggregatorControllerRemove(params: WorkflowAggregatorControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsWorkflowAggregatorDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<WorkflowAggregatorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WorkflowAggregatorService>;
}
