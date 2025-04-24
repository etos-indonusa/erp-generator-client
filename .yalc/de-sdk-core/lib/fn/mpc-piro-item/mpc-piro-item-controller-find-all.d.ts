import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcPiroItemDto } from '../../models/amims-mpc-piro-item-dto';
export interface MpcPiroItemControllerFindAll$Params {
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
export declare function mpcPiroItemControllerFindAll(http: HttpClient, rootUrl: string, params?: MpcPiroItemControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsMpcPiroItemDto>;
    'total'?: number;
}>>;
export declare namespace mpcPiroItemControllerFindAll {
    var PATH: string;
}
