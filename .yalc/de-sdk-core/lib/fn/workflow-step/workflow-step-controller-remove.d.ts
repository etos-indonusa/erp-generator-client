import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsWorkflowStepDto } from '../../models/tools-workflow-step-dto';
export interface WorkflowStepControllerRemove$Params {
    id: string;
}
export declare function workflowStepControllerRemove(http: HttpClient, rootUrl: string, params: WorkflowStepControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsWorkflowStepDto;
}>>;
export declare namespace workflowStepControllerRemove {
    var PATH: string;
}
