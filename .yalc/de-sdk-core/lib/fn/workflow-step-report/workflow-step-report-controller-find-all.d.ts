import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
import { ToolsWorkflowStepReportDto } from '../../models/tools-workflow-step-report-dto';
export interface WorkflowStepReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function workflowStepReportControllerFindAll(http: HttpClient, rootUrl: string, params: WorkflowStepReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<ToolsWorkflowStepReportDto>;
    'total'?: number;
}>>;
export declare namespace workflowStepReportControllerFindAll {
    var PATH: string;
}
