import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartFigureIndexDto } from '../../models/amims-part-figure-index-dto';
export interface PartFigureIndexControllerFindAll$Params {
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
export declare function partFigureIndexControllerFindAll(http: HttpClient, rootUrl: string, params?: PartFigureIndexControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPartFigureIndexDto>;
    'total'?: number;
}>>;
export declare namespace partFigureIndexControllerFindAll {
    var PATH: string;
}
