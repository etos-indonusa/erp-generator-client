/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { authControllerForgotPassword } from '../fn/auth-public/auth-controller-forgot-password';
import { AuthControllerForgotPassword$Params } from '../fn/auth-public/auth-controller-forgot-password';
import { authControllerLogin } from '../fn/auth-public/auth-controller-login';
import { AuthControllerLogin$Params } from '../fn/auth-public/auth-controller-login';
import { authControllerLogout } from '../fn/auth-public/auth-controller-logout';
import { AuthControllerLogout$Params } from '../fn/auth-public/auth-controller-logout';
import { authControllerRefresh } from '../fn/auth-public/auth-controller-refresh';
import { AuthControllerRefresh$Params } from '../fn/auth-public/auth-controller-refresh';
import { authControllerResetPassword } from '../fn/auth-public/auth-controller-reset-password';
import { AuthControllerResetPassword$Params } from '../fn/auth-public/auth-controller-reset-password';
import { AuthResponseDto } from '../models/auth-response-dto';
import { SimpleMessageDto } from '../models/simple-message-dto';
import { TokenOnlyResponseDto } from '../models/token-only-response-dto';

@Injectable({ providedIn: 'root' })
export class AuthPublicService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `authControllerLogin()` */
  static readonly AuthControllerLoginPath = '/nonauth/auth/auth/login';

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
  authControllerLogin$Response(params: AuthControllerLogin$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthResponseDto>> {
    return authControllerLogin(this.http, this.rootUrl, params, context);
  }

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
  authControllerLogin(params: AuthControllerLogin$Params, context?: HttpContext): Observable<AuthResponseDto> {
    return this.authControllerLogin$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthResponseDto>): AuthResponseDto => r.body)
    );
  }

  /** Path part for operation `authControllerRefresh()` */
  static readonly AuthControllerRefreshPath = '/nonauth/auth/auth/refresh-token';

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
  authControllerRefresh$Response(params: AuthControllerRefresh$Params, context?: HttpContext): Observable<StrictHttpResponse<TokenOnlyResponseDto>> {
    return authControllerRefresh(this.http, this.rootUrl, params, context);
  }

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
  authControllerRefresh(params: AuthControllerRefresh$Params, context?: HttpContext): Observable<TokenOnlyResponseDto> {
    return this.authControllerRefresh$Response(params, context).pipe(
      map((r: StrictHttpResponse<TokenOnlyResponseDto>): TokenOnlyResponseDto => r.body)
    );
  }

  /** Path part for operation `authControllerForgotPassword()` */
  static readonly AuthControllerForgotPasswordPath = '/nonauth/auth/auth/forgot-password';

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
  authControllerForgotPassword$Response(params?: AuthControllerForgotPassword$Params, context?: HttpContext): Observable<StrictHttpResponse<SimpleMessageDto>> {
    return authControllerForgotPassword(this.http, this.rootUrl, params, context);
  }

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
  authControllerForgotPassword(params?: AuthControllerForgotPassword$Params, context?: HttpContext): Observable<SimpleMessageDto> {
    return this.authControllerForgotPassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<SimpleMessageDto>): SimpleMessageDto => r.body)
    );
  }

  /** Path part for operation `authControllerResetPassword()` */
  static readonly AuthControllerResetPasswordPath = '/nonauth/auth/auth/reset-password';

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
  authControllerResetPassword$Response(params: AuthControllerResetPassword$Params, context?: HttpContext): Observable<StrictHttpResponse<SimpleMessageDto>> {
    return authControllerResetPassword(this.http, this.rootUrl, params, context);
  }

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
  authControllerResetPassword(params: AuthControllerResetPassword$Params, context?: HttpContext): Observable<SimpleMessageDto> {
    return this.authControllerResetPassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<SimpleMessageDto>): SimpleMessageDto => r.body)
    );
  }

  /** Path part for operation `authControllerLogout()` */
  static readonly AuthControllerLogoutPath = '/nonauth/auth/auth/logout';

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
  authControllerLogout$Response(params?: AuthControllerLogout$Params, context?: HttpContext): Observable<StrictHttpResponse<SimpleMessageDto>> {
    return authControllerLogout(this.http, this.rootUrl, params, context);
  }

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
  authControllerLogout(params?: AuthControllerLogout$Params, context?: HttpContext): Observable<SimpleMessageDto> {
    return this.authControllerLogout$Response(params, context).pipe(
      map((r: StrictHttpResponse<SimpleMessageDto>): SimpleMessageDto => r.body)
    );
  }

}
