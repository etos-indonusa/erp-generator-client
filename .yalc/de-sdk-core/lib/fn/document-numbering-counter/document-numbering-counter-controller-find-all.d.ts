import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsDocumentNumberingCounterDto } from '../../models/tools-document-numbering-counter-dto';
export interface DocumentNumberingCounterControllerFindAll$Params {
    pageIndex?: number;
    pageSize?: number;
    /**
     * JSON.stringify({})
     */
    filter?: string;
    sortKey?: string;
    sortValue?: 'asc' | 'desc';
    /**
     * Array of searchable fields
     */
    search_field?: Array<string>;
    search_keyword?: string;
}
export declare function documentNumberingCounterControllerFindAll(http: HttpClient, rootUrl: string, params?: DocumentNumberingCounterControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<ToolsDocumentNumberingCounterDto>;
    'total'?: number;
}>>;
export declare namespace documentNumberingCounterControllerFindAll {
    var PATH: string;
}
