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

import { AmimsMpcPiroReportDto } from '../models/amims-mpc-piro-report-dto';
import { mpcPiroReportControllerFindAll } from '../fn/mpc-piro-report/mpc-piro-report-controller-find-all';
import { MpcPiroReportControllerFindAll$Params } from '../fn/mpc-piro-report/mpc-piro-report-controller-find-all';
import { mpcPiroReportControllerFindOne } from '../fn/mpc-piro-report/mpc-piro-report-controller-find-one';
import { MpcPiroReportControllerFindOne$Params } from '../fn/mpc-piro-report/mpc-piro-report-controller-find-one';

@Injectable({ providedIn: 'root' })
export class MpcPiroReportService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `mpcPiroReportControllerFindAll()` */
  static readonly MpcPiroReportControllerFindAllPath = '/amims/mpc_piro/mpc_piro_report/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `mpcPiroReportControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  mpcPiroReportControllerFindAll$Response(params: MpcPiroReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsMpcPiroReportDto>;
'total'?: number;
}>> {
    return mpcPiroReportControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `mpcPiroReportControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  mpcPiroReportControllerFindAll(params: MpcPiroReportControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsMpcPiroReportDto>;
'total'?: number;
}> {
    return this.mpcPiroReportControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsMpcPiroReportDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsMpcPiroReportDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `mpcPiroReportControllerFindOne()` */
  static readonly MpcPiroReportControllerFindOnePath = '/amims/mpc_piro/mpc_piro_report/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `mpcPiroReportControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  mpcPiroReportControllerFindOne$Response(params: MpcPiroReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcPiroReportDto;
}>> {
    return mpcPiroReportControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `mpcPiroReportControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  mpcPiroReportControllerFindOne(params: MpcPiroReportControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcPiroReportDto;
}> {
    return this.mpcPiroReportControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcPiroReportDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcPiroReportDto;
} => r.body)
    );
  }

}
