import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AclUserGroupDto } from '../../models/acl-user-group-dto';
export interface UserGroupControllerRemove$Params {
    id: string;
}
export declare function userGroupControllerRemove(http: HttpClient, rootUrl: string, params: UserGroupControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AclUserGroupDto;
}>>;
export declare namespace userGroupControllerRemove {
    var PATH: string;
}
