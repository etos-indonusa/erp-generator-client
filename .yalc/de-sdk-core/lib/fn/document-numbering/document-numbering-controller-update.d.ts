import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsDocumentNumberingDto } from '../../models/tools-document-numbering-dto';
export interface DocumentNumberingControllerUpdate$Params {
    id: string;
    body: ToolsDocumentNumberingDto;
}
export declare function documentNumberingControllerUpdate(http: HttpClient, rootUrl: string, params: DocumentNumberingControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsDocumentNumberingDto;
}>>;
export declare namespace documentNumberingControllerUpdate {
    var PATH: string;
}
