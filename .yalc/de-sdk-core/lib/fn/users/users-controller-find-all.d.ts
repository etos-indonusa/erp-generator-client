import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AclUsersDto } from '../../models/acl-users-dto';
export interface UsersControllerFindAll$Params {
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
export declare function usersControllerFindAll(http: HttpClient, rootUrl: string, params?: UsersControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AclUsersDto>;
    'total'?: number;
}>>;
export declare namespace usersControllerFindAll {
    var PATH: string;
}
