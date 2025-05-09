/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AmimsPartInstallOldWidgetDto } from '../../models/amims-part-install-old-widget-dto';
import { BaseWidgetQueryDto } from '../../models/base-widget-query-dto';
import { Object } from '../../models/object';
import { SelectFieldDto } from '../../models/select-field-dto';

export interface PartInstallOldWidgetControllerFindAll$Params {

/**
 * Filter object
 */
  filter?: Object;

/**
 * JoinWhere object
 */
  joinWhere?: Object;

/**
 * Select fields with aggregation, e.g. [{ type: "sum", field: "nilai", alias: "totalNilai" }]
 */
  select?: Array<SelectFieldDto>;

/**
 * Fields to group by
 */
  groupBy?: Array<string>;
  sortKey?: string;
  sortValue?: 'ASC' | 'DESC';
      body: BaseWidgetQueryDto
}

export function partInstallOldWidgetControllerFindAll(http: HttpClient, rootUrl: string, params: PartInstallOldWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPartInstallOldWidgetDto>;
'total'?: number;
}>> {
  const rb = new RequestBuilder(rootUrl, partInstallOldWidgetControllerFindAll.PATH, 'post');
  if (params) {
    rb.query('filter', params.filter, {});
    rb.query('joinWhere', params.joinWhere, {});
    rb.query('select', params.select, {});
    rb.query('groupBy', params.groupBy, {});
    rb.query('sortKey', params.sortKey, {});
    rb.query('sortValue', params.sortValue, {});
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
      'data'?: Array<AmimsPartInstallOldWidgetDto>;
      'total'?: number;
      }>;
    })
  );
}

partInstallOldWidgetControllerFindAll.PATH = '/amims/part_install_old/part_install_old_widget';
