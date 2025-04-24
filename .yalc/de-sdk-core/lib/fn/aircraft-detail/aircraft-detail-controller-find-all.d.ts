import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsAircraftDetailDto } from '../../models/amims-aircraft-detail-dto';
export interface AircraftDetailControllerFindAll$Params {
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
export declare function aircraftDetailControllerFindAll(http: HttpClient, rootUrl: string, params?: AircraftDetailControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsAircraftDetailDto>;
    'total'?: number;
}>>;
export declare namespace aircraftDetailControllerFindAll {
    var PATH: string;
}
