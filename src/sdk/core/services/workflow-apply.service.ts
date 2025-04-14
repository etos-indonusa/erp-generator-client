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

import { workflowApplyControllerApplyStep } from '../fn/workflow-apply/workflow-apply-controller-apply-step';
import { WorkflowApplyControllerApplyStep$Params } from '../fn/workflow-apply/workflow-apply-controller-apply-step';

@Injectable({ providedIn: 'root' })
export class WorkflowApplyService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `workflowApplyControllerApplyStep()` */
  static readonly WorkflowApplyControllerApplyStepPath = '/auth/workflow/workflow/apply';

  /**
   * Apply workflow step.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `workflowApplyControllerApplyStep()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  workflowApplyControllerApplyStep$Response(params: WorkflowApplyControllerApplyStep$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return workflowApplyControllerApplyStep(this.http, this.rootUrl, params, context);
  }

  /**
   * Apply workflow step.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `workflowApplyControllerApplyStep$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  workflowApplyControllerApplyStep(params: WorkflowApplyControllerApplyStep$Params, context?: HttpContext): Observable<void> {
    return this.workflowApplyControllerApplyStep$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
