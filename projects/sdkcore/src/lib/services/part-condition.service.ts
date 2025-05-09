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

import { AmimsPartConditionDto } from '../models/amims-part-condition-dto';
import { partConditionControllerCreate } from '../fn/part-condition/part-condition-controller-create';
import { PartConditionControllerCreate$Params } from '../fn/part-condition/part-condition-controller-create';
import { partConditionControllerFindAll } from '../fn/part-condition/part-condition-controller-find-all';
import { PartConditionControllerFindAll$Params } from '../fn/part-condition/part-condition-controller-find-all';
import { partConditionControllerFindOne } from '../fn/part-condition/part-condition-controller-find-one';
import { PartConditionControllerFindOne$Params } from '../fn/part-condition/part-condition-controller-find-one';
import { partConditionControllerRemove } from '../fn/part-condition/part-condition-controller-remove';
import { PartConditionControllerRemove$Params } from '../fn/part-condition/part-condition-controller-remove';
import { partConditionControllerUpdate } from '../fn/part-condition/part-condition-controller-update';
import { PartConditionControllerUpdate$Params } from '../fn/part-condition/part-condition-controller-update';

@Injectable({ providedIn: 'root' })
export class PartConditionService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `partConditionControllerFindAll()` */
  static readonly PartConditionControllerFindAllPath = '/amims/part_condition/part_condition';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `partConditionControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  partConditionControllerFindAll$Response(params?: PartConditionControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPartConditionDto>;
'total'?: number;
}>> {
    return partConditionControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `partConditionControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  partConditionControllerFindAll(params?: PartConditionControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPartConditionDto>;
'total'?: number;
}> {
    return this.partConditionControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPartConditionDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPartConditionDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `partConditionControllerCreate()` */
  static readonly PartConditionControllerCreatePath = '/amims/part_condition/part_condition';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `partConditionControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  partConditionControllerCreate$Response(params: PartConditionControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPartConditionDto;
}>> {
    return partConditionControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `partConditionControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  partConditionControllerCreate(params: PartConditionControllerCreate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPartConditionDto;
}> {
    return this.partConditionControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPartConditionDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsPartConditionDto;
} => r.body)
    );
  }

  /** Path part for operation `partConditionControllerFindOne()` */
  static readonly PartConditionControllerFindOnePath = '/amims/part_condition/part_condition/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `partConditionControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  partConditionControllerFindOne$Response(params: PartConditionControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPartConditionDto;
}>> {
    return partConditionControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `partConditionControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  partConditionControllerFindOne(params: PartConditionControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPartConditionDto;
}> {
    return this.partConditionControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPartConditionDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsPartConditionDto;
} => r.body)
    );
  }

  /** Path part for operation `partConditionControllerUpdate()` */
  static readonly PartConditionControllerUpdatePath = '/amims/part_condition/part_condition/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `partConditionControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  partConditionControllerUpdate$Response(params: PartConditionControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPartConditionDto;
}>> {
    return partConditionControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `partConditionControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  partConditionControllerUpdate(params: PartConditionControllerUpdate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPartConditionDto;
}> {
    return this.partConditionControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPartConditionDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsPartConditionDto;
} => r.body)
    );
  }

  /** Path part for operation `partConditionControllerRemove()` */
  static readonly PartConditionControllerRemovePath = '/amims/part_condition/part_condition/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `partConditionControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  partConditionControllerRemove$Response(params: PartConditionControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPartConditionDto;
}>> {
    return partConditionControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `partConditionControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  partConditionControllerRemove(params: PartConditionControllerRemove$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPartConditionDto;
}> {
    return this.partConditionControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPartConditionDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsPartConditionDto;
} => r.body)
    );
  }

}
