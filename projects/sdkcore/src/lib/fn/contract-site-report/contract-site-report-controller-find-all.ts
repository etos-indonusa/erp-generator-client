/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
import { PelangganContractSiteReportDto } from '../../models/pelanggan-contract-site-report-dto';

export interface ContractSiteReportControllerFindAll$Params {
      body: BaseQueryDtoSmart
}

export function contractSiteReportControllerFindAll(http: HttpClient, rootUrl: string, params: ContractSiteReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganContractSiteReportDto>;
'total'?: number;
}>> {
  const rb = new RequestBuilder(rootUrl, contractSiteReportControllerFindAll.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      'code'?: number;
      'pesan'?: string;
      'data'?: Array<PelangganContractSiteReportDto>;
      'total'?: number;
      }>;
    })
  );
}

contractSiteReportControllerFindAll.PATH = '/auth/contract_site/contract_site_report/list';
