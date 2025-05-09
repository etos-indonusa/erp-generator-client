/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsTechLogEngineCheckReportDto } from '../../models/amims-tech-log-engine-check-report-dto';

export interface TechLogEngineCheckReportControllerFindOne$Params {
  id: string;
}

export function techLogEngineCheckReportControllerFindOne(http: HttpClient, rootUrl: string, params: TechLogEngineCheckReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsTechLogEngineCheckReportDto;
}>> {
  const rb = new RequestBuilder(rootUrl, techLogEngineCheckReportControllerFindOne.PATH, 'get');
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
      'data'?: AmimsTechLogEngineCheckReportDto;
      }>;
    })
  );
}

techLogEngineCheckReportControllerFindOne.PATH = '/amims/tech_log_engine_check/tech_log_engine_check_report/{id}';
