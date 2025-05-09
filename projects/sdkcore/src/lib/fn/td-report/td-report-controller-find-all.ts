/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsTdReportDto } from '../../models/amims-td-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';

export interface TdReportControllerFindAll$Params {
      body: BaseQueryDtoSmart
}

export function tdReportControllerFindAll(http: HttpClient, rootUrl: string, params: TdReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsTdReportDto>;
'total'?: number;
}>> {
  const rb = new RequestBuilder(rootUrl, tdReportControllerFindAll.PATH, 'post');
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
      'data'?: Array<AmimsTdReportDto>;
      'total'?: number;
      }>;
    })
  );
}

tdReportControllerFindAll.PATH = '/amims/td/td_report/list';
