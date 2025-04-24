import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsWorkflowStepDto } from '../../models/tools-workflow-step-dto';
export interface WorkflowStepControllerFindAll$Params {
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
export declare function workflowStepControllerFindAll(http: HttpClient, rootUrl: string, params?: WorkflowStepControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<ToolsWorkflowStepDto>;
    'total'?: number;
}>>;
export declare namespace workflowStepControllerFindAll {
    var PATH: string;
}
