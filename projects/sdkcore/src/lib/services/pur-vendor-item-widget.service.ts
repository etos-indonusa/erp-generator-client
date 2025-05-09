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

import { AmimsPurVendorItemWidgetDto } from '../models/amims-pur-vendor-item-widget-dto';
import { purVendorItemWidgetControllerFindAll } from '../fn/pur-vendor-item-widget/pur-vendor-item-widget-controller-find-all';
import { PurVendorItemWidgetControllerFindAll$Params } from '../fn/pur-vendor-item-widget/pur-vendor-item-widget-controller-find-all';

@Injectable({ providedIn: 'root' })
export class PurVendorItemWidgetService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `purVendorItemWidgetControllerFindAll()` */
  static readonly PurVendorItemWidgetControllerFindAllPath = '/amims/pur_vendor_item/pur_vendor_item_widget';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `purVendorItemWidgetControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  purVendorItemWidgetControllerFindAll$Response(params: PurVendorItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPurVendorItemWidgetDto>;
'total'?: number;
}>> {
    return purVendorItemWidgetControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `purVendorItemWidgetControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  purVendorItemWidgetControllerFindAll(params: PurVendorItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPurVendorItemWidgetDto>;
'total'?: number;
}> {
    return this.purVendorItemWidgetControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPurVendorItemWidgetDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPurVendorItemWidgetDto>;
'total'?: number;
} => r.body)
    );
  }

}
