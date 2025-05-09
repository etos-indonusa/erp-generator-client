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

import { clientWidgetControllerFindAll } from '../fn/client-widget/client-widget-controller-find-all';
import { ClientWidgetControllerFindAll$Params } from '../fn/client-widget/client-widget-controller-find-all';
import { PelangganClientWidgetDto } from '../models/pelanggan-client-widget-dto';

@Injectable({ providedIn: 'root' })
export class ClientWidgetService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `clientWidgetControllerFindAll()` */
  static readonly ClientWidgetControllerFindAllPath = '/client_widget';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clientWidgetControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  clientWidgetControllerFindAll$Response(params: ClientWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganClientWidgetDto>;
'total'?: number;
}>> {
    return clientWidgetControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `clientWidgetControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  clientWidgetControllerFindAll(params: ClientWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganClientWidgetDto>;
'total'?: number;
}> {
    return this.clientWidgetControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganClientWidgetDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganClientWidgetDto>;
'total'?: number;
} => r.body)
    );
  }

}
