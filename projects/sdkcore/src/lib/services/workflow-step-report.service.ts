/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ToolsWorkflowStepReportDto } from '../models/tools-workflow-step-report-dto';
import { workflowStepReportControllerFindAll } from '../fn/workflow-step-report/workflow-step-report-controller-find-all';
import { WorkflowStepReportControllerFindAll$Params } from '../fn/workflow-step-report/workflow-step-report-controller-find-all';
import { workflowStepReportControllerFindOne } from '../fn/workflow-step-report/workflow-step-report-controller-find-one';
import { WorkflowStepReportControllerFindOne$Params } from '../fn/workflow-step-report/workflow-step-report-controller-find-one';

@Injectable({ providedIn: 'root' })
export class WorkflowStepReportService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `workflowStepReportControllerFindAll()` */
  static readonly WorkflowStepReportControllerFindAllPath = '/auth/workflow_step/workflow_step_report/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowStepReportControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  workflowStepReportControllerFindAll$Response(params: WorkflowStepReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<ToolsWorkflowStepReportDto>;
'total'?: number;
}>> {
    return workflowStepReportControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `workflowStepReportControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  workflowStepReportControllerFindAll(params: WorkflowStepReportControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<ToolsWorkflowStepReportDto>;
'total'?: number;
}> {
    return this.workflowStepReportControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<ToolsWorkflowStepReportDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<ToolsWorkflowStepReportDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `workflowStepReportControllerFindOne()` */
  static readonly WorkflowStepReportControllerFindOnePath = '/auth/workflow_step/workflow_step_report/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowStepReportControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowStepReportControllerFindOne$Response(params: WorkflowStepReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: ToolsWorkflowStepReportDto;
}>> {
    return workflowStepReportControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `workflowStepReportControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  workflowStepReportControllerFindOne(params: WorkflowStepReportControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: ToolsWorkflowStepReportDto;
}> {
    return this.workflowStepReportControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: ToolsWorkflowStepReportDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: ToolsWorkflowStepReportDto;
} => r.body)
    );
  }

}
