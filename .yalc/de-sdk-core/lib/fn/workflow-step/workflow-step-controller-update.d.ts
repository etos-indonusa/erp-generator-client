import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsWorkflowStepDto } from '../../models/tools-workflow-step-dto';
export interface WorkflowStepControllerUpdate$Params {
    id: string;
    body: ToolsWorkflowStepDto;
}
export declare function workflowStepControllerUpdate(http: HttpClient, rootUrl: string, params: WorkflowStepControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsWorkflowStepDto;
}>>;
export declare namespace workflowStepControllerUpdate {
    var PATH: string;
}
