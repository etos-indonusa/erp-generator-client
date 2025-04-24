import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsStoreTransferItemDto } from '../../models/amims-store-transfer-item-dto';
export interface StoreTransferItemControllerFindAll$Params {
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
export declare function storeTransferItemControllerFindAll(http: HttpClient, rootUrl: string, params?: StoreTransferItemControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsStoreTransferItemDto>;
    'total'?: number;
}>>;
export declare namespace storeTransferItemControllerFindAll {
    var PATH: string;
}
