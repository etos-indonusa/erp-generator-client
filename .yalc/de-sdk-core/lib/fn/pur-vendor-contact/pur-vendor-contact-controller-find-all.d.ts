import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurVendorContactDto } from '../../models/amims-pur-vendor-contact-dto';
export interface PurVendorContactControllerFindAll$Params {
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
export declare function purVendorContactControllerFindAll(http: HttpClient, rootUrl: string, params?: PurVendorContactControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPurVendorContactDto>;
    'total'?: number;
}>>;
export declare namespace purVendorContactControllerFindAll {
    var PATH: string;
}
