import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisReturnItemDto } from '../../models/amims-engineer-pris-return-item-dto';
export interface EngineerPrisReturnItemControllerFindAll$Params {
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
export declare function engineerPrisReturnItemControllerFindAll(http: HttpClient, rootUrl: string, params?: EngineerPrisReturnItemControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsEngineerPrisReturnItemDto>;
    'total'?: number;
}>>;
export declare namespace engineerPrisReturnItemControllerFindAll {
    var PATH: string;
}
