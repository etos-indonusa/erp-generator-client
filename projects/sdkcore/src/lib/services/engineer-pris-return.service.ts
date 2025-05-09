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

import { AmimsEngineerPrisReturnDto } from '../models/amims-engineer-pris-return-dto';
import { engineerPrisReturnControllerCreate } from '../fn/engineer-pris-return/engineer-pris-return-controller-create';
import { EngineerPrisReturnControllerCreate$Params } from '../fn/engineer-pris-return/engineer-pris-return-controller-create';
import { engineerPrisReturnControllerFindAll } from '../fn/engineer-pris-return/engineer-pris-return-controller-find-all';
import { EngineerPrisReturnControllerFindAll$Params } from '../fn/engineer-pris-return/engineer-pris-return-controller-find-all';
import { engineerPrisReturnControllerFindOne } from '../fn/engineer-pris-return/engineer-pris-return-controller-find-one';
import { EngineerPrisReturnControllerFindOne$Params } from '../fn/engineer-pris-return/engineer-pris-return-controller-find-one';
import { engineerPrisReturnControllerRemove } from '../fn/engineer-pris-return/engineer-pris-return-controller-remove';
import { EngineerPrisReturnControllerRemove$Params } from '../fn/engineer-pris-return/engineer-pris-return-controller-remove';
import { engineerPrisReturnControllerUpdate } from '../fn/engineer-pris-return/engineer-pris-return-controller-update';
import { EngineerPrisReturnControllerUpdate$Params } from '../fn/engineer-pris-return/engineer-pris-return-controller-update';

@Injectable({ providedIn: 'root' })
export class EngineerPrisReturnService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `engineerPrisReturnControllerFindAll()` */
  static readonly EngineerPrisReturnControllerFindAllPath = '/amims/engineer_pris_return/engineer_pris_return';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `engineerPrisReturnControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  engineerPrisReturnControllerFindAll$Response(params?: EngineerPrisReturnControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsEngineerPrisReturnDto>;
'total'?: number;
}>> {
    return engineerPrisReturnControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `engineerPrisReturnControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  engineerPrisReturnControllerFindAll(params?: EngineerPrisReturnControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsEngineerPrisReturnDto>;
'total'?: number;
}> {
    return this.engineerPrisReturnControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsEngineerPrisReturnDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsEngineerPrisReturnDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `engineerPrisReturnControllerCreate()` */
  static readonly EngineerPrisReturnControllerCreatePath = '/amims/engineer_pris_return/engineer_pris_return';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `engineerPrisReturnControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  engineerPrisReturnControllerCreate$Response(params: EngineerPrisReturnControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsEngineerPrisReturnDto;
}>> {
    return engineerPrisReturnControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `engineerPrisReturnControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  engineerPrisReturnControllerCreate(params: EngineerPrisReturnControllerCreate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsEngineerPrisReturnDto;
}> {
    return this.engineerPrisReturnControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsEngineerPrisReturnDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsEngineerPrisReturnDto;
} => r.body)
    );
  }

  /** Path part for operation `engineerPrisReturnControllerFindOne()` */
  static readonly EngineerPrisReturnControllerFindOnePath = '/amims/engineer_pris_return/engineer_pris_return/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `engineerPrisReturnControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  engineerPrisReturnControllerFindOne$Response(params: EngineerPrisReturnControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsEngineerPrisReturnDto;
}>> {
    return engineerPrisReturnControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `engineerPrisReturnControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  engineerPrisReturnControllerFindOne(params: EngineerPrisReturnControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsEngineerPrisReturnDto;
}> {
    return this.engineerPrisReturnControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsEngineerPrisReturnDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsEngineerPrisReturnDto;
} => r.body)
    );
  }

  /** Path part for operation `engineerPrisReturnControllerUpdate()` */
  static readonly EngineerPrisReturnControllerUpdatePath = '/amims/engineer_pris_return/engineer_pris_return/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `engineerPrisReturnControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  engineerPrisReturnControllerUpdate$Response(params: EngineerPrisReturnControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsEngineerPrisReturnDto;
}>> {
    return engineerPrisReturnControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `engineerPrisReturnControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  engineerPrisReturnControllerUpdate(params: EngineerPrisReturnControllerUpdate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsEngineerPrisReturnDto;
}> {
    return this.engineerPrisReturnControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsEngineerPrisReturnDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsEngineerPrisReturnDto;
} => r.body)
    );
  }

  /** Path part for operation `engineerPrisReturnControllerRemove()` */
  static readonly EngineerPrisReturnControllerRemovePath = '/amims/engineer_pris_return/engineer_pris_return/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `engineerPrisReturnControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  engineerPrisReturnControllerRemove$Response(params: EngineerPrisReturnControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsEngineerPrisReturnDto;
}>> {
    return engineerPrisReturnControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `engineerPrisReturnControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  engineerPrisReturnControllerRemove(params: EngineerPrisReturnControllerRemove$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsEngineerPrisReturnDto;
}> {
    return this.engineerPrisReturnControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsEngineerPrisReturnDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsEngineerPrisReturnDto;
} => r.body)
    );
  }

}
