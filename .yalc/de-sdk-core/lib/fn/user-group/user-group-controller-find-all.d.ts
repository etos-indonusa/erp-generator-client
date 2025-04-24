import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AclUserGroupDto } from '../../models/acl-user-group-dto';
export interface UserGroupControllerFindAll$Params {
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
export declare function userGroupControllerFindAll(http: HttpClient, rootUrl: string, params?: UserGroupControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AclUserGroupDto>;
    'total'?: number;
}>>;
export declare namespace userGroupControllerFindAll {
    var PATH: string;
}
