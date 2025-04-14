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

import { contractControllerCreate } from '../fn/contract/contract-controller-create';
import { ContractControllerCreate$Params } from '../fn/contract/contract-controller-create';
import { contractControllerFindAll } from '../fn/contract/contract-controller-find-all';
import { ContractControllerFindAll$Params } from '../fn/contract/contract-controller-find-all';
import { contractControllerFindOne } from '../fn/contract/contract-controller-find-one';
import { ContractControllerFindOne$Params } from '../fn/contract/contract-controller-find-one';
import { contractControllerRemove } from '../fn/contract/contract-controller-remove';
import { ContractControllerRemove$Params } from '../fn/contract/contract-controller-remove';
import { contractControllerUpdate } from '../fn/contract/contract-controller-update';
import { ContractControllerUpdate$Params } from '../fn/contract/contract-controller-update';
import { PelangganContractDto } from '../models/pelanggan-contract-dto';

@Injectable({ providedIn: 'root' })
export class ContractService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `contractControllerFindAll()` */
  static readonly ContractControllerFindAllPath = '/auth/contract/contract';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractControllerFindAll$Response(params?: ContractControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganContractDto>;
'total'?: number;
}>> {
    return contractControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractControllerFindAll(params?: ContractControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganContractDto>;
'total'?: number;
}> {
    return this.contractControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganContractDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganContractDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `contractControllerCreate()` */
  static readonly ContractControllerCreatePath = '/auth/contract/contract';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractControllerCreate$Response(params: ContractControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractDto;
}>> {
    return contractControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractControllerCreate(params: ContractControllerCreate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractDto;
}> {
    return this.contractControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractDto;
} => r.body)
    );
  }

  /** Path part for operation `contractControllerFindOne()` */
  static readonly ContractControllerFindOnePath = '/auth/contract/contract/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractControllerFindOne$Response(params: ContractControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractDto;
}>> {
    return contractControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractControllerFindOne(params: ContractControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractDto;
}> {
    return this.contractControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractDto;
} => r.body)
    );
  }

  /** Path part for operation `contractControllerUpdate()` */
  static readonly ContractControllerUpdatePath = '/auth/contract/contract/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractControllerUpdate$Response(params: ContractControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractDto;
}>> {
    return contractControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractControllerUpdate(params: ContractControllerUpdate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractDto;
}> {
    return this.contractControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractDto;
} => r.body)
    );
  }

  /** Path part for operation `contractControllerRemove()` */
  static readonly ContractControllerRemovePath = '/auth/contract/contract/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractControllerRemove$Response(params: ContractControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractDto;
}>> {
    return contractControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractControllerRemove(params: ContractControllerRemove$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractDto;
}> {
    return this.contractControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractDto;
} => r.body)
    );
  }

}
