/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomFieldValueDto } from '../../models/custom-field-value-dto';

export interface CustomFieldValueControllerFindOne$Params {
  id: string;
}

export function customFieldValueControllerFindOne(http: HttpClient, rootUrl: string, params: CustomFieldValueControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: CustomFieldValueDto;
}>> {
  const rb = new RequestBuilder(rootUrl, customFieldValueControllerFindOne.PATH, 'get');
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
      'data'?: CustomFieldValueDto;
      }>;
    })
  );
}

customFieldValueControllerFindOne.PATH = '/nonauth/custom_field_value/custom_field_value/{id}';
