import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AclUsersWidgetDto } from '../models/acl-users-widget-dto';
import { UsersWidgetControllerFindAll$Params } from '../fn/users-widget/users-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class UsersWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `usersWidgetControllerFindAll()` */
    static readonly UsersWidgetControllerFindAllPath = "/auth/users/users_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `usersWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    usersWidgetControllerFindAll$Response(params: UsersWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AclUsersWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `usersWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    usersWidgetControllerFindAll(params: UsersWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AclUsersWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsersWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsersWidgetService>;
}
