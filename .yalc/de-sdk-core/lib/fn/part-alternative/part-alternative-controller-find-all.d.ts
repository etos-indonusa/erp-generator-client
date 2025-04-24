import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartAlternativeDto } from '../../models/amims-part-alternative-dto';
export interface PartAlternativeControllerFindAll$Params {
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
export declare function partAlternativeControllerFindAll(http: HttpClient, rootUrl: string, params?: PartAlternativeControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPartAlternativeDto>;
    'total'?: number;
}>>;
export declare namespace partAlternativeControllerFindAll {
    var PATH: string;
}
