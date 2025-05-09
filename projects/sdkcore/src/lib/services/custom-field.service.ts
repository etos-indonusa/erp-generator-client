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

import { customFieldControllerCreate } from '../fn/custom-field/custom-field-controller-create';
import { CustomFieldControllerCreate$Params } from '../fn/custom-field/custom-field-controller-create';
import { customFieldControllerFindAll } from '../fn/custom-field/custom-field-controller-find-all';
import { CustomFieldControllerFindAll$Params } from '../fn/custom-field/custom-field-controller-find-all';
import { customFieldControllerFindOne } from '../fn/custom-field/custom-field-controller-find-one';
import { CustomFieldControllerFindOne$Params } from '../fn/custom-field/custom-field-controller-find-one';
import { customFieldControllerRemove } from '../fn/custom-field/custom-field-controller-remove';
import { CustomFieldControllerRemove$Params } from '../fn/custom-field/custom-field-controller-remove';
import { customFieldControllerUpdate } from '../fn/custom-field/custom-field-controller-update';
import { CustomFieldControllerUpdate$Params } from '../fn/custom-field/custom-field-controller-update';
import { ToolsCustomFieldDto } from '../models/tools-custom-field-dto';

@Injectable({ providedIn: 'root' })
export class CustomFieldService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `customFieldControllerFindAll()` */
  static readonly CustomFieldControllerFindAllPath = '/auth/custom_field/custom_field';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customFieldControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  customFieldControllerFindAll$Response(params?: CustomFieldControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<ToolsCustomFieldDto>;
'total'?: number;
}>> {
    return customFieldControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customFieldControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  customFieldControllerFindAll(params?: CustomFieldControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<ToolsCustomFieldDto>;
'total'?: number;
}> {
    return this.customFieldControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<ToolsCustomFieldDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<ToolsCustomFieldDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `customFieldControllerCreate()` */
  static readonly CustomFieldControllerCreatePath = '/auth/custom_field/custom_field';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customFieldControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customFieldControllerCreate$Response(params: CustomFieldControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: ToolsCustomFieldDto;
}>> {
    return customFieldControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customFieldControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customFieldControllerCreate(params: CustomFieldControllerCreate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: ToolsCustomFieldDto;
}> {
    return this.customFieldControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: ToolsCustomFieldDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: ToolsCustomFieldDto;
} => r.body)
    );
  }

  /** Path part for operation `customFieldControllerFindOne()` */
  static readonly CustomFieldControllerFindOnePath = '/auth/custom_field/custom_field/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customFieldControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  customFieldControllerFindOne$Response(params: CustomFieldControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: ToolsCustomFieldDto;
}>> {
    return customFieldControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customFieldControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  customFieldControllerFindOne(params: CustomFieldControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: ToolsCustomFieldDto;
}> {
    return this.customFieldControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: ToolsCustomFieldDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: ToolsCustomFieldDto;
} => r.body)
    );
  }

  /** Path part for operation `customFieldControllerUpdate()` */
  static readonly CustomFieldControllerUpdatePath = '/auth/custom_field/custom_field/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customFieldControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customFieldControllerUpdate$Response(params: CustomFieldControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: ToolsCustomFieldDto;
}>> {
    return customFieldControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customFieldControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customFieldControllerUpdate(params: CustomFieldControllerUpdate$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: ToolsCustomFieldDto;
}> {
    return this.customFieldControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: ToolsCustomFieldDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: ToolsCustomFieldDto;
} => r.body)
    );
  }

  /** Path part for operation `customFieldControllerRemove()` */
  static readonly CustomFieldControllerRemovePath = '/auth/custom_field/custom_field/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customFieldControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  customFieldControllerRemove$Response(params: CustomFieldControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: ToolsCustomFieldDto;
}>> {
    return customFieldControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customFieldControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  customFieldControllerRemove(params: CustomFieldControllerRemove$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: ToolsCustomFieldDto;
}> {
    return this.customFieldControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: ToolsCustomFieldDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: ToolsCustomFieldDto;
} => r.body)
    );
  }

}
