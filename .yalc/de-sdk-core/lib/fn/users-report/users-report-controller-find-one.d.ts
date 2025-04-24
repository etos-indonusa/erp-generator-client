import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AclUsersReportDto } from '../../models/acl-users-report-dto';
export interface UsersReportControllerFindOne$Params {
    id: string;
}
export declare function usersReportControllerFindOne(http: HttpClient, rootUrl: string, params: UsersReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AclUsersReportDto;
}>>;
export declare namespace usersReportControllerFindOne {
    var PATH: string;
}
