import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLifeTimeLimitDto } from '../../models/amims-life-time-limit-dto';
export interface LifeTimeLimitControllerFindAll$Params {
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
export declare function lifeTimeLimitControllerFindAll(http: HttpClient, rootUrl: string, params?: LifeTimeLimitControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsLifeTimeLimitDto>;
    'total'?: number;
}>>;
export declare namespace lifeTimeLimitControllerFindAll {
    var PATH: string;
}
