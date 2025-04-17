/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AclModuleDto } from '../../models/acl-module-dto';

export interface ModuleControllerCreate$Params {
      body: AclModuleDto
}

export function moduleControllerCreate(http: HttpClient, rootUrl: string, params: ModuleControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AclModuleDto;
}>> {
  const rb = new RequestBuilder(rootUrl, moduleControllerCreate.PATH, 'post');
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
      'data'?: AclModuleDto;
      }>;
    })
  );
}

moduleControllerCreate.PATH = '/auth/module/module';
