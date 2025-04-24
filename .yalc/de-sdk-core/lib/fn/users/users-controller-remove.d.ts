import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AclUsersDto } from '../../models/acl-users-dto';
export interface UsersControllerRemove$Params {
    id: string;
}
export declare function usersControllerRemove(http: HttpClient, rootUrl: string, params: UsersControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AclUsersDto;
}>>;
export declare namespace usersControllerRemove {
    var PATH: string;
}
