import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdDetailAcDto } from '../../models/amims-td-detail-ac-dto';
export interface TdDetailAcControllerFindAll$Params {
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
export declare function tdDetailAcControllerFindAll(http: HttpClient, rootUrl: string, params?: TdDetailAcControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsTdDetailAcDto>;
    'total'?: number;
}>>;
export declare namespace tdDetailAcControllerFindAll {
    var PATH: string;
}
