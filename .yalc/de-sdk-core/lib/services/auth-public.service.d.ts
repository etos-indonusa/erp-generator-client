import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AuthControllerForgotPassword$Params } from '../fn/auth-public/auth-controller-forgot-password';
import { AuthControllerLogin$Params } from '../fn/auth-public/auth-controller-login';
import { AuthControllerLogout$Params } from '../fn/auth-public/auth-controller-logout';
import { AuthControllerRefresh$Params } from '../fn/auth-public/auth-controller-refresh';
import { AuthControllerResetPassword$Params } from '../fn/auth-public/auth-controller-reset-password';
import { AuthResponseDto } from '../models/auth-response-dto';
import { SimpleMessageDto } from '../models/simple-message-dto';
import { TokenOnlyResponseDto } from '../models/token-only-response-dto';
import * as i0 from "@angular/core";
export declare class AuthPublicService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `authControllerLogin()` */
    static readonly AuthControllerLoginPath = "/nonauth/auth/auth/login";
    /**
     * Login user.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `authControllerLogin()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    authControllerLogin$Response(params: AuthControllerLogin$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthResponseDto>>;
    /**
     * Login user.
     *
     *
     *
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `authControllerLogin$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    authControllerLogin(params: AuthControllerLogin$Params, context?: HttpContext): Observable<AuthResponseDto>;
    /** Path part for operation `authControllerRefresh()` */
    static readonly AuthControllerRefreshPath = "/nonauth/auth/auth/refresh-token";
    /**
     * Refresh token.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `authControllerRefresh()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    authControllerRefresh$Response(params: AuthControllerRefresh$Params, context?: HttpContext): Observable<StrictHttpResponse<TokenOnlyResponseDto>>;
    /**
     * Refresh token.
     *
     *
     *
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `authControllerRefresh$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    authControllerRefresh(params: AuthControllerRefresh$Params, context?: HttpContext): Observable<TokenOnlyResponseDto>;
    /** Path part for operation `authControllerForgotPassword()` */
    static readonly AuthControllerForgotPasswordPath = "/nonauth/auth/auth/forgot-password";
    /**
     * Lupa password.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `authControllerForgotPassword()` instead.
     *
     * This method doesn't expect any request body.
     */
    authControllerForgotPassword$Response(params?: AuthControllerForgotPassword$Params, context?: HttpContext): Observable<StrictHttpResponse<SimpleMessageDto>>;
    /**
     * Lupa password.
     *
     *
     *
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `authControllerForgotPassword$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    authControllerForgotPassword(params?: AuthControllerForgotPassword$Params, context?: HttpContext): Observable<SimpleMessageDto>;
    /** Path part for operation `authControllerResetPassword()` */
    static readonly AuthControllerResetPasswordPath = "/nonauth/auth/auth/reset-password";
    /**
     * Reset password.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `authControllerResetPassword()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    authControllerResetPassword$Response(params: AuthControllerResetPassword$Params, context?: HttpContext): Observable<StrictHttpResponse<SimpleMessageDto>>;
    /**
     * Reset password.
     *
     *
     *
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `authControllerResetPassword$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    authControllerResetPassword(params: AuthControllerResetPassword$Params, context?: HttpContext): Observable<SimpleMessageDto>;
    /** Path part for operation `authControllerLogout()` */
    static readonly AuthControllerLogoutPath = "/nonauth/auth/auth/logout";
    /**
     * Logout user.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `authControllerLogout()` instead.
     *
     * This method doesn't expect any request body.
     */
    authControllerLogout$Response(params?: AuthControllerLogout$Params, context?: HttpContext): Observable<StrictHttpResponse<SimpleMessageDto>>;
    /**
     * Logout user.
     *
     *
     *
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `authControllerLogout$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    authControllerLogout(params?: AuthControllerLogout$Params, context?: HttpContext): Observable<SimpleMessageDto>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthPublicService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthPublicService>;
}
