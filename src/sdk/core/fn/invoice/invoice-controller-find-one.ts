/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InvoiceDto } from '../../models/invoice-dto';

export interface InvoiceControllerFindOne$Params {
  id: string;
}

export function invoiceControllerFindOne(http: HttpClient, rootUrl: string, params: InvoiceControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: InvoiceDto;
}>> {
  const rb = new RequestBuilder(rootUrl, invoiceControllerFindOne.PATH, 'get');
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
      'data'?: InvoiceDto;
      }>;
    })
  );
}

invoiceControllerFindOne.PATH = '/nonauth/invoice/invoice/{id}';
