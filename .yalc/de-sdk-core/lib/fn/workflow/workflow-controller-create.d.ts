import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsWorkflowDto } from '../../models/tools-workflow-dto';
export interface WorkflowControllerCreate$Params {
    body: ToolsWorkflowDto;
}
export declare function workflowControllerCreate(http: HttpClient, rootUrl: string, params: WorkflowControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsWorkflowDto;
}>>;
export declare namespace workflowControllerCreate {
    var PATH: string;
}
