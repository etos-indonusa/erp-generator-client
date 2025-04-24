import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AclUserGroupDto } from '../../models/acl-user-group-dto';
export interface UserGroupControllerCreate$Params {
    body: AclUserGroupDto;
}
export declare function userGroupControllerCreate(http: HttpClient, rootUrl: string, params: UserGroupControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AclUserGroupDto;
}>>;
export declare namespace userGroupControllerCreate {
    var PATH: string;
}
