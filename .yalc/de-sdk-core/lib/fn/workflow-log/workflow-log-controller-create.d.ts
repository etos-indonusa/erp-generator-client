import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsWorkflowLogDto } from '../../models/tools-workflow-log-dto';
export interface WorkflowLogControllerCreate$Params {
    body: ToolsWorkflowLogDto;
}
export declare function workflowLogControllerCreate(http: HttpClient, rootUrl: string, params: WorkflowLogControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsWorkflowLogDto;
}>>;
export declare namespace workflowLogControllerCreate {
    var PATH: string;
}
