import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { DocumentDocumentDto } from '../../models/document-document-dto';
export interface DocumentControllerFindAll$Params {
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
export declare function documentControllerFindAll(http: HttpClient, rootUrl: string, params?: DocumentControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<DocumentDocumentDto>;
    'total'?: number;
}>>;
export declare namespace documentControllerFindAll {
    var PATH: string;
}
