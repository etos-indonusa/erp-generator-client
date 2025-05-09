/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsQaRpdDto } from '../../models/amims-qa-rpd-dto';

export interface QaRpdControllerRemove$Params {
  id: string;
}

export function qaRpdControllerRemove(http: HttpClient, rootUrl: string, params: QaRpdControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsQaRpdDto;
}>> {
  const rb = new RequestBuilder(rootUrl, qaRpdControllerRemove.PATH, 'delete');
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
      'data'?: AmimsQaRpdDto;
      }>;
    })
  );
}

qaRpdControllerRemove.PATH = '/amims/qa_rpd/qa_rpd/{id}';
