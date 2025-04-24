import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsFigureIndexDto } from '../../models/amims-figure-index-dto';
export interface FigureIndexControllerFindAll$Params {
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
export declare function figureIndexControllerFindAll(http: HttpClient, rootUrl: string, params?: FigureIndexControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsFigureIndexDto>;
    'total'?: number;
}>>;
export declare namespace figureIndexControllerFindAll {
    var PATH: string;
}
