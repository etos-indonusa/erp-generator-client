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

import { AmimsQaRpdWidgetDto } from '../models/amims-qa-rpd-widget-dto';
import { qaRpdWidgetControllerFindAll } from '../fn/qa-rpd-widget/qa-rpd-widget-controller-find-all';
import { QaRpdWidgetControllerFindAll$Params } from '../fn/qa-rpd-widget/qa-rpd-widget-controller-find-all';

@Injectable({ providedIn: 'root' })
export class QaRpdWidgetService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `qaRpdWidgetControllerFindAll()` */
  static readonly QaRpdWidgetControllerFindAllPath = '/amims/qa_rpd/qa_rpd_widget';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `qaRpdWidgetControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  qaRpdWidgetControllerFindAll$Response(params: QaRpdWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsQaRpdWidgetDto>;
'total'?: number;
}>> {
    return qaRpdWidgetControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `qaRpdWidgetControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  qaRpdWidgetControllerFindAll(params: QaRpdWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsQaRpdWidgetDto>;
'total'?: number;
}> {
    return this.qaRpdWidgetControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsQaRpdWidgetDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsQaRpdWidgetDto>;
'total'?: number;
} => r.body)
    );
  }

}
