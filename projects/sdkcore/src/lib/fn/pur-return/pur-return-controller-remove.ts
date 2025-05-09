/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsPurReturnDto } from '../../models/amims-pur-return-dto';

export interface PurReturnControllerRemove$Params {
  id: string;
}

export function purReturnControllerRemove(http: HttpClient, rootUrl: string, params: PurReturnControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPurReturnDto;
}>> {
  const rb = new RequestBuilder(rootUrl, purReturnControllerRemove.PATH, 'delete');
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
      'data'?: AmimsPurReturnDto;
      }>;
    })
  );
}

purReturnControllerRemove.PATH = '/amims/pur_return/pur_return/{id}';
