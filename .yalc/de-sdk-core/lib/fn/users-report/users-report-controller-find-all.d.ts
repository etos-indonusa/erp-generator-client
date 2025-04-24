import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AclUsersReportDto } from '../../models/acl-users-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface UsersReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function usersReportControllerFindAll(http: HttpClient, rootUrl: string, params: UsersReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AclUsersReportDto>;
    'total'?: number;
}>>;
export declare namespace usersReportControllerFindAll {
    var PATH: string;
}
