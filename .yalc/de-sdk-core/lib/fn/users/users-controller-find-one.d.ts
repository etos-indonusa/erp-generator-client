import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AclUsersDto } from '../../models/acl-users-dto';
export interface UsersControllerFindOne$Params {
    id: string;
}
export declare function usersControllerFindOne(http: HttpClient, rootUrl: string, params: UsersControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AclUsersDto;
}>>;
export declare namespace usersControllerFindOne {
    var PATH: string;
}
