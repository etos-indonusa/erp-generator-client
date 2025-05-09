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

import { AmimsLocationFlightReportDto } from '../models/amims-location-flight-report-dto';
import { locationFlightReportControllerFindAll } from '../fn/location-flight-report/location-flight-report-controller-find-all';
import { LocationFlightReportControllerFindAll$Params } from '../fn/location-flight-report/location-flight-report-controller-find-all';
import { locationFlightReportControllerFindOne } from '../fn/location-flight-report/location-flight-report-controller-find-one';
import { LocationFlightReportControllerFindOne$Params } from '../fn/location-flight-report/location-flight-report-controller-find-one';

@Injectable({ providedIn: 'root' })
export class LocationFlightReportService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `locationFlightReportControllerFindAll()` */
  static readonly LocationFlightReportControllerFindAllPath = '/amims/location_flight/location_flight_report/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `locationFlightReportControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  locationFlightReportControllerFindAll$Response(params: LocationFlightReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsLocationFlightReportDto>;
'total'?: number;
}>> {
    return locationFlightReportControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `locationFlightReportControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  locationFlightReportControllerFindAll(params: LocationFlightReportControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsLocationFlightReportDto>;
'total'?: number;
}> {
    return this.locationFlightReportControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsLocationFlightReportDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsLocationFlightReportDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `locationFlightReportControllerFindOne()` */
  static readonly LocationFlightReportControllerFindOnePath = '/amims/location_flight/location_flight_report/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `locationFlightReportControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  locationFlightReportControllerFindOne$Response(params: LocationFlightReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLocationFlightReportDto;
}>> {
    return locationFlightReportControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `locationFlightReportControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  locationFlightReportControllerFindOne(params: LocationFlightReportControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLocationFlightReportDto;
}> {
    return this.locationFlightReportControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsLocationFlightReportDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsLocationFlightReportDto;
} => r.body)
    );
  }

}
