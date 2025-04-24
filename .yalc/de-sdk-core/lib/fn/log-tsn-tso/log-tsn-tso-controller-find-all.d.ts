import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogTsnTsoDto } from '../../models/amims-log-tsn-tso-dto';
export interface LogTsnTsoControllerFindAll$Params {
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
export declare function logTsnTsoControllerFindAll(http: HttpClient, rootUrl: string, params?: LogTsnTsoControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsLogTsnTsoDto>;
    'total'?: number;
}>>;
export declare namespace logTsnTsoControllerFindAll {
    var PATH: string;
}
