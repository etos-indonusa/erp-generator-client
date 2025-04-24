import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurGrnItemDto } from '../../models/amims-pur-grn-item-dto';
export interface PurGrnItemControllerFindAll$Params {
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
export declare function purGrnItemControllerFindAll(http: HttpClient, rootUrl: string, params?: PurGrnItemControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPurGrnItemDto>;
    'total'?: number;
}>>;
export declare namespace purGrnItemControllerFindAll {
    var PATH: string;
}
