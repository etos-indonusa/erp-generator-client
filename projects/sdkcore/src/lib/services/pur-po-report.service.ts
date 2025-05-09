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

import { AmimsPurPoReportDto } from '../models/amims-pur-po-report-dto';
import { purPoReportControllerFindAll } from '../fn/pur-po-report/pur-po-report-controller-find-all';
import { PurPoReportControllerFindAll$Params } from '../fn/pur-po-report/pur-po-report-controller-find-all';
import { purPoReportControllerFindOne } from '../fn/pur-po-report/pur-po-report-controller-find-one';
import { PurPoReportControllerFindOne$Params } from '../fn/pur-po-report/pur-po-report-controller-find-one';

@Injectable({ providedIn: 'root' })
export class PurPoReportService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `purPoReportControllerFindAll()` */
  static readonly PurPoReportControllerFindAllPath = '/amims/pur_po/pur_po_report/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `purPoReportControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  purPoReportControllerFindAll$Response(params: PurPoReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPurPoReportDto>;
'total'?: number;
}>> {
    return purPoReportControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `purPoReportControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  purPoReportControllerFindAll(params: PurPoReportControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPurPoReportDto>;
'total'?: number;
}> {
    return this.purPoReportControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPurPoReportDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPurPoReportDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `purPoReportControllerFindOne()` */
  static readonly PurPoReportControllerFindOnePath = '/amims/pur_po/pur_po_report/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `purPoReportControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  purPoReportControllerFindOne$Response(params: PurPoReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPurPoReportDto;
}>> {
    return purPoReportControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `purPoReportControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  purPoReportControllerFindOne(params: PurPoReportControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPurPoReportDto;
}> {
    return this.purPoReportControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPurPoReportDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsPurPoReportDto;
} => r.body)
    );
  }

}
