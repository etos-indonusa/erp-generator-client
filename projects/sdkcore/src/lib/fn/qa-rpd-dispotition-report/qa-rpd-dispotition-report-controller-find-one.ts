/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsQaRpdDispotitionReportDto } from '../../models/amims-qa-rpd-dispotition-report-dto';

export interface QaRpdDispotitionReportControllerFindOne$Params {
  id: string;
}

export function qaRpdDispotitionReportControllerFindOne(http: HttpClient, rootUrl: string, params: QaRpdDispotitionReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsQaRpdDispotitionReportDto;
}>> {
  const rb = new RequestBuilder(rootUrl, qaRpdDispotitionReportControllerFindOne.PATH, 'get');
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
      'data'?: AmimsQaRpdDispotitionReportDto;
      }>;
    })
  );
}

qaRpdDispotitionReportControllerFindOne.PATH = '/amims/qa_rpd_dispotition/qa_rpd_dispotition_report/{id}';
