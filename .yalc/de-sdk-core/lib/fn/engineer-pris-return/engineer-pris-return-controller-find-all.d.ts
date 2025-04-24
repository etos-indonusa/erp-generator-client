import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisReturnDto } from '../../models/amims-engineer-pris-return-dto';
export interface EngineerPrisReturnControllerFindAll$Params {
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
export declare function engineerPrisReturnControllerFindAll(http: HttpClient, rootUrl: string, params?: EngineerPrisReturnControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsEngineerPrisReturnDto>;
    'total'?: number;
}>>;
export declare namespace engineerPrisReturnControllerFindAll {
    var PATH: string;
}
