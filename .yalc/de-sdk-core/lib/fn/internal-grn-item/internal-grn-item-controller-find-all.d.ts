import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsInternalGrnItemDto } from '../../models/amims-internal-grn-item-dto';
export interface InternalGrnItemControllerFindAll$Params {
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
export declare function internalGrnItemControllerFindAll(http: HttpClient, rootUrl: string, params?: InternalGrnItemControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsInternalGrnItemDto>;
    'total'?: number;
}>>;
export declare namespace internalGrnItemControllerFindAll {
    var PATH: string;
}
