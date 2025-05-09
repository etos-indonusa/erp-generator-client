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

import { AmimsLogTsnTsoDto } from '../models/amims-log-tsn-tso-dto';
import { logTsnTsoControllerCreate } from '../fn/log-tsn-tso/log-tsn-tso-controller-create';
import { LogTsnTsoControllerCreate$Params } from '../fn/log-tsn-tso/log-tsn-tso-controller-create';
import { logTsnTsoControllerFindAll } from '../fn/log-tsn-tso/log-tsn-tso-controller-find-all';
import { LogTsnTsoControllerFindAll$Params } from '../fn/log-tsn-tso/log-tsn-tso-controller-find-all';
import { logTsnTsoControllerFindOne } from '../fn/log-tsn-tso/log-tsn-tso-controller-find-one';
import { LogTsnTsoControllerFindOne$Params } from '../fn/log-tsn-tso/log-tsn-tso-controller-find-one';
import { logTsnTsoControllerRemove } from '../fn/log-tsn-tso/log-tsn-tso-controller-remove';
import { LogTsnTsoControllerRemove$Params } from '../fn/log-tsn-tso/log-tsn-tso-controller-remove';
import { logTsnTsoControllerUpdate } from '../fn/log-tsn-tso/log-tsn-tso-controller-update';
import { LogTsnTsoControllerUpdate$Params } from '../fn/log-tsn-tso/log-tsn-tso-controller-update';

@Injectable({ providedIn: 'root' })
export class LogTsnTsoService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `logTsnTsoControllerFindAll()` */
  static readonly LogTsnTsoControllerFindAllPath = '/amims/log_tsn_tso/log_tsn_tso';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logTsnTsoControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  logTsnTsoControllerFindAll$Response(params?: LogTsnTsoControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsLogTsnTsoDto>;
'total'?: number;
}>> {
    return logTsnTsoControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logTsnTsoControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logTsnTsoControllerFindAll(params?: LogTsnTsoControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsLogTsnTsoDto>;
'total'?: number;
}> {
    return this.logTsnTsoControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsLogTsnTsoDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsLogTsnTsoDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `logTsnTsoControllerCreate()` */
  static readonly LogTsnTsoControllerCreatePath = '/amims/log_tsn_tso/log_tsn_tso';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logTsnTsoControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logTsnTsoControllerCreate$Response(params: LogTsnTsoControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogTsnTsoDto;
}>> {
    return logTsnTsoControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logTsnTsoControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logTsnTsoControllerCreate(params: LogTsnTsoControllerCreate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogTsnTsoDto;
}> {
    return this.logTsnTsoControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogTsnTsoDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogTsnTsoDto;
} => r.body)
    );
  }

  /** Path part for operation `logTsnTsoControllerFindOne()` */
  static readonly LogTsnTsoControllerFindOnePath = '/amims/log_tsn_tso/log_tsn_tso/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logTsnTsoControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  logTsnTsoControllerFindOne$Response(params: LogTsnTsoControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogTsnTsoDto;
}>> {
    return logTsnTsoControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logTsnTsoControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logTsnTsoControllerFindOne(params: LogTsnTsoControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogTsnTsoDto;
}> {
    return this.logTsnTsoControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogTsnTsoDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogTsnTsoDto;
} => r.body)
    );
  }

  /** Path part for operation `logTsnTsoControllerUpdate()` */
  static readonly LogTsnTsoControllerUpdatePath = '/amims/log_tsn_tso/log_tsn_tso/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logTsnTsoControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logTsnTsoControllerUpdate$Response(params: LogTsnTsoControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogTsnTsoDto;
}>> {
    return logTsnTsoControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logTsnTsoControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logTsnTsoControllerUpdate(params: LogTsnTsoControllerUpdate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogTsnTsoDto;
}> {
    return this.logTsnTsoControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogTsnTsoDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogTsnTsoDto;
} => r.body)
    );
  }

  /** Path part for operation `logTsnTsoControllerRemove()` */
  static readonly LogTsnTsoControllerRemovePath = '/amims/log_tsn_tso/log_tsn_tso/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logTsnTsoControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  logTsnTsoControllerRemove$Response(params: LogTsnTsoControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogTsnTsoDto;
}>> {
    return logTsnTsoControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logTsnTsoControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logTsnTsoControllerRemove(params: LogTsnTsoControllerRemove$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogTsnTsoDto;
}> {
    return this.logTsnTsoControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogTsnTsoDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsLogTsnTsoDto;
} => r.body)
    );
  }

}
