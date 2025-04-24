import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
import { ToolsWorkflowReportDto } from '../../models/tools-workflow-report-dto';
export interface WorkflowReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function workflowReportControllerFindAll(http: HttpClient, rootUrl: string, params: WorkflowReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<ToolsWorkflowReportDto>;
    'total'?: number;
}>>;
export declare namespace workflowReportControllerFindAll {
    var PATH: string;
}
