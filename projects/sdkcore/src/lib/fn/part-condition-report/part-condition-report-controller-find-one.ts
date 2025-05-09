/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsPartConditionReportDto } from '../../models/amims-part-condition-report-dto';

export interface PartConditionReportControllerFindOne$Params {
  id: string;
}

export function partConditionReportControllerFindOne(http: HttpClient, rootUrl: string, params: PartConditionReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPartConditionReportDto;
}>> {
  const rb = new RequestBuilder(rootUrl, partConditionReportControllerFindOne.PATH, 'get');
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
      'data'?: AmimsPartConditionReportDto;
      }>;
    })
  );
}

partConditionReportControllerFindOne.PATH = '/amims/part_condition/part_condition_report/{id}';
