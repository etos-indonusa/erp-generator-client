import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMaintenanceCodeDto } from '../../models/amims-maintenance-code-dto';
export interface MaintenanceCodeControllerFindAll$Params {
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
export declare function maintenanceCodeControllerFindAll(http: HttpClient, rootUrl: string, params?: MaintenanceCodeControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsMaintenanceCodeDto>;
    'total'?: number;
}>>;
export declare namespace maintenanceCodeControllerFindAll {
    var PATH: string;
}
