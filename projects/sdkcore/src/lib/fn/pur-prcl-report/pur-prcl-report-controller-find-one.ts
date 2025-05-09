/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsPurPrclReportDto } from '../../models/amims-pur-prcl-report-dto';

export interface PurPrclReportControllerFindOne$Params {
  id: string;
}

export function purPrclReportControllerFindOne(http: HttpClient, rootUrl: string, params: PurPrclReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPurPrclReportDto;
}>> {
  const rb = new RequestBuilder(rootUrl, purPrclReportControllerFindOne.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      'code'?: number;
      'pesan'?: string;
      'data'?: AmimsPurPrclReportDto;
      }>;
    })
  );
}

purPrclReportControllerFindOne.PATH = '/amims/pur_prcl/pur_prcl_report/{id}';
