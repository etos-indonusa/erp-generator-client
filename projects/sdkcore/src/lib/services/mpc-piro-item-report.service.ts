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

import { AmimsMpcPiroItemReportDto } from '../models/amims-mpc-piro-item-report-dto';
import { mpcPiroItemReportControllerFindAll } from '../fn/mpc-piro-item-report/mpc-piro-item-report-controller-find-all';
import { MpcPiroItemReportControllerFindAll$Params } from '../fn/mpc-piro-item-report/mpc-piro-item-report-controller-find-all';
import { mpcPiroItemReportControllerFindOne } from '../fn/mpc-piro-item-report/mpc-piro-item-report-controller-find-one';
import { MpcPiroItemReportControllerFindOne$Params } from '../fn/mpc-piro-item-report/mpc-piro-item-report-controller-find-one';

@Injectable({ providedIn: 'root' })
export class MpcPiroItemReportService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `mpcPiroItemReportControllerFindAll()` */
  static readonly MpcPiroItemReportControllerFindAllPath = '/amims/mpc_piro_item/mpc_piro_item_report/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `mpcPiroItemReportControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  mpcPiroItemReportControllerFindAll$Response(params: MpcPiroItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsMpcPiroItemReportDto>;
'total'?: number;
}>> {
    return mpcPiroItemReportControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `mpcPiroItemReportControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  mpcPiroItemReportControllerFindAll(params: MpcPiroItemReportControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsMpcPiroItemReportDto>;
'total'?: number;
}> {
    return this.mpcPiroItemReportControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsMpcPiroItemReportDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsMpcPiroItemReportDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `mpcPiroItemReportControllerFindOne()` */
  static readonly MpcPiroItemReportControllerFindOnePath = '/amims/mpc_piro_item/mpc_piro_item_report/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `mpcPiroItemReportControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  mpcPiroItemReportControllerFindOne$Response(params: MpcPiroItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcPiroItemReportDto;
}>> {
    return mpcPiroItemReportControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `mpcPiroItemReportControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  mpcPiroItemReportControllerFindOne(params: MpcPiroItemReportControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcPiroItemReportDto;
}> {
    return this.mpcPiroItemReportControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcPiroItemReportDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcPiroItemReportDto;
} => r.body)
    );
  }

}
