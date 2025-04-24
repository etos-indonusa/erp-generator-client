import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AclUserTokensDto } from '../models/acl-user-tokens-dto';
import { UserTokensControllerCreate$Params } from '../fn/user-tokens/user-tokens-controller-create';
import { UserTokensControllerFindAll$Params } from '../fn/user-tokens/user-tokens-controller-find-all';
import { UserTokensControllerFindOne$Params } from '../fn/user-tokens/user-tokens-controller-find-one';
import { UserTokensControllerRemove$Params } from '../fn/user-tokens/user-tokens-controller-remove';
import { UserTokensControllerUpdate$Params } from '../fn/user-tokens/user-tokens-controller-update';
import * as i0 from "@angular/core";
export declare class UserTokensService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `userTokensControllerFindAll()` */
    static readonly UserTokensControllerFindAllPath = "/auth/user_tokens/user_tokens";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `userTokensControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    userTokensControllerFindAll$Response(params?: UserTokensControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AclUserTokensDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `userTokensControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    userTokensControllerFindAll(params?: UserTokensControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AclUserTokensDto>;
        'total'?: number;
    }>;
    /** Path part for operation `userTokensControllerCreate()` */
    static readonly UserTokensControllerCreatePath = "/auth/user_tokens/user_tokens";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `userTokensControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    userTokensControllerCreate$Response(params: UserTokensControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUserTokensDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `userTokensControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    userTokensControllerCreate(params: UserTokensControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUserTokensDto;
    }>;
    /** Path part for operation `userTokensControllerFindOne()` */
    static readonly UserTokensControllerFindOnePath = "/auth/user_tokens/user_tokens/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `userTokensControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    userTokensControllerFindOne$Response(params: UserTokensControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUserTokensDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `userTokensControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    userTokensControllerFindOne(params: UserTokensControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUserTokensDto;
    }>;
    /** Path part for operation `userTokensControllerUpdate()` */
    static readonly UserTokensControllerUpdatePath = "/auth/user_tokens/user_tokens/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `userTokensControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    userTokensControllerUpdate$Response(params: UserTokensControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUserTokensDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `userTokensControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    userTokensControllerUpdate(params: UserTokensControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUserTokensDto;
    }>;
    /** Path part for operation `userTokensControllerRemove()` */
    static readonly UserTokensControllerRemovePath = "/auth/user_tokens/user_tokens/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `userTokensControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    userTokensControllerRemove$Response(params: UserTokensControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUserTokensDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `userTokensControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    userTokensControllerRemove(params: UserTokensControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AclUserTokensDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserTokensService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserTokensService>;
}
