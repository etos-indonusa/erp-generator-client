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

import { AmimsStoreTransferDto } from '../models/amims-store-transfer-dto';
import { storeTransferControllerCreate } from '../fn/store-transfer/store-transfer-controller-create';
import { StoreTransferControllerCreate$Params } from '../fn/store-transfer/store-transfer-controller-create';
import { storeTransferControllerFindAll } from '../fn/store-transfer/store-transfer-controller-find-all';
import { StoreTransferControllerFindAll$Params } from '../fn/store-transfer/store-transfer-controller-find-all';
import { storeTransferControllerFindOne } from '../fn/store-transfer/store-transfer-controller-find-one';
import { StoreTransferControllerFindOne$Params } from '../fn/store-transfer/store-transfer-controller-find-one';
import { storeTransferControllerRemove } from '../fn/store-transfer/store-transfer-controller-remove';
import { StoreTransferControllerRemove$Params } from '../fn/store-transfer/store-transfer-controller-remove';
import { storeTransferControllerUpdate } from '../fn/store-transfer/store-transfer-controller-update';
import { StoreTransferControllerUpdate$Params } from '../fn/store-transfer/store-transfer-controller-update';

@Injectable({ providedIn: 'root' })
export class StoreTransferService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `storeTransferControllerFindAll()` */
  static readonly StoreTransferControllerFindAllPath = '/amims/store_transfer/store_transfer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `storeTransferControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  storeTransferControllerFindAll$Response(params?: StoreTransferControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsStoreTransferDto>;
'total'?: number;
}>> {
    return storeTransferControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `storeTransferControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  storeTransferControllerFindAll(params?: StoreTransferControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsStoreTransferDto>;
'total'?: number;
}> {
    return this.storeTransferControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsStoreTransferDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsStoreTransferDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `storeTransferControllerCreate()` */
  static readonly StoreTransferControllerCreatePath = '/amims/store_transfer/store_transfer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `storeTransferControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  storeTransferControllerCreate$Response(params: StoreTransferControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsStoreTransferDto;
}>> {
    return storeTransferControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `storeTransferControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  storeTransferControllerCreate(params: StoreTransferControllerCreate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsStoreTransferDto;
}> {
    return this.storeTransferControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsStoreTransferDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsStoreTransferDto;
} => r.body)
    );
  }

  /** Path part for operation `storeTransferControllerFindOne()` */
  static readonly StoreTransferControllerFindOnePath = '/amims/store_transfer/store_transfer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `storeTransferControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  storeTransferControllerFindOne$Response(params: StoreTransferControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsStoreTransferDto;
}>> {
    return storeTransferControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `storeTransferControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  storeTransferControllerFindOne(params: StoreTransferControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsStoreTransferDto;
}> {
    return this.storeTransferControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsStoreTransferDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsStoreTransferDto;
} => r.body)
    );
  }

  /** Path part for operation `storeTransferControllerUpdate()` */
  static readonly StoreTransferControllerUpdatePath = '/amims/store_transfer/store_transfer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `storeTransferControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  storeTransferControllerUpdate$Response(params: StoreTransferControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsStoreTransferDto;
}>> {
    return storeTransferControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `storeTransferControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  storeTransferControllerUpdate(params: StoreTransferControllerUpdate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsStoreTransferDto;
}> {
    return this.storeTransferControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsStoreTransferDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsStoreTransferDto;
} => r.body)
    );
  }

  /** Path part for operation `storeTransferControllerRemove()` */
  static readonly StoreTransferControllerRemovePath = '/amims/store_transfer/store_transfer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `storeTransferControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  storeTransferControllerRemove$Response(params: StoreTransferControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsStoreTransferDto;
}>> {
    return storeTransferControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `storeTransferControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  storeTransferControllerRemove(params: StoreTransferControllerRemove$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsStoreTransferDto;
}> {
    return this.storeTransferControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsStoreTransferDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsStoreTransferDto;
} => r.body)
    );
  }

}
