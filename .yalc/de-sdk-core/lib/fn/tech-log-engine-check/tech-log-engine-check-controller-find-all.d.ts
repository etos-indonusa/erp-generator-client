import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechLogEngineCheckDto } from '../../models/amims-tech-log-engine-check-dto';
export interface TechLogEngineCheckControllerFindAll$Params {
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
export declare function techLogEngineCheckControllerFindAll(http: HttpClient, rootUrl: string, params?: TechLogEngineCheckControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsTechLogEngineCheckDto>;
    'total'?: number;
}>>;
export declare namespace techLogEngineCheckControllerFindAll {
    var PATH: string;
}
