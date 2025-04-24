import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsWorkflowAggregatorDto } from '../../models/tools-workflow-aggregator-dto';
export interface WorkflowAggregatorControllerFindAll$Params {
    pageIndex?: number;
    pageSize?: number;
    /**
     * JSON.stringify({})
     */
    filter?: string;
    sortKey?: string;
    sortValue?: 'asc' | 'desc';
    /**
     * Array of searchable fields
     */
    search_field?: Array<string>;
    search_keyword?: string;
}
export declare function workflowAggregatorControllerFindAll(http: HttpClient, rootUrl: string, params?: WorkflowAggregatorControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<ToolsWorkflowAggregatorDto>;
    'total'?: number;
}>>;
export declare namespace workflowAggregatorControllerFindAll {
    var PATH: string;
}
