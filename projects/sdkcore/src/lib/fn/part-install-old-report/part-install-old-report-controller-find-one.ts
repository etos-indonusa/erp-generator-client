/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsPartInstallOldReportDto } from '../../models/amims-part-install-old-report-dto';

export interface PartInstallOldReportControllerFindOne$Params {
  id: string;
}

export function partInstallOldReportControllerFindOne(http: HttpClient, rootUrl: string, params: PartInstallOldReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPartInstallOldReportDto;
}>> {
  const rb = new RequestBuilder(rootUrl, partInstallOldReportControllerFindOne.PATH, 'get');
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
      'data'?: AmimsPartInstallOldReportDto;
      }>;
    })
  );
}

partInstallOldReportControllerFindOne.PATH = '/amims/part_install_old/part_install_old_report/{id}';
