import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsInternalGrnDto } from '../../models/amims-internal-grn-dto';
export interface InternalGrnControllerFindAll$Params {
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
export declare function internalGrnControllerFindAll(http: HttpClient, rootUrl: string, params?: InternalGrnControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsInternalGrnDto>;
    'total'?: number;
}>>;
export declare namespace internalGrnControllerFindAll {
    var PATH: string;
}
