import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisItemDto } from '../../models/amims-engineer-pris-item-dto';
export interface EngineerPrisItemControllerFindAll$Params {
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
export declare function engineerPrisItemControllerFindAll(http: HttpClient, rootUrl: string, params?: EngineerPrisItemControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsEngineerPrisItemDto>;
    'total'?: number;
}>>;
export declare namespace engineerPrisItemControllerFindAll {
    var PATH: string;
}
