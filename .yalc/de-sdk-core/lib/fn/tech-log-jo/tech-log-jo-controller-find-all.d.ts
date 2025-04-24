import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogJoDto } from '../../models/amims-tech-log-jo-dto';
export interface TechLogJoControllerFindAll$Params {
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
export declare function techLogJoControllerFindAll(http: HttpClient, rootUrl: string, params?: TechLogJoControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsTechLogJoDto>;
    'total'?: number;
}>>;
export declare namespace techLogJoControllerFindAll {
    var PATH: string;
}
