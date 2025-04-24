import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsDocumentNumberingDto } from '../../models/tools-document-numbering-dto';
export interface DocumentNumberingControllerFindOne$Params {
    id: string;
}
export declare function documentNumberingControllerFindOne(http: HttpClient, rootUrl: string, params: DocumentNumberingControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsDocumentNumberingDto;
}>>;
export declare namespace documentNumberingControllerFindOne {
    var PATH: string;
}
