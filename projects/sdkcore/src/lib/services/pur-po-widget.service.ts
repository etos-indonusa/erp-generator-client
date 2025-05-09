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

import { AmimsPurPoWidgetDto } from '../models/amims-pur-po-widget-dto';
import { purPoWidgetControllerFindAll } from '../fn/pur-po-widget/pur-po-widget-controller-find-all';
import { PurPoWidgetControllerFindAll$Params } from '../fn/pur-po-widget/pur-po-widget-controller-find-all';

@Injectable({ providedIn: 'root' })
export class PurPoWidgetService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `purPoWidgetControllerFindAll()` */
  static readonly PurPoWidgetControllerFindAllPath = '/amims/pur_po/pur_po_widget';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `purPoWidgetControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  purPoWidgetControllerFindAll$Response(params: PurPoWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPurPoWidgetDto>;
'total'?: number;
}>> {
    return purPoWidgetControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `purPoWidgetControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  purPoWidgetControllerFindAll(params: PurPoWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPurPoWidgetDto>;
'total'?: number;
}> {
    return this.purPoWidgetControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPurPoWidgetDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPurPoWidgetDto>;
'total'?: number;
} => r.body)
    );
  }

}
