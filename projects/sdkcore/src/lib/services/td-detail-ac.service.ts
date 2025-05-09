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

import { AmimsTdDetailAcDto } from '../models/amims-td-detail-ac-dto';
import { tdDetailAcControllerCreate } from '../fn/td-detail-ac/td-detail-ac-controller-create';
import { TdDetailAcControllerCreate$Params } from '../fn/td-detail-ac/td-detail-ac-controller-create';
import { tdDetailAcControllerFindAll } from '../fn/td-detail-ac/td-detail-ac-controller-find-all';
import { TdDetailAcControllerFindAll$Params } from '../fn/td-detail-ac/td-detail-ac-controller-find-all';
import { tdDetailAcControllerFindOne } from '../fn/td-detail-ac/td-detail-ac-controller-find-one';
import { TdDetailAcControllerFindOne$Params } from '../fn/td-detail-ac/td-detail-ac-controller-find-one';
import { tdDetailAcControllerRemove } from '../fn/td-detail-ac/td-detail-ac-controller-remove';
import { TdDetailAcControllerRemove$Params } from '../fn/td-detail-ac/td-detail-ac-controller-remove';
import { tdDetailAcControllerUpdate } from '../fn/td-detail-ac/td-detail-ac-controller-update';
import { TdDetailAcControllerUpdate$Params } from '../fn/td-detail-ac/td-detail-ac-controller-update';

@Injectable({ providedIn: 'root' })
export class TdDetailAcService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `tdDetailAcControllerFindAll()` */
  static readonly TdDetailAcControllerFindAllPath = '/amims/td_detail_ac/td_detail_ac';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tdDetailAcControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  tdDetailAcControllerFindAll$Response(params?: TdDetailAcControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsTdDetailAcDto>;
'total'?: number;
}>> {
    return tdDetailAcControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tdDetailAcControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tdDetailAcControllerFindAll(params?: TdDetailAcControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsTdDetailAcDto>;
'total'?: number;
}> {
    return this.tdDetailAcControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsTdDetailAcDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsTdDetailAcDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `tdDetailAcControllerCreate()` */
  static readonly TdDetailAcControllerCreatePath = '/amims/td_detail_ac/td_detail_ac';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tdDetailAcControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tdDetailAcControllerCreate$Response(params: TdDetailAcControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsTdDetailAcDto;
}>> {
    return tdDetailAcControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tdDetailAcControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tdDetailAcControllerCreate(params: TdDetailAcControllerCreate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsTdDetailAcDto;
}> {
    return this.tdDetailAcControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsTdDetailAcDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsTdDetailAcDto;
} => r.body)
    );
  }

  /** Path part for operation `tdDetailAcControllerFindOne()` */
  static readonly TdDetailAcControllerFindOnePath = '/amims/td_detail_ac/td_detail_ac/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tdDetailAcControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  tdDetailAcControllerFindOne$Response(params: TdDetailAcControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsTdDetailAcDto;
}>> {
    return tdDetailAcControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tdDetailAcControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tdDetailAcControllerFindOne(params: TdDetailAcControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsTdDetailAcDto;
}> {
    return this.tdDetailAcControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsTdDetailAcDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsTdDetailAcDto;
} => r.body)
    );
  }

  /** Path part for operation `tdDetailAcControllerUpdate()` */
  static readonly TdDetailAcControllerUpdatePath = '/amims/td_detail_ac/td_detail_ac/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tdDetailAcControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tdDetailAcControllerUpdate$Response(params: TdDetailAcControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsTdDetailAcDto;
}>> {
    return tdDetailAcControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tdDetailAcControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tdDetailAcControllerUpdate(params: TdDetailAcControllerUpdate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsTdDetailAcDto;
}> {
    return this.tdDetailAcControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsTdDetailAcDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsTdDetailAcDto;
} => r.body)
    );
  }

  /** Path part for operation `tdDetailAcControllerRemove()` */
  static readonly TdDetailAcControllerRemovePath = '/amims/td_detail_ac/td_detail_ac/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tdDetailAcControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  tdDetailAcControllerRemove$Response(params: TdDetailAcControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsTdDetailAcDto;
}>> {
    return tdDetailAcControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tdDetailAcControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tdDetailAcControllerRemove(params: TdDetailAcControllerRemove$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsTdDetailAcDto;
}> {
    return this.tdDetailAcControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsTdDetailAcDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsTdDetailAcDto;
} => r.body)
    );
  }

}
