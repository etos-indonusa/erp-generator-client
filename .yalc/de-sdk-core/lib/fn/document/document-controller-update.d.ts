import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { DocumentDocumentDto } from '../../models/document-document-dto';
export interface DocumentControllerUpdate$Params {
    id: string;
    body: DocumentDocumentDto;
}
export declare function documentControllerUpdate(http: HttpClient, rootUrl: string, params: DocumentControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: DocumentDocumentDto;
}>>;
export declare namespace documentControllerUpdate {
    var PATH: string;
}
