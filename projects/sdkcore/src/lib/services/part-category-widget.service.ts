/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AmimsPartCategoryWidgetDto } from '../models/amims-part-category-widget-dto';
import { partCategoryWidgetControllerFindAll } from '../fn/part-category-widget/part-category-widget-controller-find-all';
import { PartCategoryWidgetControllerFindAll$Params } from '../fn/part-category-widget/part-category-widget-controller-find-all';

@Injectable({ providedIn: 'root' })
export class PartCategoryWidgetService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `partCategoryWidgetControllerFindAll()` */
  static readonly PartCategoryWidgetControllerFindAllPath = '/amims/part_category/part_category_widget';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `partCategoryWidgetControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  partCategoryWidgetControllerFindAll$Response(params: PartCategoryWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPartCategoryWidgetDto>;
'total'?: number;
}>> {
    return partCategoryWidgetControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `partCategoryWidgetControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  partCategoryWidgetControllerFindAll(params: PartCategoryWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPartCategoryWidgetDto>;
'total'?: number;
}> {
    return this.partCategoryWidgetControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPartCategoryWidgetDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPartCategoryWidgetDto>;
'total'?: number;
} => r.body)
    );
  }

}
