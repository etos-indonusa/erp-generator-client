import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsWorkflowLogReportDto } from '../../models/tools-workflow-log-report-dto';
export interface WorkflowLogReportControllerFindOne$Params {
    id: string;
}
export declare function workflowLogReportControllerFindOne(http: HttpClient, rootUrl: string, params: WorkflowLogReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsWorkflowLogReportDto;
}>>;
export declare namespace workflowLogReportControllerFindOne {
    var PATH: string;
}
