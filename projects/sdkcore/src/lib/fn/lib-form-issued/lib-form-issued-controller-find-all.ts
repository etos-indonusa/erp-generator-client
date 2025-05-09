/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsLibFormIssuedDto } from '../../models/amims-lib-form-issued-dto';

export interface LibFormIssuedControllerFindAll$Params {
  pageIndex?: number;
  pageSize?: number;

/**
 * JSON.stringify({})
 */
  filter?: string;
  sortKey?: string;
  sortValue?: 'asc' | 'desc';

/**
 * Array of searchable fields
 */
  search_field?: Array<string>;
  search_keyword?: string;
}

export function libFormIssuedControllerFindAll(http: HttpClient, rootUrl: string, params?: LibFormIssuedControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsLibFormIssuedDto>;
'total'?: number;
}>> {
  const rb = new RequestBuilder(rootUrl, libFormIssuedControllerFindAll.PATH, 'get');
  if (params) {
    rb.query('pageIndex', params.pageIndex, {});
    rb.query('pageSize', params.pageSize, {});
    rb.query('filter', params.filter, {});
    rb.query('sortKey', params.sortKey, {});
    rb.query('sortValue', params.sortValue, {});
    rb.query('search_field', params.search_field, {});
    rb.query('search_keyword', params.search_keyword, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      'code'?: number;
      'pesan'?: string;
      'data'?: Array<AmimsLibFormIssuedDto>;
      'total'?: number;
      }>;
    })
  );
}

libFormIssuedControllerFindAll.PATH = '/amims/lib_form_issued/lib_form_issued';
