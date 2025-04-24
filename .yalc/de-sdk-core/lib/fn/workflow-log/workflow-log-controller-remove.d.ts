import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsWorkflowLogDto } from '../../models/tools-workflow-log-dto';
export interface WorkflowLogControllerRemove$Params {
    id: string;
}
export declare function workflowLogControllerRemove(http: HttpClient, rootUrl: string, params: WorkflowLogControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsWorkflowLogDto;
}>>;
export declare namespace workflowLogControllerRemove {
    var PATH: string;
}
