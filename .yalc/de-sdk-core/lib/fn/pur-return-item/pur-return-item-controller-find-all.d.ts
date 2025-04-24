import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurReturnItemDto } from '../../models/amims-pur-return-item-dto';
export interface PurReturnItemControllerFindAll$Params {
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
export declare function purReturnItemControllerFindAll(http: HttpClient, rootUrl: string, params?: PurReturnItemControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPurReturnItemDto>;
    'total'?: number;
}>>;
export declare namespace purReturnItemControllerFindAll {
    var PATH: string;
}
