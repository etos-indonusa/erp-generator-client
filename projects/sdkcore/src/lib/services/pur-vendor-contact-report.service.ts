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

import { AmimsPurVendorContactReportDto } from '../models/amims-pur-vendor-contact-report-dto';
import { purVendorContactReportControllerFindAll } from '../fn/pur-vendor-contact-report/pur-vendor-contact-report-controller-find-all';
import { PurVendorContactReportControllerFindAll$Params } from '../fn/pur-vendor-contact-report/pur-vendor-contact-report-controller-find-all';
import { purVendorContactReportControllerFindOne } from '../fn/pur-vendor-contact-report/pur-vendor-contact-report-controller-find-one';
import { PurVendorContactReportControllerFindOne$Params } from '../fn/pur-vendor-contact-report/pur-vendor-contact-report-controller-find-one';

@Injectable({ providedIn: 'root' })
export class PurVendorContactReportService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `purVendorContactReportControllerFindAll()` */
  static readonly PurVendorContactReportControllerFindAllPath = '/amims/pur_vendor_contact/pur_vendor_contact_report/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `purVendorContactReportControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  purVendorContactReportControllerFindAll$Response(params: PurVendorContactReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPurVendorContactReportDto>;
'total'?: number;
}>> {
    return purVendorContactReportControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `purVendorContactReportControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  purVendorContactReportControllerFindAll(params: PurVendorContactReportControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPurVendorContactReportDto>;
'total'?: number;
}> {
    return this.purVendorContactReportControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPurVendorContactReportDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPurVendorContactReportDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `purVendorContactReportControllerFindOne()` */
  static readonly PurVendorContactReportControllerFindOnePath = '/amims/pur_vendor_contact/pur_vendor_contact_report/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `purVendorContactReportControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  purVendorContactReportControllerFindOne$Response(params: PurVendorContactReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPurVendorContactReportDto;
}>> {
    return purVendorContactReportControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `purVendorContactReportControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  purVendorContactReportControllerFindOne(params: PurVendorContactReportControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPurVendorContactReportDto;
}> {
    return this.purVendorContactReportControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPurVendorContactReportDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsPurVendorContactReportDto;
} => r.body)
    );
  }

}
