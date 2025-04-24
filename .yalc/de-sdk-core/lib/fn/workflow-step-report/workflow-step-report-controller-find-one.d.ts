import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsWorkflowStepReportDto } from '../../models/tools-workflow-step-report-dto';
export interface WorkflowStepReportControllerFindOne$Params {
    id: string;
}
export declare function workflowStepReportControllerFindOne(http: HttpClient, rootUrl: string, params: WorkflowStepReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsWorkflowStepReportDto;
}>>;
export declare namespace workflowStepReportControllerFindOne {
    var PATH: string;
}
