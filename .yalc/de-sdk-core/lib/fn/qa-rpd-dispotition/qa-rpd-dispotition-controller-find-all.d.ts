import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaRpdDispotitionDto } from '../../models/amims-qa-rpd-dispotition-dto';
export interface QaRpdDispotitionControllerFindAll$Params {
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
export declare function qaRpdDispotitionControllerFindAll(http: HttpClient, rootUrl: string, params?: QaRpdDispotitionControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsQaRpdDispotitionDto>;
    'total'?: number;
}>>;
export declare namespace qaRpdDispotitionControllerFindAll {
    var PATH: string;
}
