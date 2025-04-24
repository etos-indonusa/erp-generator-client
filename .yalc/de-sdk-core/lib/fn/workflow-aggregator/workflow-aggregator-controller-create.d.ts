import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsWorkflowAggregatorDto } from '../../models/tools-workflow-aggregator-dto';
export interface WorkflowAggregatorControllerCreate$Params {
    body: ToolsWorkflowAggregatorDto;
}
export declare function workflowAggregatorControllerCreate(http: HttpClient, rootUrl: string, params: WorkflowAggregatorControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsWorkflowAggregatorDto;
}>>;
export declare namespace workflowAggregatorControllerCreate {
    var PATH: string;
}
