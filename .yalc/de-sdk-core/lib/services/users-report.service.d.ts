import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AclUsersReportDto } from '../models/acl-users-report-dto';
import { UsersReportControllerFindAll$Params } from '../fn/users-report/users-report-controller-find-all';
import { UsersReportControllerFindOne$Params } from '../fn/users-report/users-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class UsersReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `usersReportControllerFindAll()` */
    static readonly UsersReportControllerFindAllPath = "/auth/users/users_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `usersReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    usersReportControllerFindAll$Response(params: UsersReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AclUsersReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `usersReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    usersReportControllerFindAll(params: UsersReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AclUsersReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `usersReportControllerFindOne()` */
    static readonly UsersReportControllerFindOnePath = "/auth/users/users_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `usersReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    usersReportControllerFindOne$Response(params: UsersReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUsersReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `usersReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    usersReportControllerFindOne(params: UsersReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUsersReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsersReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsersReportService>;
}
