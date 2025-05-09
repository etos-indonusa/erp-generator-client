/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsTechLogDto } from '../../models/amims-tech-log-dto';

export interface TechLogControllerUpdate$Params {
  id: string;
      body: AmimsTechLogDto
}

export function techLogControllerUpdate(http: HttpClient, rootUrl: string, params: TechLogControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsTechLogDto;
}>> {
  const rb = new RequestBuilder(rootUrl, techLogControllerUpdate.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
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
      'data'?: AmimsTechLogDto;
      }>;
    })
  );
}

techLogControllerUpdate.PATH = '/amims/tech_log/tech_log/{id}';
