import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPmtrDto } from '../../models/amims-engineer-pmtr-dto';
export interface EngineerPmtrControllerFindAll$Params {
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
export declare function engineerPmtrControllerFindAll(http: HttpClient, rootUrl: string, params?: EngineerPmtrControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsEngineerPmtrDto>;
    'total'?: number;
}>>;
export declare namespace engineerPmtrControllerFindAll {
    var PATH: string;
}
