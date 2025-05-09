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

import { AmimsTdTypeReportDto } from '../models/amims-td-type-report-dto';
import { tdTypeReportControllerFindAll } from '../fn/td-type-report/td-type-report-controller-find-all';
import { TdTypeReportControllerFindAll$Params } from '../fn/td-type-report/td-type-report-controller-find-all';
import { tdTypeReportControllerFindOne } from '../fn/td-type-report/td-type-report-controller-find-one';
import { TdTypeReportControllerFindOne$Params } from '../fn/td-type-report/td-type-report-controller-find-one';

@Injectable({ providedIn: 'root' })
export class TdTypeReportService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `tdTypeReportControllerFindAll()` */
  static readonly TdTypeReportControllerFindAllPath = '/amims/td_type/td_type_report/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tdTypeReportControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tdTypeReportControllerFindAll$Response(params: TdTypeReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsTdTypeReportDto>;
'total'?: number;
}>> {
    return tdTypeReportControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tdTypeReportControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tdTypeReportControllerFindAll(params: TdTypeReportControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsTdTypeReportDto>;
'total'?: number;
}> {
    return this.tdTypeReportControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsTdTypeReportDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsTdTypeReportDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `tdTypeReportControllerFindOne()` */
  static readonly TdTypeReportControllerFindOnePath = '/amims/td_type/td_type_report/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tdTypeReportControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  tdTypeReportControllerFindOne$Response(params: TdTypeReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsTdTypeReportDto;
}>> {
    return tdTypeReportControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tdTypeReportControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tdTypeReportControllerFindOne(params: TdTypeReportControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsTdTypeReportDto;
}> {
    return this.tdTypeReportControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsTdTypeReportDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsTdTypeReportDto;
} => r.body)
    );
  }

}
