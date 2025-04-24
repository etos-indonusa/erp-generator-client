import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsDocumentNumberingDto } from '../../models/tools-document-numbering-dto';
export interface DocumentNumberingControllerRemove$Params {
    id: string;
}
export declare function documentNumberingControllerRemove(http: HttpClient, rootUrl: string, params: DocumentNumberingControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsDocumentNumberingDto;
}>>;
export declare namespace documentNumberingControllerRemove {
    var PATH: string;
}
