/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsEngineerPrisItemDto } from '../../models/amims-engineer-pris-item-dto';

export interface EngineerPrisItemControllerUpdate$Params {
  id: string;
      body: AmimsEngineerPrisItemDto
}

export function engineerPrisItemControllerUpdate(http: HttpClient, rootUrl: string, params: EngineerPrisItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsEngineerPrisItemDto;
}>> {
  const rb = new RequestBuilder(rootUrl, engineerPrisItemControllerUpdate.PATH, 'put');
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
      'data'?: AmimsEngineerPrisItemDto;
      }>;
    })
  );
}

engineerPrisItemControllerUpdate.PATH = '/amims/engineer_pris_item/engineer_pris_item/{id}';
