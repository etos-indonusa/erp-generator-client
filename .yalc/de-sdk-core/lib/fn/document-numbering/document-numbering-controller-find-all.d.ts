import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsDocumentNumberingDto } from '../../models/tools-document-numbering-dto';
export interface DocumentNumberingControllerFindAll$Params {
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
export declare function documentNumberingControllerFindAll(http: HttpClient, rootUrl: string, params?: DocumentNumberingControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<ToolsDocumentNumberingDto>;
    'total'?: number;
}>>;
export declare namespace documentNumberingControllerFindAll {
    var PATH: string;
}
