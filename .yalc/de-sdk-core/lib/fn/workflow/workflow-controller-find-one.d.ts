import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsWorkflowDto } from '../../models/tools-workflow-dto';
export interface WorkflowControllerFindOne$Params {
    id: string;
}
export declare function workflowControllerFindOne(http: HttpClient, rootUrl: string, params: WorkflowControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsWorkflowDto;
}>>;
export declare namespace workflowControllerFindOne {
    var PATH: string;
}
