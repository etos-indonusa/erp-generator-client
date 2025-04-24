import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
import { ToolsWorkflowLogReportDto } from '../../models/tools-workflow-log-report-dto';
export interface WorkflowLogReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function workflowLogReportControllerFindAll(http: HttpClient, rootUrl: string, params: WorkflowLogReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<ToolsWorkflowLogReportDto>;
    'total'?: number;
}>>;
export declare namespace workflowLogReportControllerFindAll {
    var PATH: string;
}
