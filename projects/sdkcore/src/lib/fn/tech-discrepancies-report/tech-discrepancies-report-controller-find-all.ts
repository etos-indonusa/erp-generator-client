/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsTechDiscrepanciesReportDto } from '../../models/amims-tech-discrepancies-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';

export interface TechDiscrepanciesReportControllerFindAll$Params {
      body: BaseQueryDtoSmart
}

export function techDiscrepanciesReportControllerFindAll(http: HttpClient, rootUrl: string, params: TechDiscrepanciesReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsTechDiscrepanciesReportDto>;
'total'?: number;
}>> {
  const rb = new RequestBuilder(rootUrl, techDiscrepanciesReportControllerFindAll.PATH, 'post');
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
      'data'?: Array<AmimsTechDiscrepanciesReportDto>;
      'total'?: number;
      }>;
    })
  );
}

techDiscrepanciesReportControllerFindAll.PATH = '/amims/tech_discrepancies/tech_discrepancies_report/list';
