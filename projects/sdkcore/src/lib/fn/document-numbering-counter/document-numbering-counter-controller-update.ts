/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ToolsDocumentNumberingCounterDto } from '../../models/tools-document-numbering-counter-dto';

export interface DocumentNumberingCounterControllerUpdate$Params {
  id: string;
      body: ToolsDocumentNumberingCounterDto
}

export function documentNumberingCounterControllerUpdate(http: HttpClient, rootUrl: string, params: DocumentNumberingCounterControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: ToolsDocumentNumberingCounterDto;
}>> {
  const rb = new RequestBuilder(rootUrl, documentNumberingCounterControllerUpdate.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
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
      'data'?: ToolsDocumentNumberingCounterDto;
      }>;
    })
  );
}

documentNumberingCounterControllerUpdate.PATH = '/auth/document_numbering_counter/document_numbering_counter/{id}';
