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

import { kantorControllerCreate } from '../fn/kantor/kantor-controller-create';
import { KantorControllerCreate$Params } from '../fn/kantor/kantor-controller-create';
import { kantorControllerFindAll } from '../fn/kantor/kantor-controller-find-all';
import { KantorControllerFindAll$Params } from '../fn/kantor/kantor-controller-find-all';
import { kantorControllerFindOne } from '../fn/kantor/kantor-controller-find-one';
import { KantorControllerFindOne$Params } from '../fn/kantor/kantor-controller-find-one';
import { kantorControllerRemove } from '../fn/kantor/kantor-controller-remove';
import { KantorControllerRemove$Params } from '../fn/kantor/kantor-controller-remove';
import { kantorControllerUpdate } from '../fn/kantor/kantor-controller-update';
import { KantorControllerUpdate$Params } from '../fn/kantor/kantor-controller-update';
import { PelangganKantorDto } from '../models/pelanggan-kantor-dto';

@Injectable({ providedIn: 'root' })
export class KantorService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `kantorControllerFindAll()` */
  static readonly KantorControllerFindAllPath = '/auth/kantor/kantor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `kantorControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  kantorControllerFindAll$Response(params?: KantorControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganKantorDto>;
'total'?: number;
}>> {
    return kantorControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `kantorControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  kantorControllerFindAll(params?: KantorControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganKantorDto>;
'total'?: number;
}> {
    return this.kantorControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganKantorDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganKantorDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `kantorControllerCreate()` */
  static readonly KantorControllerCreatePath = '/auth/kantor/kantor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `kantorControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  kantorControllerCreate$Response(params: KantorControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganKantorDto;
}>> {
    return kantorControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `kantorControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  kantorControllerCreate(params: KantorControllerCreate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganKantorDto;
}> {
    return this.kantorControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganKantorDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: PelangganKantorDto;
} => r.body)
    );
  }

  /** Path part for operation `kantorControllerFindOne()` */
  static readonly KantorControllerFindOnePath = '/auth/kantor/kantor/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `kantorControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  kantorControllerFindOne$Response(params: KantorControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganKantorDto;
}>> {
    return kantorControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `kantorControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  kantorControllerFindOne(params: KantorControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganKantorDto;
}> {
    return this.kantorControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganKantorDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: PelangganKantorDto;
} => r.body)
    );
  }

  /** Path part for operation `kantorControllerUpdate()` */
  static readonly KantorControllerUpdatePath = '/auth/kantor/kantor/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `kantorControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  kantorControllerUpdate$Response(params: KantorControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganKantorDto;
}>> {
    return kantorControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `kantorControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  kantorControllerUpdate(params: KantorControllerUpdate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganKantorDto;
}> {
    return this.kantorControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganKantorDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: PelangganKantorDto;
} => r.body)
    );
  }

  /** Path part for operation `kantorControllerRemove()` */
  static readonly KantorControllerRemovePath = '/auth/kantor/kantor/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `kantorControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  kantorControllerRemove$Response(params: KantorControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganKantorDto;
}>> {
    return kantorControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `kantorControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  kantorControllerRemove(params: KantorControllerRemove$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganKantorDto;
}> {
    return this.kantorControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganKantorDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: PelangganKantorDto;
} => r.body)
    );
  }

}
