import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurVendorItemDto } from '../../models/amims-pur-vendor-item-dto';
export interface PurVendorItemControllerFindAll$Params {
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
export declare function purVendorItemControllerFindAll(http: HttpClient, rootUrl: string, params?: PurVendorItemControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPurVendorItemDto>;
    'total'?: number;
}>>;
export declare namespace purVendorItemControllerFindAll {
    var PATH: string;
}
