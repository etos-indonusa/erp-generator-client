/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BaseWidgetQueryDto } from '../../models/base-widget-query-dto';
import { Object } from '../../models/object';
import { PelangganClientWidgetDto } from '../../models/pelanggan-client-widget-dto';
import { SelectFieldDto } from '../../models/select-field-dto';

export interface ClientWidgetControllerFindAll$Params {

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

export function clientWidgetControllerFindAll(http: HttpClient, rootUrl: string, params: ClientWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganClientWidgetDto>;
'total'?: number;
}>> {
  const rb = new RequestBuilder(rootUrl, clientWidgetControllerFindAll.PATH, 'post');
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
      'data'?: Array<PelangganClientWidgetDto>;
      'total'?: number;
      }>;
    })
  );
}

clientWidgetControllerFindAll.PATH = '/client_widget';
