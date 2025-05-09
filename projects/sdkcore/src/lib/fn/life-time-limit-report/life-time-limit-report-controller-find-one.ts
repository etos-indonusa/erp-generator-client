/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsLifeTimeLimitReportDto } from '../../models/amims-life-time-limit-report-dto';

export interface LifeTimeLimitReportControllerFindOne$Params {
  id: string;
}

export function lifeTimeLimitReportControllerFindOne(http: HttpClient, rootUrl: string, params: LifeTimeLimitReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLifeTimeLimitReportDto;
}>> {
  const rb = new RequestBuilder(rootUrl, lifeTimeLimitReportControllerFindOne.PATH, 'get');
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
      'data'?: AmimsLifeTimeLimitReportDto;
      }>;
    })
  );
}

lifeTimeLimitReportControllerFindOne.PATH = '/amims/life_time_limit/life_time_limit_report/{id}';
