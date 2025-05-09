/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsPurReturnItemDto } from '../../models/amims-pur-return-item-dto';

export interface PurReturnItemControllerCreate$Params {
      body: AmimsPurReturnItemDto
}

export function purReturnItemControllerCreate(http: HttpClient, rootUrl: string, params: PurReturnItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPurReturnItemDto;
}>> {
  const rb = new RequestBuilder(rootUrl, purReturnItemControllerCreate.PATH, 'post');
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
      'data'?: AmimsPurReturnItemDto;
      }>;
    })
  );
}

purReturnItemControllerCreate.PATH = '/amims/pur_return_item/pur_return_item';
