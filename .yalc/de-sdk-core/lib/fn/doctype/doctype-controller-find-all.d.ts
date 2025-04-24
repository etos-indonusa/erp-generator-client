import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsDoctypeDto } from '../../models/amims-doctype-dto';
export interface DoctypeControllerFindAll$Params {
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
export declare function doctypeControllerFindAll(http: HttpClient, rootUrl: string, params?: DoctypeControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsDoctypeDto>;
    'total'?: number;
}>>;
export declare namespace doctypeControllerFindAll {
    var PATH: string;
}
