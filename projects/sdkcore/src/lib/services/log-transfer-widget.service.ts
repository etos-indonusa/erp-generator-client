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

import { AmimsLogTransferWidgetDto } from '../models/amims-log-transfer-widget-dto';
import { logTransferWidgetControllerFindAll } from '../fn/log-transfer-widget/log-transfer-widget-controller-find-all';
import { LogTransferWidgetControllerFindAll$Params } from '../fn/log-transfer-widget/log-transfer-widget-controller-find-all';

@Injectable({ providedIn: 'root' })
export class LogTransferWidgetService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `logTransferWidgetControllerFindAll()` */
  static readonly LogTransferWidgetControllerFindAllPath = '/amims/log_transfer/log_transfer_widget';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logTransferWidgetControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logTransferWidgetControllerFindAll$Response(params: LogTransferWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsLogTransferWidgetDto>;
'total'?: number;
}>> {
    return logTransferWidgetControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logTransferWidgetControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logTransferWidgetControllerFindAll(params: LogTransferWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsLogTransferWidgetDto>;
'total'?: number;
}> {
    return this.logTransferWidgetControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsLogTransferWidgetDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsLogTransferWidgetDto>;
'total'?: number;
} => r.body)
    );
  }

}
