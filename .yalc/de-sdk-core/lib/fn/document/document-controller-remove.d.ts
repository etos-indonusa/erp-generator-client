import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { DocumentDocumentDto } from '../../models/document-document-dto';
export interface DocumentControllerRemove$Params {
    id: string;
}
export declare function documentControllerRemove(http: HttpClient, rootUrl: string, params: DocumentControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: DocumentDocumentDto;
}>>;
export declare namespace documentControllerRemove {
    var PATH: string;
}
