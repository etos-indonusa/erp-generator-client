import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartAtaDto } from '../../models/amims-part-ata-dto';
export interface PartAtaControllerFindAll$Params {
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
export declare function partAtaControllerFindAll(http: HttpClient, rootUrl: string, params?: PartAtaControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPartAtaDto>;
    'total'?: number;
}>>;
export declare namespace partAtaControllerFindAll {
    var PATH: string;
}
