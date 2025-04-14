/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AclUserTokensDto } from '../../models/acl-user-tokens-dto';

export interface UserTokensControllerRemove$Params {
  id: string;
}

export function userTokensControllerRemove(http: HttpClient, rootUrl: string, params: UserTokensControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AclUserTokensDto;
}>> {
  const rb = new RequestBuilder(rootUrl, userTokensControllerRemove.PATH, 'delete');
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
      'data'?: AclUserTokensDto;
      }>;
    })
  );
}

userTokensControllerRemove.PATH = '/auth/user_tokens/user_tokens/{id}';
