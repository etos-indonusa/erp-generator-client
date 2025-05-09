/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsPurGrnDto } from '../../models/amims-pur-grn-dto';

export interface PurGrnControllerUpdate$Params {
  id: string;
      body: AmimsPurGrnDto
}

export function purGrnControllerUpdate(http: HttpClient, rootUrl: string, params: PurGrnControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPurGrnDto;
}>> {
  const rb = new RequestBuilder(rootUrl, purGrnControllerUpdate.PATH, 'put');
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
      'data'?: AmimsPurGrnDto;
      }>;
    })
  );
}

purGrnControllerUpdate.PATH = '/amims/pur_grn/pur_grn/{id}';
