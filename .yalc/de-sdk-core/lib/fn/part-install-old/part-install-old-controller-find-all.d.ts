import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartInstallOldDto } from '../../models/amims-part-install-old-dto';
export interface PartInstallOldControllerFindAll$Params {
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
export declare function partInstallOldControllerFindAll(http: HttpClient, rootUrl: string, params?: PartInstallOldControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPartInstallOldDto>;
    'total'?: number;
}>>;
export declare namespace partInstallOldControllerFindAll {
    var PATH: string;
}
