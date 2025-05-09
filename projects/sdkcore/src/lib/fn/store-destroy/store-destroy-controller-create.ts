/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsStoreDestroyDto } from '../../models/amims-store-destroy-dto';

export interface StoreDestroyControllerCreate$Params {
      body: AmimsStoreDestroyDto
}

export function storeDestroyControllerCreate(http: HttpClient, rootUrl: string, params: StoreDestroyControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsStoreDestroyDto;
}>> {
  const rb = new RequestBuilder(rootUrl, storeDestroyControllerCreate.PATH, 'post');
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
      'data'?: AmimsStoreDestroyDto;
      }>;
    })
  );
}

storeDestroyControllerCreate.PATH = '/amims/store_destroy/store_destroy';
