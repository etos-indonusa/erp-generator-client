import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogEngineDto } from '../../models/amims-tech-log-engine-dto';
export interface TechLogEngineControllerFindAll$Params {
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
export declare function techLogEngineControllerFindAll(http: HttpClient, rootUrl: string, params?: TechLogEngineControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsTechLogEngineDto>;
    'total'?: number;
}>>;
export declare namespace techLogEngineControllerFindAll {
    var PATH: string;
}
