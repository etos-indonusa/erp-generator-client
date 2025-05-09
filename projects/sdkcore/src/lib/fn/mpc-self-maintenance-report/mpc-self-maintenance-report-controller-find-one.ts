/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsMpcSelfMaintenanceReportDto } from '../../models/amims-mpc-self-maintenance-report-dto';

export interface MpcSelfMaintenanceReportControllerFindOne$Params {
  id: string;
}

export function mpcSelfMaintenanceReportControllerFindOne(http: HttpClient, rootUrl: string, params: MpcSelfMaintenanceReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcSelfMaintenanceReportDto;
}>> {
  const rb = new RequestBuilder(rootUrl, mpcSelfMaintenanceReportControllerFindOne.PATH, 'get');
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
      'data'?: AmimsMpcSelfMaintenanceReportDto;
      }>;
    })
  );
}

mpcSelfMaintenanceReportControllerFindOne.PATH = '/amims/mpc_self_maintenance/mpc_self_maintenance_report/{id}';
