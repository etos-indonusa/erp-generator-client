/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ToolsCustomFieldGroupDto } from '../../models/tools-custom-field-group-dto';

export interface CustomFieldGroupControllerUpdate$Params {
  id: string;
      body: ToolsCustomFieldGroupDto
}

export function customFieldGroupControllerUpdate(http: HttpClient, rootUrl: string, params: CustomFieldGroupControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: ToolsCustomFieldGroupDto;
}>> {
  const rb = new RequestBuilder(rootUrl, customFieldGroupControllerUpdate.PATH, 'put');
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
      'data'?: ToolsCustomFieldGroupDto;
      }>;
    })
  );
}

customFieldGroupControllerUpdate.PATH = '/auth/custom_field_group/custom_field_group/{id}';
