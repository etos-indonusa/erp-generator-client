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

import { ToolsWorkflowWidgetDto } from '../models/tools-workflow-widget-dto';
import { workflowWidgetControllerFindAll } from '../fn/workflow-widget/workflow-widget-controller-find-all';
import { WorkflowWidgetControllerFindAll$Params } from '../fn/workflow-widget/workflow-widget-controller-find-all';

@Injectable({ providedIn: 'root' })
export class WorkflowWidgetService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `workflowWidgetControllerFindAll()` */
  static readonly WorkflowWidgetControllerFindAllPath = '/auth/workflow/workflow_widget';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowWidgetControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  workflowWidgetControllerFindAll$Response(params: WorkflowWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<ToolsWorkflowWidgetDto>;
'total'?: number;
}>> {
    return workflowWidgetControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `workflowWidgetControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  workflowWidgetControllerFindAll(params: WorkflowWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<ToolsWorkflowWidgetDto>;
'total'?: number;
}> {
    return this.workflowWidgetControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<ToolsWorkflowWidgetDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<ToolsWorkflowWidgetDto>;
'total'?: number;
} => r.body)
    );
  }

}
