import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsDocumentNumberingCounterDto } from '../../models/tools-document-numbering-counter-dto';
export interface DocumentNumberingCounterControllerRemove$Params {
    id: string;
}
export declare function documentNumberingCounterControllerRemove(http: HttpClient, rootUrl: string, params: DocumentNumberingCounterControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsDocumentNumberingCounterDto;
}>>;
export declare namespace documentNumberingCounterControllerRemove {
    var PATH: string;
}
