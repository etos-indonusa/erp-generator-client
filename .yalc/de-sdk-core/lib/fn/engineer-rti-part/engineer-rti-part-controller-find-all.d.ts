import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerRtiPartDto } from '../../models/amims-engineer-rti-part-dto';
export interface EngineerRtiPartControllerFindAll$Params {
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
export declare function engineerRtiPartControllerFindAll(http: HttpClient, rootUrl: string, params?: EngineerRtiPartControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsEngineerRtiPartDto>;
    'total'?: number;
}>>;
export declare namespace engineerRtiPartControllerFindAll {
    var PATH: string;
}
