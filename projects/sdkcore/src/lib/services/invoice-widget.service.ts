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

import { invoiceWidgetControllerFindAll } from '../fn/invoice-widget/invoice-widget-controller-find-all';
import { InvoiceWidgetControllerFindAll$Params } from '../fn/invoice-widget/invoice-widget-controller-find-all';
import { PelangganInvoiceWidgetDto } from '../models/pelanggan-invoice-widget-dto';

@Injectable({ providedIn: 'root' })
export class InvoiceWidgetService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `invoiceWidgetControllerFindAll()` */
  static readonly InvoiceWidgetControllerFindAllPath = '/auth/invoice/invoice_widget';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `invoiceWidgetControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  invoiceWidgetControllerFindAll$Response(params: InvoiceWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganInvoiceWidgetDto>;
'total'?: number;
}>> {
    return invoiceWidgetControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `invoiceWidgetControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  invoiceWidgetControllerFindAll(params: InvoiceWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganInvoiceWidgetDto>;
'total'?: number;
}> {
    return this.invoiceWidgetControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganInvoiceWidgetDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganInvoiceWidgetDto>;
'total'?: number;
} => r.body)
    );
  }

}
