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

import { clientReportControllerFindAll } from '../fn/client-report/client-report-controller-find-all';
import { ClientReportControllerFindAll$Params } from '../fn/client-report/client-report-controller-find-all';
import { clientReportControllerFindOne } from '../fn/client-report/client-report-controller-find-one';
import { ClientReportControllerFindOne$Params } from '../fn/client-report/client-report-controller-find-one';
import { PelangganClientReportDto } from '../models/pelanggan-client-report-dto';

@Injectable({ providedIn: 'root' })
export class ClientReportService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `clientReportControllerFindAll()` */
  static readonly ClientReportControllerFindAllPath = '/client_report/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clientReportControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  clientReportControllerFindAll$Response(params: ClientReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganClientReportDto>;
'total'?: number;
}>> {
    return clientReportControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `clientReportControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  clientReportControllerFindAll(params: ClientReportControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganClientReportDto>;
'total'?: number;
}> {
    return this.clientReportControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganClientReportDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganClientReportDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `clientReportControllerFindOne()` */
  static readonly ClientReportControllerFindOnePath = '/client_report/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clientReportControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientReportControllerFindOne$Response(params: ClientReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganClientReportDto;
}>> {
    return clientReportControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `clientReportControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientReportControllerFindOne(params: ClientReportControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganClientReportDto;
}> {
    return this.clientReportControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganClientReportDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: PelangganClientReportDto;
} => r.body)
    );
  }

}
