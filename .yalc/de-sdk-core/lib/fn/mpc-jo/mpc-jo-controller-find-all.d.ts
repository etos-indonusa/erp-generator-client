import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcJoDto } from '../../models/amims-mpc-jo-dto';
export interface MpcJoControllerFindAll$Params {
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
export declare function mpcJoControllerFindAll(http: HttpClient, rootUrl: string, params?: MpcJoControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsMpcJoDto>;
    'total'?: number;
}>>;
export declare namespace mpcJoControllerFindAll {
    var PATH: string;
}
