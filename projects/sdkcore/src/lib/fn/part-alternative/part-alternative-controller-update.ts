/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsPartAlternativeDto } from '../../models/amims-part-alternative-dto';

export interface PartAlternativeControllerUpdate$Params {
  id: string;
      body: AmimsPartAlternativeDto
}

export function partAlternativeControllerUpdate(http: HttpClient, rootUrl: string, params: PartAlternativeControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPartAlternativeDto;
}>> {
  const rb = new RequestBuilder(rootUrl, partAlternativeControllerUpdate.PATH, 'put');
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
      'data'?: AmimsPartAlternativeDto;
      }>;
    })
  );
}

partAlternativeControllerUpdate.PATH = '/amims/part_alternative/part_alternative/{id}';
