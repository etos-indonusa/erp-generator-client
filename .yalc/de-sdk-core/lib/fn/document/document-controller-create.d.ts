import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { DocumentDocumentDto } from '../../models/document-document-dto';
export interface DocumentControllerCreate$Params {
    body: DocumentDocumentDto;
}
export declare function documentControllerCreate(http: HttpClient, rootUrl: string, params: DocumentControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: DocumentDocumentDto;
}>>;
export declare namespace documentControllerCreate {
    var PATH: string;
}
