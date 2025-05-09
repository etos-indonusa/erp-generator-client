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

import { AmimsPilotReportDto } from '../models/amims-pilot-report-dto';
import { pilotReportControllerFindAll } from '../fn/pilot-report/pilot-report-controller-find-all';
import { PilotReportControllerFindAll$Params } from '../fn/pilot-report/pilot-report-controller-find-all';
import { pilotReportControllerFindOne } from '../fn/pilot-report/pilot-report-controller-find-one';
import { PilotReportControllerFindOne$Params } from '../fn/pilot-report/pilot-report-controller-find-one';

@Injectable({ providedIn: 'root' })
export class PilotReportService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `pilotReportControllerFindAll()` */
  static readonly PilotReportControllerFindAllPath = '/amims/pilot/pilot_report/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pilotReportControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pilotReportControllerFindAll$Response(params: PilotReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPilotReportDto>;
'total'?: number;
}>> {
    return pilotReportControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pilotReportControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pilotReportControllerFindAll(params: PilotReportControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPilotReportDto>;
'total'?: number;
}> {
    return this.pilotReportControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPilotReportDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPilotReportDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `pilotReportControllerFindOne()` */
  static readonly PilotReportControllerFindOnePath = '/amims/pilot/pilot_report/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pilotReportControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  pilotReportControllerFindOne$Response(params: PilotReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPilotReportDto;
}>> {
    return pilotReportControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pilotReportControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  pilotReportControllerFindOne(params: PilotReportControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPilotReportDto;
}> {
    return this.pilotReportControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsPilotReportDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsPilotReportDto;
} => r.body)
    );
  }

}
