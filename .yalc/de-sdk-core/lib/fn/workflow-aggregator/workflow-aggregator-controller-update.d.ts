import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsWorkflowAggregatorDto } from '../../models/tools-workflow-aggregator-dto';
export interface WorkflowAggregatorControllerUpdate$Params {
    id: string;
    body: ToolsWorkflowAggregatorDto;
}
export declare function workflowAggregatorControllerUpdate(http: HttpClient, rootUrl: string, params: WorkflowAggregatorControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsWorkflowAggregatorDto;
}>>;
export declare namespace workflowAggregatorControllerUpdate {
    var PATH: string;
}
