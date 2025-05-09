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

import { AmimsMpcJoDto } from '../models/amims-mpc-jo-dto';
import { mpcJoControllerCreate } from '../fn/mpc-jo/mpc-jo-controller-create';
import { MpcJoControllerCreate$Params } from '../fn/mpc-jo/mpc-jo-controller-create';
import { mpcJoControllerFindAll } from '../fn/mpc-jo/mpc-jo-controller-find-all';
import { MpcJoControllerFindAll$Params } from '../fn/mpc-jo/mpc-jo-controller-find-all';
import { mpcJoControllerFindOne } from '../fn/mpc-jo/mpc-jo-controller-find-one';
import { MpcJoControllerFindOne$Params } from '../fn/mpc-jo/mpc-jo-controller-find-one';
import { mpcJoControllerRemove } from '../fn/mpc-jo/mpc-jo-controller-remove';
import { MpcJoControllerRemove$Params } from '../fn/mpc-jo/mpc-jo-controller-remove';
import { mpcJoControllerUpdate } from '../fn/mpc-jo/mpc-jo-controller-update';
import { MpcJoControllerUpdate$Params } from '../fn/mpc-jo/mpc-jo-controller-update';

@Injectable({ providedIn: 'root' })
export class MpcJoService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `mpcJoControllerFindAll()` */
  static readonly MpcJoControllerFindAllPath = '/amims/mpc_jo/mpc_jo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `mpcJoControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  mpcJoControllerFindAll$Response(params?: MpcJoControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsMpcJoDto>;
'total'?: number;
}>> {
    return mpcJoControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `mpcJoControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  mpcJoControllerFindAll(params?: MpcJoControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsMpcJoDto>;
'total'?: number;
}> {
    return this.mpcJoControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsMpcJoDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsMpcJoDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `mpcJoControllerCreate()` */
  static readonly MpcJoControllerCreatePath = '/amims/mpc_jo/mpc_jo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `mpcJoControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  mpcJoControllerCreate$Response(params: MpcJoControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcJoDto;
}>> {
    return mpcJoControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `mpcJoControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  mpcJoControllerCreate(params: MpcJoControllerCreate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcJoDto;
}> {
    return this.mpcJoControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcJoDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcJoDto;
} => r.body)
    );
  }

  /** Path part for operation `mpcJoControllerFindOne()` */
  static readonly MpcJoControllerFindOnePath = '/amims/mpc_jo/mpc_jo/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `mpcJoControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  mpcJoControllerFindOne$Response(params: MpcJoControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcJoDto;
}>> {
    return mpcJoControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `mpcJoControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  mpcJoControllerFindOne(params: MpcJoControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcJoDto;
}> {
    return this.mpcJoControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcJoDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcJoDto;
} => r.body)
    );
  }

  /** Path part for operation `mpcJoControllerUpdate()` */
  static readonly MpcJoControllerUpdatePath = '/amims/mpc_jo/mpc_jo/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `mpcJoControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  mpcJoControllerUpdate$Response(params: MpcJoControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcJoDto;
}>> {
    return mpcJoControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `mpcJoControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  mpcJoControllerUpdate(params: MpcJoControllerUpdate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcJoDto;
}> {
    return this.mpcJoControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcJoDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcJoDto;
} => r.body)
    );
  }

  /** Path part for operation `mpcJoControllerRemove()` */
  static readonly MpcJoControllerRemovePath = '/amims/mpc_jo/mpc_jo/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `mpcJoControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  mpcJoControllerRemove$Response(params: MpcJoControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcJoDto;
}>> {
    return mpcJoControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `mpcJoControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  mpcJoControllerRemove(params: MpcJoControllerRemove$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcJoDto;
}> {
    return this.mpcJoControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcJoDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcJoDto;
} => r.body)
    );
  }

}
