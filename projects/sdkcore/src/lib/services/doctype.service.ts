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

import { AmimsDoctypeDto } from '../models/amims-doctype-dto';
import { doctypeControllerCreate } from '../fn/doctype/doctype-controller-create';
import { DoctypeControllerCreate$Params } from '../fn/doctype/doctype-controller-create';
import { doctypeControllerFindAll } from '../fn/doctype/doctype-controller-find-all';
import { DoctypeControllerFindAll$Params } from '../fn/doctype/doctype-controller-find-all';
import { doctypeControllerFindOne } from '../fn/doctype/doctype-controller-find-one';
import { DoctypeControllerFindOne$Params } from '../fn/doctype/doctype-controller-find-one';
import { doctypeControllerRemove } from '../fn/doctype/doctype-controller-remove';
import { DoctypeControllerRemove$Params } from '../fn/doctype/doctype-controller-remove';
import { doctypeControllerUpdate } from '../fn/doctype/doctype-controller-update';
import { DoctypeControllerUpdate$Params } from '../fn/doctype/doctype-controller-update';

@Injectable({ providedIn: 'root' })
export class DoctypeService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `doctypeControllerFindAll()` */
  static readonly DoctypeControllerFindAllPath = '/amims/doctype/doctype';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `doctypeControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  doctypeControllerFindAll$Response(params?: DoctypeControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsDoctypeDto>;
'total'?: number;
}>> {
    return doctypeControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `doctypeControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  doctypeControllerFindAll(params?: DoctypeControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsDoctypeDto>;
'total'?: number;
}> {
    return this.doctypeControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsDoctypeDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsDoctypeDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `doctypeControllerCreate()` */
  static readonly DoctypeControllerCreatePath = '/amims/doctype/doctype';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `doctypeControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  doctypeControllerCreate$Response(params: DoctypeControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsDoctypeDto;
}>> {
    return doctypeControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `doctypeControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  doctypeControllerCreate(params: DoctypeControllerCreate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsDoctypeDto;
}> {
    return this.doctypeControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsDoctypeDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsDoctypeDto;
} => r.body)
    );
  }

  /** Path part for operation `doctypeControllerFindOne()` */
  static readonly DoctypeControllerFindOnePath = '/amims/doctype/doctype/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `doctypeControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  doctypeControllerFindOne$Response(params: DoctypeControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsDoctypeDto;
}>> {
    return doctypeControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `doctypeControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  doctypeControllerFindOne(params: DoctypeControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsDoctypeDto;
}> {
    return this.doctypeControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsDoctypeDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsDoctypeDto;
} => r.body)
    );
  }

  /** Path part for operation `doctypeControllerUpdate()` */
  static readonly DoctypeControllerUpdatePath = '/amims/doctype/doctype/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `doctypeControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  doctypeControllerUpdate$Response(params: DoctypeControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsDoctypeDto;
}>> {
    return doctypeControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `doctypeControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  doctypeControllerUpdate(params: DoctypeControllerUpdate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsDoctypeDto;
}> {
    return this.doctypeControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsDoctypeDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsDoctypeDto;
} => r.body)
    );
  }

  /** Path part for operation `doctypeControllerRemove()` */
  static readonly DoctypeControllerRemovePath = '/amims/doctype/doctype/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `doctypeControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  doctypeControllerRemove$Response(params: DoctypeControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsDoctypeDto;
}>> {
    return doctypeControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `doctypeControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  doctypeControllerRemove(params: DoctypeControllerRemove$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsDoctypeDto;
}> {
    return this.doctypeControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsDoctypeDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsDoctypeDto;
} => r.body)
    );
  }

}
