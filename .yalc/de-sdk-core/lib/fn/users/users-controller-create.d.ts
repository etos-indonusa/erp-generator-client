import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AclUsersDto } from '../../models/acl-users-dto';
export interface UsersControllerCreate$Params {
    body: AclUsersDto;
}
export declare function usersControllerCreate(http: HttpClient, rootUrl: string, params: UsersControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AclUsersDto;
}>>;
export declare namespace usersControllerCreate {
    var PATH: string;
}
