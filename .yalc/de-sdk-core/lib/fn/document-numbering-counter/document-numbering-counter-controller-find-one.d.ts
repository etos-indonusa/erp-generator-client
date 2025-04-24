import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsDocumentNumberingCounterDto } from '../../models/tools-document-numbering-counter-dto';
export interface DocumentNumberingCounterControllerFindOne$Params {
    id: string;
}
export declare function documentNumberingCounterControllerFindOne(http: HttpClient, rootUrl: string, params: DocumentNumberingCounterControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: ToolsDocumentNumberingCounterDto;
}>>;
export declare namespace documentNumberingCounterControllerFindOne {
    var PATH: string;
}
