import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsDocumentNumberingCounterDto } from '../../models/tools-document-numbering-counter-dto';
export interface DocumentNumberingCounterControllerUpdate$Params {
    id: string;
    body: ToolsDocumentNumberingCounterDto;
}
export declare function documentNumberingCounterControllerUpdate(http: HttpClient, rootUrl: string, params: DocumentNumberingCounterControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsDocumentNumberingCounterDto;
}>>;
export declare namespace documentNumberingCounterControllerUpdate {
    var PATH: string;
}
