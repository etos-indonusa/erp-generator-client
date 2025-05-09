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

import { AmimsTechDiscrepanciesReportDto } from '../models/amims-tech-discrepancies-report-dto';
import { techDiscrepanciesReportControllerFindAll } from '../fn/tech-discrepancies-report/tech-discrepancies-report-controller-find-all';
import { TechDiscrepanciesReportControllerFindAll$Params } from '../fn/tech-discrepancies-report/tech-discrepancies-report-controller-find-all';
import { techDiscrepanciesReportControllerFindOne } from '../fn/tech-discrepancies-report/tech-discrepancies-report-controller-find-one';
import { TechDiscrepanciesReportControllerFindOne$Params } from '../fn/tech-discrepancies-report/tech-discrepancies-report-controller-find-one';

@Injectable({ providedIn: 'root' })
export class TechDiscrepanciesReportService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `techDiscrepanciesReportControllerFindAll()` */
  static readonly TechDiscrepanciesReportControllerFindAllPath = '/amims/tech_discrepancies/tech_discrepancies_report/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `techDiscrepanciesReportControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  techDiscrepanciesReportControllerFindAll$Response(params: TechDiscrepanciesReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsTechDiscrepanciesReportDto>;
'total'?: number;
}>> {
    return techDiscrepanciesReportControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `techDiscrepanciesReportControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  techDiscrepanciesReportControllerFindAll(params: TechDiscrepanciesReportControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsTechDiscrepanciesReportDto>;
'total'?: number;
}> {
    return this.techDiscrepanciesReportControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsTechDiscrepanciesReportDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsTechDiscrepanciesReportDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `techDiscrepanciesReportControllerFindOne()` */
  static readonly TechDiscrepanciesReportControllerFindOnePath = '/amims/tech_discrepancies/tech_discrepancies_report/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `techDiscrepanciesReportControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  techDiscrepanciesReportControllerFindOne$Response(params: TechDiscrepanciesReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsTechDiscrepanciesReportDto;
}>> {
    return techDiscrepanciesReportControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `techDiscrepanciesReportControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  techDiscrepanciesReportControllerFindOne(params: TechDiscrepanciesReportControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsTechDiscrepanciesReportDto;
}> {
    return this.techDiscrepanciesReportControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsTechDiscrepanciesReportDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsTechDiscrepanciesReportDto;
} => r.body)
    );
  }

}
