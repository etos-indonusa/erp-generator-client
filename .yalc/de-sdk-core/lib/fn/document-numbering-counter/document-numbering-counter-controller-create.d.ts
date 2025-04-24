import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsDocumentNumberingCounterDto } from '../../models/tools-document-numbering-counter-dto';
export interface DocumentNumberingCounterControllerCreate$Params {
    body: ToolsDocumentNumberingCounterDto;
}
export declare function documentNumberingCounterControllerCreate(http: HttpClient, rootUrl: string, params: DocumentNumberingCounterControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsDocumentNumberingCounterDto;
}>>;
export declare namespace documentNumberingCounterControllerCreate {
    var PATH: string;
}
