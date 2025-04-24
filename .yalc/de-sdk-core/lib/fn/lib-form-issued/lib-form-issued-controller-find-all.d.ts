import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLibFormIssuedDto } from '../../models/amims-lib-form-issued-dto';
export interface LibFormIssuedControllerFindAll$Params {
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
export declare function libFormIssuedControllerFindAll(http: HttpClient, rootUrl: string, params?: LibFormIssuedControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsLibFormIssuedDto>;
    'total'?: number;
}>>;
export declare namespace libFormIssuedControllerFindAll {
    var PATH: string;
}
