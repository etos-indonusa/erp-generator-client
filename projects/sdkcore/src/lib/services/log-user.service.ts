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

import { AmimsLogUserDto } from '../models/amims-log-user-dto';
import { logUserControllerCreate } from '../fn/log-user/log-user-controller-create';
import { LogUserControllerCreate$Params } from '../fn/log-user/log-user-controller-create';
import { logUserControllerFindAll } from '../fn/log-user/log-user-controller-find-all';
import { LogUserControllerFindAll$Params } from '../fn/log-user/log-user-controller-find-all';
import { logUserControllerFindOne } from '../fn/log-user/log-user-controller-find-one';
import { LogUserControllerFindOne$Params } from '../fn/log-user/log-user-controller-find-one';
import { logUserControllerRemove } from '../fn/log-user/log-user-controller-remove';
import { LogUserControllerRemove$Params } from '../fn/log-user/log-user-controller-remove';
import { logUserControllerUpdate } from '../fn/log-user/log-user-controller-update';
import { LogUserControllerUpdate$Params } from '../fn/log-user/log-user-controller-update';

@Injectable({ providedIn: 'root' })
export class LogUserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `logUserControllerFindAll()` */
  static readonly LogUserControllerFindAllPath = '/amims/log_user/log_user';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logUserControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  logUserControllerFindAll$Response(params?: LogUserControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsLogUserDto>;
'total'?: number;
}>> {
    return logUserControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logUserControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logUserControllerFindAll(params?: LogUserControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsLogUserDto>;
'total'?: number;
}> {
    return this.logUserControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsLogUserDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsLogUserDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `logUserControllerCreate()` */
  static readonly LogUserControllerCreatePath = '/amims/log_user/log_user';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logUserControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logUserControllerCreate$Response(params: LogUserControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogUserDto;
}>> {
    return logUserControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logUserControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logUserControllerCreate(params: LogUserControllerCreate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogUserDto;
}> {
    return this.logUserControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogUserDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogUserDto;
} => r.body)
    );
  }

  /** Path part for operation `logUserControllerFindOne()` */
  static readonly LogUserControllerFindOnePath = '/amims/log_user/log_user/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logUserControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  logUserControllerFindOne$Response(params: LogUserControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogUserDto;
}>> {
    return logUserControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logUserControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logUserControllerFindOne(params: LogUserControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogUserDto;
}> {
    return this.logUserControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogUserDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogUserDto;
} => r.body)
    );
  }

  /** Path part for operation `logUserControllerUpdate()` */
  static readonly LogUserControllerUpdatePath = '/amims/log_user/log_user/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logUserControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logUserControllerUpdate$Response(params: LogUserControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogUserDto;
}>> {
    return logUserControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logUserControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logUserControllerUpdate(params: LogUserControllerUpdate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogUserDto;
}> {
    return this.logUserControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogUserDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogUserDto;
} => r.body)
    );
  }

  /** Path part for operation `logUserControllerRemove()` */
  static readonly LogUserControllerRemovePath = '/amims/log_user/log_user/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logUserControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  logUserControllerRemove$Response(params: LogUserControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogUserDto;
}>> {
    return logUserControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logUserControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logUserControllerRemove(params: LogUserControllerRemove$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogUserDto;
}> {
    return this.logUserControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogUserDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogUserDto;
} => r.body)
    );
  }

}
