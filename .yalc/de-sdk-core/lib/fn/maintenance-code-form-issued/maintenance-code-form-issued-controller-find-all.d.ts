import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMaintenanceCodeFormIssuedDto } from '../../models/amims-maintenance-code-form-issued-dto';
export interface MaintenanceCodeFormIssuedControllerFindAll$Params {
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
export declare function maintenanceCodeFormIssuedControllerFindAll(http: HttpClient, rootUrl: string, params?: MaintenanceCodeFormIssuedControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsMaintenanceCodeFormIssuedDto>;
    'total'?: number;
}>>;
export declare namespace maintenanceCodeFormIssuedControllerFindAll {
    var PATH: string;
}
