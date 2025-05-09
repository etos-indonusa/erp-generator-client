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

import { AmimsMpcGseDto } from '../models/amims-mpc-gse-dto';
import { mpcGseControllerCreate } from '../fn/mpc-gse/mpc-gse-controller-create';
import { MpcGseControllerCreate$Params } from '../fn/mpc-gse/mpc-gse-controller-create';
import { mpcGseControllerFindAll } from '../fn/mpc-gse/mpc-gse-controller-find-all';
import { MpcGseControllerFindAll$Params } from '../fn/mpc-gse/mpc-gse-controller-find-all';
import { mpcGseControllerFindOne } from '../fn/mpc-gse/mpc-gse-controller-find-one';
import { MpcGseControllerFindOne$Params } from '../fn/mpc-gse/mpc-gse-controller-find-one';
import { mpcGseControllerRemove } from '../fn/mpc-gse/mpc-gse-controller-remove';
import { MpcGseControllerRemove$Params } from '../fn/mpc-gse/mpc-gse-controller-remove';
import { mpcGseControllerUpdate } from '../fn/mpc-gse/mpc-gse-controller-update';
import { MpcGseControllerUpdate$Params } from '../fn/mpc-gse/mpc-gse-controller-update';

@Injectable({ providedIn: 'root' })
export class MpcGseService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `mpcGseControllerFindAll()` */
  static readonly MpcGseControllerFindAllPath = '/amims/mpc_gse/mpc_gse';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `mpcGseControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  mpcGseControllerFindAll$Response(params?: MpcGseControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsMpcGseDto>;
'total'?: number;
}>> {
    return mpcGseControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `mpcGseControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  mpcGseControllerFindAll(params?: MpcGseControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsMpcGseDto>;
'total'?: number;
}> {
    return this.mpcGseControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsMpcGseDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsMpcGseDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `mpcGseControllerCreate()` */
  static readonly MpcGseControllerCreatePath = '/amims/mpc_gse/mpc_gse';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `mpcGseControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  mpcGseControllerCreate$Response(params: MpcGseControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcGseDto;
}>> {
    return mpcGseControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `mpcGseControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  mpcGseControllerCreate(params: MpcGseControllerCreate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcGseDto;
}> {
    return this.mpcGseControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcGseDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcGseDto;
} => r.body)
    );
  }

  /** Path part for operation `mpcGseControllerFindOne()` */
  static readonly MpcGseControllerFindOnePath = '/amims/mpc_gse/mpc_gse/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `mpcGseControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  mpcGseControllerFindOne$Response(params: MpcGseControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcGseDto;
}>> {
    return mpcGseControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `mpcGseControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  mpcGseControllerFindOne(params: MpcGseControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcGseDto;
}> {
    return this.mpcGseControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcGseDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcGseDto;
} => r.body)
    );
  }

  /** Path part for operation `mpcGseControllerUpdate()` */
  static readonly MpcGseControllerUpdatePath = '/amims/mpc_gse/mpc_gse/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `mpcGseControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  mpcGseControllerUpdate$Response(params: MpcGseControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcGseDto;
}>> {
    return mpcGseControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `mpcGseControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  mpcGseControllerUpdate(params: MpcGseControllerUpdate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcGseDto;
}> {
    return this.mpcGseControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcGseDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcGseDto;
} => r.body)
    );
  }

  /** Path part for operation `mpcGseControllerRemove()` */
  static readonly MpcGseControllerRemovePath = '/amims/mpc_gse/mpc_gse/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `mpcGseControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  mpcGseControllerRemove$Response(params: MpcGseControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcGseDto;
}>> {
    return mpcGseControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `mpcGseControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  mpcGseControllerRemove(params: MpcGseControllerRemove$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcGseDto;
}> {
    return this.mpcGseControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcGseDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsMpcGseDto;
} => r.body)
    );
  }

}
