import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsStoreTransferDto } from '../../models/amims-store-transfer-dto';
export interface StoreTransferControllerFindAll$Params {
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
export declare function storeTransferControllerFindAll(http: HttpClient, rootUrl: string, params?: StoreTransferControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsStoreTransferDto>;
    'total'?: number;
}>>;
export declare namespace storeTransferControllerFindAll {
    var PATH: string;
}
