import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AclUserGroupDto } from '../../models/acl-user-group-dto';
export interface UserGroupControllerFindOne$Params {
    id: string;
}
export declare function userGroupControllerFindOne(http: HttpClient, rootUrl: string, params: UserGroupControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AclUserGroupDto;
}>>;
export declare namespace userGroupControllerFindOne {
    var PATH: string;
}
