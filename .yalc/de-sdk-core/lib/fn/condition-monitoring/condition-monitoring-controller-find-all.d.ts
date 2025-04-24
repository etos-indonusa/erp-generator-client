import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsConditionMonitoringDto } from '../../models/amims-condition-monitoring-dto';
export interface ConditionMonitoringControllerFindAll$Params {
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
export declare function conditionMonitoringControllerFindAll(http: HttpClient, rootUrl: string, params?: ConditionMonitoringControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsConditionMonitoringDto>;
    'total'?: number;
}>>;
export declare namespace conditionMonitoringControllerFindAll {
    var PATH: string;
}
