/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsDoctypeDto } from '../../models/amims-doctype-dto';

export interface DoctypeControllerCreate$Params {
      body: AmimsDoctypeDto
}

export function doctypeControllerCreate(http: HttpClient, rootUrl: string, params: DoctypeControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsDoctypeDto;
}>> {
  const rb = new RequestBuilder(rootUrl, doctypeControllerCreate.PATH, 'post');
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
      'data'?: AmimsDoctypeDto;
      }>;
    })
  );
}

doctypeControllerCreate.PATH = '/amims/doctype/doctype';
