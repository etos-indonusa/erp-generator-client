import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsWorkflowLogDto } from '../../models/tools-workflow-log-dto';
export interface WorkflowLogControllerUpdate$Params {
    id: string;
    body: ToolsWorkflowLogDto;
}
export declare function workflowLogControllerUpdate(http: HttpClient, rootUrl: string, params: WorkflowLogControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsWorkflowLogDto;
}>>;
export declare namespace workflowLogControllerUpdate {
    var PATH: string;
}
