import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsStoreDestroyDto } from '../../models/amims-store-destroy-dto';
export interface StoreDestroyControllerFindAll$Params {
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
export declare function storeDestroyControllerFindAll(http: HttpClient, rootUrl: string, params?: StoreDestroyControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsStoreDestroyDto>;
    'total'?: number;
}>>;
export declare namespace storeDestroyControllerFindAll {
    var PATH: string;
}
