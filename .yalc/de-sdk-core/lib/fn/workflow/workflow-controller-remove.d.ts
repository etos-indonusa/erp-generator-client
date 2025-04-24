import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsWorkflowDto } from '../../models/tools-workflow-dto';
export interface WorkflowControllerRemove$Params {
    id: string;
}
export declare function workflowControllerRemove(http: HttpClient, rootUrl: string, params: WorkflowControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsWorkflowDto;
}>>;
export declare namespace workflowControllerRemove {
    var PATH: string;
}
