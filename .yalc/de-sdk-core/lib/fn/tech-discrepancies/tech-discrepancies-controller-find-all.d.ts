import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTechDiscrepanciesDto } from '../../models/amims-tech-discrepancies-dto';
export interface TechDiscrepanciesControllerFindAll$Params {
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
export declare function techDiscrepanciesControllerFindAll(http: HttpClient, rootUrl: string, params?: TechDiscrepanciesControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsTechDiscrepanciesDto>;
    'total'?: number;
}>>;
export declare namespace techDiscrepanciesControllerFindAll {
    var PATH: string;
}
