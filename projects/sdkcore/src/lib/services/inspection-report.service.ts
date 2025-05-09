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

import { AmimsInspectionReportDto } from '../models/amims-inspection-report-dto';
import { inspectionReportControllerFindAll } from '../fn/inspection-report/inspection-report-controller-find-all';
import { InspectionReportControllerFindAll$Params } from '../fn/inspection-report/inspection-report-controller-find-all';
import { inspectionReportControllerFindOne } from '../fn/inspection-report/inspection-report-controller-find-one';
import { InspectionReportControllerFindOne$Params } from '../fn/inspection-report/inspection-report-controller-find-one';

@Injectable({ providedIn: 'root' })
export class InspectionReportService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `inspectionReportControllerFindAll()` */
  static readonly InspectionReportControllerFindAllPath = '/amims/inspection/inspection_report/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `inspectionReportControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  inspectionReportControllerFindAll$Response(params: InspectionReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsInspectionReportDto>;
'total'?: number;
}>> {
    return inspectionReportControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `inspectionReportControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  inspectionReportControllerFindAll(params: InspectionReportControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsInspectionReportDto>;
'total'?: number;
}> {
    return this.inspectionReportControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsInspectionReportDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsInspectionReportDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `inspectionReportControllerFindOne()` */
  static readonly InspectionReportControllerFindOnePath = '/amims/inspection/inspection_report/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `inspectionReportControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  inspectionReportControllerFindOne$Response(params: InspectionReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsInspectionReportDto;
}>> {
    return inspectionReportControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `inspectionReportControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  inspectionReportControllerFindOne(params: InspectionReportControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsInspectionReportDto;
}> {
    return this.inspectionReportControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsInspectionReportDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsInspectionReportDto;
} => r.body)
    );
  }

}
