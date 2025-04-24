import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AclUsersDto } from '../../models/acl-users-dto';
export interface UsersControllerUpdate$Params {
    id: string;
    body: AclUsersDto;
}
export declare function usersControllerUpdate(http: HttpClient, rootUrl: string, params: UsersControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AclUsersDto;
}>>;
export declare namespace usersControllerUpdate {
    var PATH: string;
}
