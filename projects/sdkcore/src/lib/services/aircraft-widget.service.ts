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

import { aircraftWidgetControllerFindAll } from '../fn/aircraft-widget/aircraft-widget-controller-find-all';
import { AircraftWidgetControllerFindAll$Params } from '../fn/aircraft-widget/aircraft-widget-controller-find-all';
import { AmimsAircraftWidgetDto } from '../models/amims-aircraft-widget-dto';

@Injectable({ providedIn: 'root' })
export class AircraftWidgetService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `aircraftWidgetControllerFindAll()` */
  static readonly AircraftWidgetControllerFindAllPath = '/amims/aircraft/aircraft_widget';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aircraftWidgetControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  aircraftWidgetControllerFindAll$Response(params: AircraftWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsAircraftWidgetDto>;
'total'?: number;
}>> {
    return aircraftWidgetControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `aircraftWidgetControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  aircraftWidgetControllerFindAll(params: AircraftWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsAircraftWidgetDto>;
'total'?: number;
}> {
    return this.aircraftWidgetControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsAircraftWidgetDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsAircraftWidgetDto>;
'total'?: number;
} => r.body)
    );
  }

}
