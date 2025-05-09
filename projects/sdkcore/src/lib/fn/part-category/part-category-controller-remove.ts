/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsPartCategoryDto } from '../../models/amims-part-category-dto';

export interface PartCategoryControllerRemove$Params {
  id: string;
}

export function partCategoryControllerRemove(http: HttpClient, rootUrl: string, params: PartCategoryControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPartCategoryDto;
}>> {
  const rb = new RequestBuilder(rootUrl, partCategoryControllerRemove.PATH, 'delete');
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
      'data'?: AmimsPartCategoryDto;
      }>;
    })
  );
}

partCategoryControllerRemove.PATH = '/amims/part_category/part_category/{id}';
