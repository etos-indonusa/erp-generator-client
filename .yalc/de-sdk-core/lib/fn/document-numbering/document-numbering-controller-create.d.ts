import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsDocumentNumberingDto } from '../../models/tools-document-numbering-dto';
export interface DocumentNumberingControllerCreate$Params {
    body: ToolsDocumentNumberingDto;
}
export declare function documentNumberingControllerCreate(http: HttpClient, rootUrl: string, params: DocumentNumberingControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsDocumentNumberingDto;
}>>;
export declare namespace documentNumberingControllerCreate {
    var PATH: string;
}
