import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsWorkflowDto } from '../../models/tools-workflow-dto';
export interface WorkflowControllerUpdate$Params {
    id: string;
    body: ToolsWorkflowDto;
}
export declare function workflowControllerUpdate(http: HttpClient, rootUrl: string, params: WorkflowControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsWorkflowDto;
}>>;
export declare namespace workflowControllerUpdate {
    var PATH: string;
}
