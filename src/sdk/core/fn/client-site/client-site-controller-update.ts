/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ClientSiteDto } from '../../models/client-site-dto';

export interface ClientSiteControllerUpdate$Params {
  id: string;
      body: ClientSiteDto
}

export function clientSiteControllerUpdate(http: HttpClient, rootUrl: string, params: ClientSiteControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: ClientSiteDto;
}>> {
  const rb = new RequestBuilder(rootUrl, clientSiteControllerUpdate.PATH, 'put');
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
      'data'?: ClientSiteDto;
      }>;
    })
  );
}

clientSiteControllerUpdate.PATH = '/nonauth/client_site/client_site/{id}';
