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

import { contractSiteControllerCreate } from '../fn/contract-site/contract-site-controller-create';
import { ContractSiteControllerCreate$Params } from '../fn/contract-site/contract-site-controller-create';
import { contractSiteControllerFindAll } from '../fn/contract-site/contract-site-controller-find-all';
import { ContractSiteControllerFindAll$Params } from '../fn/contract-site/contract-site-controller-find-all';
import { contractSiteControllerFindOne } from '../fn/contract-site/contract-site-controller-find-one';
import { ContractSiteControllerFindOne$Params } from '../fn/contract-site/contract-site-controller-find-one';
import { contractSiteControllerRemove } from '../fn/contract-site/contract-site-controller-remove';
import { ContractSiteControllerRemove$Params } from '../fn/contract-site/contract-site-controller-remove';
import { contractSiteControllerUpdate } from '../fn/contract-site/contract-site-controller-update';
import { ContractSiteControllerUpdate$Params } from '../fn/contract-site/contract-site-controller-update';
import { PelangganContractSiteDto } from '../models/pelanggan-contract-site-dto';

@Injectable({ providedIn: 'root' })
export class ContractSiteService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `contractSiteControllerFindAll()` */
  static readonly ContractSiteControllerFindAllPath = '/auth/contract_site/contract_site';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractSiteControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractSiteControllerFindAll$Response(params?: ContractSiteControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganContractSiteDto>;
'total'?: number;
}>> {
    return contractSiteControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractSiteControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractSiteControllerFindAll(params?: ContractSiteControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganContractSiteDto>;
'total'?: number;
}> {
    return this.contractSiteControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganContractSiteDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<PelangganContractSiteDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `contractSiteControllerCreate()` */
  static readonly ContractSiteControllerCreatePath = '/auth/contract_site/contract_site';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractSiteControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractSiteControllerCreate$Response(params: ContractSiteControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractSiteDto;
}>> {
    return contractSiteControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractSiteControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractSiteControllerCreate(params: ContractSiteControllerCreate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractSiteDto;
}> {
    return this.contractSiteControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractSiteDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractSiteDto;
} => r.body)
    );
  }

  /** Path part for operation `contractSiteControllerFindOne()` */
  static readonly ContractSiteControllerFindOnePath = '/auth/contract_site/contract_site/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractSiteControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractSiteControllerFindOne$Response(params: ContractSiteControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractSiteDto;
}>> {
    return contractSiteControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractSiteControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractSiteControllerFindOne(params: ContractSiteControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractSiteDto;
}> {
    return this.contractSiteControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractSiteDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractSiteDto;
} => r.body)
    );
  }

  /** Path part for operation `contractSiteControllerUpdate()` */
  static readonly ContractSiteControllerUpdatePath = '/auth/contract_site/contract_site/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractSiteControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractSiteControllerUpdate$Response(params: ContractSiteControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractSiteDto;
}>> {
    return contractSiteControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractSiteControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractSiteControllerUpdate(params: ContractSiteControllerUpdate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractSiteDto;
}> {
    return this.contractSiteControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractSiteDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractSiteDto;
} => r.body)
    );
  }

  /** Path part for operation `contractSiteControllerRemove()` */
  static readonly ContractSiteControllerRemovePath = '/auth/contract_site/contract_site/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractSiteControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractSiteControllerRemove$Response(params: ContractSiteControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractSiteDto;
}>> {
    return contractSiteControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractSiteControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractSiteControllerRemove(params: ContractSiteControllerRemove$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractSiteDto;
}> {
    return this.contractSiteControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractSiteDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: PelangganContractSiteDto;
} => r.body)
    );
  }

}
