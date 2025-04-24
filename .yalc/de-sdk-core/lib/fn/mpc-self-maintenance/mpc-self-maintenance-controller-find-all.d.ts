import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcSelfMaintenanceDto } from '../../models/amims-mpc-self-maintenance-dto';
export interface MpcSelfMaintenanceControllerFindAll$Params {
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
export declare function mpcSelfMaintenanceControllerFindAll(http: HttpClient, rootUrl: string, params?: MpcSelfMaintenanceControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsMpcSelfMaintenanceDto>;
    'total'?: number;
}>>;
export declare namespace mpcSelfMaintenanceControllerFindAll {
    var PATH: string;
}
