/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsInternalGrnItemDto } from '../../models/amims-internal-grn-item-dto';

export interface InternalGrnItemControllerCreate$Params {
      body: AmimsInternalGrnItemDto
}

export function internalGrnItemControllerCreate(http: HttpClient, rootUrl: string, params: InternalGrnItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsInternalGrnItemDto;
}>> {
  const rb = new RequestBuilder(rootUrl, internalGrnItemControllerCreate.PATH, 'post');
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
      'data'?: AmimsInternalGrnItemDto;
      }>;
    })
  );
}

internalGrnItemControllerCreate.PATH = '/amims/internal_grn_item/internal_grn_item';
