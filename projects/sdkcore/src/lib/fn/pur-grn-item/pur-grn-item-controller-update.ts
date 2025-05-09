/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsPurGrnItemDto } from '../../models/amims-pur-grn-item-dto';

export interface PurGrnItemControllerUpdate$Params {
  id: string;
      body: AmimsPurGrnItemDto
}

export function purGrnItemControllerUpdate(http: HttpClient, rootUrl: string, params: PurGrnItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPurGrnItemDto;
}>> {
  const rb = new RequestBuilder(rootUrl, purGrnItemControllerUpdate.PATH, 'put');
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
      'data'?: AmimsPurGrnItemDto;
      }>;
    })
  );
}

purGrnItemControllerUpdate.PATH = '/amims/pur_grn_item/pur_grn_item/{id}';
