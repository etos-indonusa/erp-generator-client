import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsWorkflowReportDto } from '../../models/tools-workflow-report-dto';
export interface WorkflowReportControllerFindOne$Params {
    id: string;
}
export declare function workflowReportControllerFindOne(http: HttpClient, rootUrl: string, params: WorkflowReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsWorkflowReportDto;
}>>;
export declare namespace workflowReportControllerFindOne {
    var PATH: string;
}
