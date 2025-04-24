import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPmtrItemDto } from '../../models/amims-engineer-pmtr-item-dto';
export interface EngineerPmtrItemControllerFindAll$Params {
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
export declare function engineerPmtrItemControllerFindAll(http: HttpClient, rootUrl: string, params?: EngineerPmtrItemControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsEngineerPmtrItemDto>;
    'total'?: number;
}>>;
export declare namespace engineerPmtrItemControllerFindAll {
    var PATH: string;
}
