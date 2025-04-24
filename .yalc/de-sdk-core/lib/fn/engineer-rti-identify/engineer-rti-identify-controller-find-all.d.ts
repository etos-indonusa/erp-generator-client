import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerRtiIdentifyDto } from '../../models/amims-engineer-rti-identify-dto';
export interface EngineerRtiIdentifyControllerFindAll$Params {
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
export declare function engineerRtiIdentifyControllerFindAll(http: HttpClient, rootUrl: string, params?: EngineerRtiIdentifyControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsEngineerRtiIdentifyDto>;
    'total'?: number;
}>>;
export declare namespace engineerRtiIdentifyControllerFindAll {
    var PATH: string;
}
