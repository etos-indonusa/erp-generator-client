/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
import { PelangganClientReportDto } from '../../models/pelanggan-client-report-dto';

export interface ClientReportControllerFindAll$Params {
      body: BaseQueryDtoSmart
}

export function clientReportControllerFindAll(http: HttpClient, rootUrl: string, params: ClientReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganClientReportDto>;
'total'?: number;
}>> {
  const rb = new RequestBuilder(rootUrl, clientReportControllerFindAll.PATH, 'post');
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
      'data'?: Array<PelangganClientReportDto>;
      'total'?: number;
      }>;
    })
  );
}

clientReportControllerFindAll.PATH = '/auth/client/client_report/list';
