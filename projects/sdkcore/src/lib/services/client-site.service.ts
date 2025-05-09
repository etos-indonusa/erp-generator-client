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

import { clientSiteControllerCreate } from '../fn/client-site/client-site-controller-create';
import { ClientSiteControllerCreate$Params } from '../fn/client-site/client-site-controller-create';
import { clientSiteControllerFindAll } from '../fn/client-site/client-site-controller-find-all';
import { ClientSiteControllerFindAll$Params } from '../fn/client-site/client-site-controller-find-all';
import { clientSiteControllerFindOne } from '../fn/client-site/client-site-controller-find-one';
import { ClientSiteControllerFindOne$Params } from '../fn/client-site/client-site-controller-find-one';
import { clientSiteControllerRemove } from '../fn/client-site/client-site-controller-remove';
import { ClientSiteControllerRemove$Params } from '../fn/client-site/client-site-controller-remove';
import { clientSiteControllerUpdate } from '../fn/client-site/client-site-controller-update';
import { ClientSiteControllerUpdate$Params } from '../fn/client-site/client-site-controller-update';
import { PelangganClientSiteDto } from '../models/pelanggan-client-site-dto';

@Injectable({ providedIn: 'root' })
export class ClientSiteService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `clientSiteControllerFindAll()` */
  static readonly ClientSiteControllerFindAllPath = '/auth/client_site/client_site';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clientSiteControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientSiteControllerFindAll$Response(params?: ClientSiteControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganClientSiteDto>;
'total'?: number;
}>> {
    return clientSiteControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `clientSiteControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientSiteControllerFindAll(params?: ClientSiteControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganClientSiteDto>;
'total'?: number;
}> {
    return this.clientSiteControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganClientSiteDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganClientSiteDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `clientSiteControllerCreate()` */
  static readonly ClientSiteControllerCreatePath = '/auth/client_site/client_site';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clientSiteControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  clientSiteControllerCreate$Response(params: ClientSiteControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganClientSiteDto;
}>> {
    return clientSiteControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `clientSiteControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  clientSiteControllerCreate(params: ClientSiteControllerCreate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganClientSiteDto;
}> {
    return this.clientSiteControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganClientSiteDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: PelangganClientSiteDto;
} => r.body)
    );
  }

  /** Path part for operation `clientSiteControllerFindOne()` */
  static readonly ClientSiteControllerFindOnePath = '/auth/client_site/client_site/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clientSiteControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientSiteControllerFindOne$Response(params: ClientSiteControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganClientSiteDto;
}>> {
    return clientSiteControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `clientSiteControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientSiteControllerFindOne(params: ClientSiteControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganClientSiteDto;
}> {
    return this.clientSiteControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganClientSiteDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: PelangganClientSiteDto;
} => r.body)
    );
  }

  /** Path part for operation `clientSiteControllerUpdate()` */
  static readonly ClientSiteControllerUpdatePath = '/auth/client_site/client_site/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clientSiteControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  clientSiteControllerUpdate$Response(params: ClientSiteControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganClientSiteDto;
}>> {
    return clientSiteControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `clientSiteControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  clientSiteControllerUpdate(params: ClientSiteControllerUpdate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganClientSiteDto;
}> {
    return this.clientSiteControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganClientSiteDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: PelangganClientSiteDto;
} => r.body)
    );
  }

  /** Path part for operation `clientSiteControllerRemove()` */
  static readonly ClientSiteControllerRemovePath = '/auth/client_site/client_site/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clientSiteControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientSiteControllerRemove$Response(params: ClientSiteControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganClientSiteDto;
}>> {
    return clientSiteControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `clientSiteControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientSiteControllerRemove(params: ClientSiteControllerRemove$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganClientSiteDto;
}> {
    return this.clientSiteControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganClientSiteDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: PelangganClientSiteDto;
} => r.body)
    );
  }

}
