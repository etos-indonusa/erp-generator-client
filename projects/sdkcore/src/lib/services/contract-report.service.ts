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

import { contractReportControllerFindAll } from '../fn/contract-report/contract-report-controller-find-all';
import { ContractReportControllerFindAll$Params } from '../fn/contract-report/contract-report-controller-find-all';
import { contractReportControllerFindOne } from '../fn/contract-report/contract-report-controller-find-one';
import { ContractReportControllerFindOne$Params } from '../fn/contract-report/contract-report-controller-find-one';
import { PelangganContractReportDto } from '../models/pelanggan-contract-report-dto';

@Injectable({ providedIn: 'root' })
export class ContractReportService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `contractReportControllerFindAll()` */
  static readonly ContractReportControllerFindAllPath = '/auth/contract/contract_report/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractReportControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractReportControllerFindAll$Response(params: ContractReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganContractReportDto>;
'total'?: number;
}>> {
    return contractReportControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractReportControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractReportControllerFindAll(params: ContractReportControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganContractReportDto>;
'total'?: number;
}> {
    return this.contractReportControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganContractReportDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganContractReportDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `contractReportControllerFindOne()` */
  static readonly ContractReportControllerFindOnePath = '/auth/contract/contract_report/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractReportControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractReportControllerFindOne$Response(params: ContractReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractReportDto;
}>> {
    return contractReportControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractReportControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractReportControllerFindOne(params: ContractReportControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractReportDto;
}> {
    return this.contractReportControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractReportDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractReportDto;
} => r.body)
    );
  }

}
