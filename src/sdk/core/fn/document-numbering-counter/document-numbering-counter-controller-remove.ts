/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ToolsDocumentNumberingCounterDto } from '../../models/tools-document-numbering-counter-dto';

export interface DocumentNumberingCounterControllerRemove$Params {
  id: string;
}

export function documentNumberingCounterControllerRemove(http: HttpClient, rootUrl: string, params: DocumentNumberingCounterControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: ToolsDocumentNumberingCounterDto;
}>> {
  const rb = new RequestBuilder(rootUrl, documentNumberingCounterControllerRemove.PATH, 'delete');
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
      'data'?: ToolsDocumentNumberingCounterDto;
      }>;
    })
  );
}

documentNumberingCounterControllerRemove.PATH = '/auth/document_numbering_counter/document_numbering_counter/{id}';
