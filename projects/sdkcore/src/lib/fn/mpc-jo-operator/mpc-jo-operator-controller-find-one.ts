/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsMpcJoOperatorDto } from '../../models/amims-mpc-jo-operator-dto';

export interface MpcJoOperatorControllerFindOne$Params {
  id: string;
}

export function mpcJoOperatorControllerFindOne(http: HttpClient, rootUrl: string, params: MpcJoOperatorControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcJoOperatorDto;
}>> {
  const rb = new RequestBuilder(rootUrl, mpcJoOperatorControllerFindOne.PATH, 'get');
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
      'data'?: AmimsMpcJoOperatorDto;
      }>;
    })
  );
}

mpcJoOperatorControllerFindOne.PATH = '/amims/mpc_jo_operator/mpc_jo_operator/{id}';
