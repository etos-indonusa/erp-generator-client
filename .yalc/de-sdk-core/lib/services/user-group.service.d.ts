import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AclUserGroupDto } from '../models/acl-user-group-dto';
import { UserGroupControllerCreate$Params } from '../fn/user-group/user-group-controller-create';
import { UserGroupControllerFindAll$Params } from '../fn/user-group/user-group-controller-find-all';
import { UserGroupControllerFindOne$Params } from '../fn/user-group/user-group-controller-find-one';
import { UserGroupControllerRemove$Params } from '../fn/user-group/user-group-controller-remove';
import { UserGroupControllerUpdate$Params } from '../fn/user-group/user-group-controller-update';
import * as i0 from "@angular/core";
export declare class UserGroupService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `userGroupControllerFindAll()` */
    static readonly UserGroupControllerFindAllPath = "/auth/user_group/user_group";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `userGroupControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    userGroupControllerFindAll$Response(params?: UserGroupControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AclUserGroupDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `userGroupControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    userGroupControllerFindAll(params?: UserGroupControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AclUserGroupDto>;
        'total'?: number;
    }>;
    /** Path part for operation `userGroupControllerCreate()` */
    static readonly UserGroupControllerCreatePath = "/auth/user_group/user_group";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `userGroupControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    userGroupControllerCreate$Response(params: UserGroupControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUserGroupDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `userGroupControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    userGroupControllerCreate(params: UserGroupControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUserGroupDto;
    }>;
    /** Path part for operation `userGroupControllerFindOne()` */
    static readonly UserGroupControllerFindOnePath = "/auth/user_group/user_group/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `userGroupControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    userGroupControllerFindOne$Response(params: UserGroupControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUserGroupDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `userGroupControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    userGroupControllerFindOne(params: UserGroupControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUserGroupDto;
    }>;
    /** Path part for operation `userGroupControllerUpdate()` */
    static readonly UserGroupControllerUpdatePath = "/auth/user_group/user_group/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `userGroupControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    userGroupControllerUpdate$Response(params: UserGroupControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUserGroupDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `userGroupControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    userGroupControllerUpdate(params: UserGroupControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUserGroupDto;
    }>;
    /** Path part for operation `userGroupControllerRemove()` */
    static readonly UserGroupControllerRemovePath = "/auth/user_group/user_group/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `userGroupControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    userGroupControllerRemove$Response(params: UserGroupControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUserGroupDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `userGroupControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    userGroupControllerRemove(params: UserGroupControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUserGroupDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserGroupService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserGroupService>;
}
