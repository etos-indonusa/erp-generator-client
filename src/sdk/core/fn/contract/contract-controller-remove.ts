/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PelangganContractDto } from '../../models/pelanggan-contract-dto';

export interface ContractControllerRemove$Params {
  id: string;
}

export function contractControllerRemove(http: HttpClient, rootUrl: string, params: ContractControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractDto;
}>> {
  const rb = new RequestBuilder(rootUrl, contractControllerRemove.PATH, 'delete');
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
      'data'?: PelangganContractDto;
      }>;
    })
  );
}

contractControllerRemove.PATH = '/auth/contract/contract/{id}';
