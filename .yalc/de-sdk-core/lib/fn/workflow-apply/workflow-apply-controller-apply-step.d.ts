import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { WorkflowApplyDto } from '../../models/workflow-apply-dto';
export interface WorkflowApplyControllerApplyStep$Params {
    body: WorkflowApplyDto;
}
export declare function workflowApplyControllerApplyStep(http: HttpClient, rootUrl: string, params: WorkflowApplyControllerApplyStep$Params, context?: HttpContext): Observable<StrictHttpResponse<void>>;
export declare namespace workflowApplyControllerApplyStep {
    var PATH: string;
}
