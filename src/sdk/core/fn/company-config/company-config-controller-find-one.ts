/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CompanyConfigDto } from '../../models/company-config-dto';

export interface CompanyConfigControllerFindOne$Params {
  id: string;
}

export function companyConfigControllerFindOne(http: HttpClient, rootUrl: string, params: CompanyConfigControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: CompanyConfigDto;
}>> {
  const rb = new RequestBuilder(rootUrl, companyConfigControllerFindOne.PATH, 'get');
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
      'data'?: CompanyConfigDto;
      }>;
    })
  );
}

companyConfigControllerFindOne.PATH = '/nonauth/company_config/company_config/{id}';
