import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { DocumentDocumentDto } from '../../models/document-document-dto';
export interface DocumentControllerFindOne$Params {
    id: string;
}
export declare function documentControllerFindOne(http: HttpClient, rootUrl: string, params: DocumentControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: DocumentDocumentDto;
}>>;
export declare namespace documentControllerFindOne {
    var PATH: string;
}
