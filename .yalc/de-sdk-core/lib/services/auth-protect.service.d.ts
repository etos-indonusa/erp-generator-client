import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AuthProtectedControllerGetMe$Params } from '../fn/auth-protect/auth-protected-controller-get-me';
import { AuthProtectedControllerLogout$Params } from '../fn/auth-protect/auth-protected-controller-logout';
import { CurrentUserResponseDto } from '../models/current-user-response-dto';
import { SimpleMessageDto } from '../models/simple-message-dto';
import * as i0 from "@angular/core";
export declare class AuthProtectService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `authProtectedControllerGetMe()` */
    static readonly AuthProtectedControllerGetMePath = "/auth/auth-protect/auth-protect/me";
    /**
     * Get current user.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `authProtectedControllerGetMe()` instead.
     *
     * This method doesn't expect any request body.
     */
    authProtectedControllerGetMe$Response(params?: AuthProtectedControllerGetMe$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrentUserResponseDto>>;
    /**
     * Get current user.
     *
     *
     *
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `authProtectedControllerGetMe$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    authProtectedControllerGetMe(params?: AuthProtectedControllerGetMe$Params, context?: HttpContext): Observable<CurrentUserResponseDto>;
    /** Path part for operation `authProtectedControllerLogout()` */
    static readonly AuthProtectedControllerLogoutPath = "/auth/auth-protect/auth-protect/logout";
    /**
     * Logout user.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `authProtectedControllerLogout()` instead.
     *
     * This method doesn't expect any request body.
     */
    authProtectedControllerLogout$Response(params?: AuthProtectedControllerLogout$Params, context?: HttpContext): Observable<StrictHttpResponse<SimpleMessageDto>>;
    /**
     * Logout user.
     *
     *
     *
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `authProtectedControllerLogout$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    authProtectedControllerLogout(params?: AuthProtectedControllerLogout$Params, context?: HttpContext): Observable<SimpleMessageDto>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthProtectService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthProtectService>;
}
