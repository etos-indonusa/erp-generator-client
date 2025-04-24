import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsWorkflowAggregatorDto } from '../../models/tools-workflow-aggregator-dto';
export interface WorkflowAggregatorControllerRemove$Params {
    id: string;
}
export declare function workflowAggregatorControllerRemove(http: HttpClient, rootUrl: string, params: WorkflowAggregatorControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsWorkflowAggregatorDto;
}>>;
export declare namespace workflowAggregatorControllerRemove {
    var PATH: string;
}
