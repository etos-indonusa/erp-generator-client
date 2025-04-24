import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsRotaryFactorDto } from '../../models/amims-rotary-factor-dto';
export interface RotaryFactorControllerFindAll$Params {
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
export declare function rotaryFactorControllerFindAll(http: HttpClient, rootUrl: string, params?: RotaryFactorControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsRotaryFactorDto>;
    'total'?: number;
}>>;
export declare namespace rotaryFactorControllerFindAll {
    var PATH: string;
}
