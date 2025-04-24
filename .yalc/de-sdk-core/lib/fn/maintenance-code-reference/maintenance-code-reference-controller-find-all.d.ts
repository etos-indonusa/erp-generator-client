import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMaintenanceCodeReferenceDto } from '../../models/amims-maintenance-code-reference-dto';
export interface MaintenanceCodeReferenceControllerFindAll$Params {
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
export declare function maintenanceCodeReferenceControllerFindAll(http: HttpClient, rootUrl: string, params?: MaintenanceCodeReferenceControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsMaintenanceCodeReferenceDto>;
    'total'?: number;
}>>;
export declare namespace maintenanceCodeReferenceControllerFindAll {
    var PATH: string;
}
