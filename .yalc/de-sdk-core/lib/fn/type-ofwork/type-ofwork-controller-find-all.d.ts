import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTypeOfworkDto } from '../../models/amims-type-ofwork-dto';
export interface TypeOfworkControllerFindAll$Params {
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
export declare function typeOfworkControllerFindAll(http: HttpClient, rootUrl: string, params?: TypeOfworkControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsTypeOfworkDto>;
    'total'?: number;
}>>;
export declare namespace typeOfworkControllerFindAll {
    var PATH: string;
}
