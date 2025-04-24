import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AclUsersDto } from '../models/acl-users-dto';
import { UsersControllerCreate$Params } from '../fn/users/users-controller-create';
import { UsersControllerFindAll$Params } from '../fn/users/users-controller-find-all';
import { UsersControllerFindOne$Params } from '../fn/users/users-controller-find-one';
import { UsersControllerRemove$Params } from '../fn/users/users-controller-remove';
import { UsersControllerUpdate$Params } from '../fn/users/users-controller-update';
import * as i0 from "@angular/core";
export declare class UsersService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `usersControllerFindAll()` */
    static readonly UsersControllerFindAllPath = "/auth/users/users";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `usersControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    usersControllerFindAll$Response(params?: UsersControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AclUsersDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `usersControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    usersControllerFindAll(params?: UsersControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AclUsersDto>;
        'total'?: number;
    }>;
    /** Path part for operation `usersControllerCreate()` */
    static readonly UsersControllerCreatePath = "/auth/users/users";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `usersControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    usersControllerCreate$Response(params: UsersControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUsersDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `usersControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    usersControllerCreate(params: UsersControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUsersDto;
    }>;
    /** Path part for operation `usersControllerFindOne()` */
    static readonly UsersControllerFindOnePath = "/auth/users/users/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `usersControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    usersControllerFindOne$Response(params: UsersControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUsersDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `usersControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    usersControllerFindOne(params: UsersControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUsersDto;
    }>;
    /** Path part for operation `usersControllerUpdate()` */
    static readonly UsersControllerUpdatePath = "/auth/users/users/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `usersControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    usersControllerUpdate$Response(params: UsersControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUsersDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `usersControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    usersControllerUpdate(params: UsersControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUsersDto;
    }>;
    /** Path part for operation `usersControllerRemove()` */
    static readonly UsersControllerRemovePath = "/auth/users/users/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `usersControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    usersControllerRemove$Response(params: UsersControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUsersDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `usersControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    usersControllerRemove(params: UsersControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUsersDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsersService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsersService>;
}
