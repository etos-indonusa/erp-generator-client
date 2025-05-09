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

import { AmimsPurVendorContactWidgetDto } from '../models/amims-pur-vendor-contact-widget-dto';
import { purVendorContactWidgetControllerFindAll } from '../fn/pur-vendor-contact-widget/pur-vendor-contact-widget-controller-find-all';
import { PurVendorContactWidgetControllerFindAll$Params } from '../fn/pur-vendor-contact-widget/pur-vendor-contact-widget-controller-find-all';

@Injectable({ providedIn: 'root' })
export class PurVendorContactWidgetService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `purVendorContactWidgetControllerFindAll()` */
  static readonly PurVendorContactWidgetControllerFindAllPath = '/amims/pur_vendor_contact/pur_vendor_contact_widget';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `purVendorContactWidgetControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  purVendorContactWidgetControllerFindAll$Response(params: PurVendorContactWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPurVendorContactWidgetDto>;
'total'?: number;
}>> {
    return purVendorContactWidgetControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `purVendorContactWidgetControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  purVendorContactWidgetControllerFindAll(params: PurVendorContactWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPurVendorContactWidgetDto>;
'total'?: number;
}> {
    return this.purVendorContactWidgetControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPurVendorContactWidgetDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPurVendorContactWidgetDto>;
'total'?: number;
} => r.body)
    );
  }

}
