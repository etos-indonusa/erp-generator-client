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

import { AmimsEngineerPmtrWidgetDto } from '../models/amims-engineer-pmtr-widget-dto';
import { engineerPmtrWidgetControllerFindAll } from '../fn/engineer-pmtr-widget/engineer-pmtr-widget-controller-find-all';
import { EngineerPmtrWidgetControllerFindAll$Params } from '../fn/engineer-pmtr-widget/engineer-pmtr-widget-controller-find-all';

@Injectable({ providedIn: 'root' })
export class EngineerPmtrWidgetService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `engineerPmtrWidgetControllerFindAll()` */
  static readonly EngineerPmtrWidgetControllerFindAllPath = '/amims/engineer_pmtr/engineer_pmtr_widget';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `engineerPmtrWidgetControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  engineerPmtrWidgetControllerFindAll$Response(params: EngineerPmtrWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsEngineerPmtrWidgetDto>;
'total'?: number;
}>> {
    return engineerPmtrWidgetControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `engineerPmtrWidgetControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  engineerPmtrWidgetControllerFindAll(params: EngineerPmtrWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsEngineerPmtrWidgetDto>;
'total'?: number;
}> {
    return this.engineerPmtrWidgetControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsEngineerPmtrWidgetDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsEngineerPmtrWidgetDto>;
'total'?: number;
} => r.body)
    );
  }

}
