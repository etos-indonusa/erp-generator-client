/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsConditionMonitoringDto } from '../../models/amims-condition-monitoring-dto';

export interface ConditionMonitoringControllerUpdate$Params {
  id: string;
      body: AmimsConditionMonitoringDto
}

export function conditionMonitoringControllerUpdate(http: HttpClient, rootUrl: string, params: ConditionMonitoringControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsConditionMonitoringDto;
}>> {
  const rb = new RequestBuilder(rootUrl, conditionMonitoringControllerUpdate.PATH, 'put');
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
      'data'?: AmimsConditionMonitoringDto;
      }>;
    })
  );
}

conditionMonitoringControllerUpdate.PATH = '/amims/condition_monitoring/condition_monitoring/{id}';
