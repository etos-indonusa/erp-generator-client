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

import { AmimsPartInstallOldWidgetDto } from '../models/amims-part-install-old-widget-dto';
import { partInstallOldWidgetControllerFindAll } from '../fn/part-install-old-widget/part-install-old-widget-controller-find-all';
import { PartInstallOldWidgetControllerFindAll$Params } from '../fn/part-install-old-widget/part-install-old-widget-controller-find-all';

@Injectable({ providedIn: 'root' })
export class PartInstallOldWidgetService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `partInstallOldWidgetControllerFindAll()` */
  static readonly PartInstallOldWidgetControllerFindAllPath = '/amims/part_install_old/part_install_old_widget';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `partInstallOldWidgetControllerFindAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  partInstallOldWidgetControllerFindAll$Response(params: PartInstallOldWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPartInstallOldWidgetDto>;
'total'?: number;
}>> {
    return partInstallOldWidgetControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `partInstallOldWidgetControllerFindAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  partInstallOldWidgetControllerFindAll(params: PartInstallOldWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPartInstallOldWidgetDto>;
'total'?: number;
}> {
    return this.partInstallOldWidgetControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPartInstallOldWidgetDto>;
'total'?: number;
}>): {
'code'?: number;
'pesan'?: string;
'data'?: Array<AmimsPartInstallOldWidgetDto>;
'total'?: number;
} => r.body)
    );
  }

}
