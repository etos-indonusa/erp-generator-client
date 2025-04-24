import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AclUserTokensDto } from '../../models/acl-user-tokens-dto';
export interface UserTokensControllerFindAll$Params {
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
export declare function userTokensControllerFindAll(http: HttpClient, rootUrl: string, params?: UserTokensControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AclUserTokensDto>;
    'total'?: number;
}>>;
export declare namespace userTokensControllerFindAll {
    var PATH: string;
}
