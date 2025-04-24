import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsWorkflowStepDto } from '../../models/tools-workflow-step-dto';
export interface WorkflowStepControllerFindOne$Params {
    id: string;
}
export declare function workflowStepControllerFindOne(http: HttpClient, rootUrl: string, params: WorkflowStepControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsWorkflowStepDto;
}>>;
export declare namespace workflowStepControllerFindOne {
    var PATH: string;
}
