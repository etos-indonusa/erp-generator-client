import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsWorkflowLogDto } from '../../models/tools-workflow-log-dto';
export interface WorkflowLogControllerFindOne$Params {
    id: string;
}
export declare function workflowLogControllerFindOne(http: HttpClient, rootUrl: string, params: WorkflowLogControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsWorkflowLogDto;
}>>;
export declare namespace workflowLogControllerFindOne {
    var PATH: string;
}
