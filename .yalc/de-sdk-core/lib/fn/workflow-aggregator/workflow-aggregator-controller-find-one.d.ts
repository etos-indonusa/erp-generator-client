import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsWorkflowAggregatorDto } from '../../models/tools-workflow-aggregator-dto';
export interface WorkflowAggregatorControllerFindOne$Params {
    id: string;
}
export declare function workflowAggregatorControllerFindOne(http: HttpClient, rootUrl: string, params: WorkflowAggregatorControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsWorkflowAggregatorDto;
}>>;
export declare namespace workflowAggregatorControllerFindOne {
    var PATH: string;
}
