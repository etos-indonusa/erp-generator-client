import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AclUserGroupDto } from '../../models/acl-user-group-dto';
export interface UserGroupControllerUpdate$Params {
    id: string;
    body: AclUserGroupDto;
}
export declare function userGroupControllerUpdate(http: HttpClient, rootUrl: string, params: UserGroupControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AclUserGroupDto;
}>>;
export declare namespace userGroupControllerUpdate {
    var PATH: string;
}
