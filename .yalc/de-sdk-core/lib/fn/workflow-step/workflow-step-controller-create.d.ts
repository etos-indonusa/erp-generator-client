import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsWorkflowStepDto } from '../../models/tools-workflow-step-dto';
export interface WorkflowStepControllerCreate$Params {
    body: ToolsWorkflowStepDto;
}
export declare function workflowStepControllerCreate(http: HttpClient, rootUrl: string, params: WorkflowStepControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsWorkflowStepDto;
}>>;
export declare namespace workflowStepControllerCreate {
    var PATH: string;
}
