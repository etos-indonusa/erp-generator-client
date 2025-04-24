import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLibReferenceDto } from '../../models/amims-lib-reference-dto';
export interface LibReferenceControllerFindAll$Params {
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
export declare function libReferenceControllerFindAll(http: HttpClient, rootUrl: string, params?: LibReferenceControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsLibReferenceDto>;
    'total'?: number;
}>>;
export declare namespace libReferenceControllerFindAll {
    var PATH: string;
}
