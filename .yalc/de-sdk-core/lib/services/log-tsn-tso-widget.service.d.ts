import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLogTsnTsoWidgetDto } from '../models/amims-log-tsn-tso-widget-dto';
import { LogTsnTsoWidgetControllerFindAll$Params } from '../fn/log-tsn-tso-widget/log-tsn-tso-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class LogTsnTsoWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `logTsnTsoWidgetControllerFindAll()` */
    static readonly LogTsnTsoWidgetControllerFindAllPath = "/amims/log_tsn_tso/log_tsn_tso_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logTsnTsoWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logTsnTsoWidgetControllerFindAll$Response(params: LogTsnTsoWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogTsnTsoWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logTsnTsoWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logTsnTsoWidgetControllerFindAll(params: LogTsnTsoWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogTsnTsoWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogTsnTsoWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LogTsnTsoWidgetService>;
}
