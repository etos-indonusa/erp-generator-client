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

import { AmimsTypeOfworkReportDto } from '../models/amims-type-ofwork-report-dto';
import { typeOfworkReportControllerFindAll } from '../fn/type-ofwork-report/type-ofwork-report-controller-find-all';
import { TypeOfworkReportControllerFindAll$Params } from '../fn/type-ofwork-report/type-ofwork-report-controller-find-all';
import { typeOfworkReportControllerFindOne } from '../fn/type-ofwork-report/type-ofwork-report-controller-find-one';
import { TypeOfworkReportControllerFindOne$Params } from '../fn/type-ofwork-report/type-ofwork-report-controller-find-one';

@Injectable({ providedIn: 'root' })
export class TypeOfworkReportService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `typeOfworkReportControllerFindAll()` */
  static readonly TypeOfworkReportControllerFindAllPath = '/amims/type_ofwork/type_ofwork_report/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `typeOfworkReportControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  typeOfworkReportControllerFindAll$Response(params: TypeOfworkReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsTypeOfworkReportDto>;
'total'?: number;
}>> {
    return typeOfworkReportControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `typeOfworkReportControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  typeOfworkReportControllerFindAll(params: TypeOfworkReportControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsTypeOfworkReportDto>;
'total'?: number;
}> {
    return this.typeOfworkReportControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsTypeOfworkReportDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsTypeOfworkReportDto>;
'total'?: number;
} => r.body)
    );
  }

  /** Path part for operation `typeOfworkReportControllerFindOne()` */
  static readonly TypeOfworkReportControllerFindOnePath = '/amims/type_ofwork/type_ofwork_report/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `typeOfworkReportControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  typeOfworkReportControllerFindOne$Response(params: TypeOfworkReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsTypeOfworkReportDto;
}>> {
    return typeOfworkReportControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `typeOfworkReportControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  typeOfworkReportControllerFindOne(params: TypeOfworkReportControllerFindOne$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsTypeOfworkReportDto;
}> {
    return this.typeOfworkReportControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: AmimsTypeOfworkReportDto;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: AmimsTypeOfworkReportDto;
} => r.body)
    );
  }

}
