/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsTechLogEngineCheckDto } from '../../models/amims-tech-log-engine-check-dto';

export interface TechLogEngineCheckControllerUpdate$Params {
  id: string;
      body: AmimsTechLogEngineCheckDto
}

export function techLogEngineCheckControllerUpdate(http: HttpClient, rootUrl: string, params: TechLogEngineCheckControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsTechLogEngineCheckDto;
}>> {
  const rb = new RequestBuilder(rootUrl, techLogEngineCheckControllerUpdate.PATH, 'put');
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
      'data'?: AmimsTechLogEngineCheckDto;
      }>;
    })
  );
}

techLogEngineCheckControllerUpdate.PATH = '/amims/tech_log_engine_check/tech_log_engine_check/{id}';
