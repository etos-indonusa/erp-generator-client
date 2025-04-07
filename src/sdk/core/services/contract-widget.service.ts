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

import { contractWidgetControllerFindAll } from '../fn/contract-widget/contract-widget-controller-find-all';
import { ContractWidgetControllerFindAll$Params } from '../fn/contract-widget/contract-widget-controller-find-all';
import { ContractWidgetReportDto } from '../models/contract-widget-report-dto';

@Injectable({ providedIn: 'root' })
export class ContractWidgetService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `contractWidgetControllerFindAll()` */
  static readonly ContractWidgetControllerFindAllPath = '/nonauth/contract/contract_widget';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractWidgetControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractWidgetControllerFindAll$Response(params: ContractWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<ContractWidgetReportDto>;
'total'?: number;
}>> {
    return contractWidgetControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractWidgetControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractWidgetControllerFindAll(params: ContractWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<ContractWidgetReportDto>;
'total'?: number;
}> {
    return this.contractWidgetControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<ContractWidgetReportDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<ContractWidgetReportDto>;
'total'?: number;
} => r.body)
    );
  }

}
