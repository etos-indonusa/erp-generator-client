import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLogProcessWidgetDto } from '../models/amims-log-process-widget-dto';
import { LogProcessWidgetControllerFindAll$Params } from '../fn/log-process-widget/log-process-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class LogProcessWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `logProcessWidgetControllerFindAll()` */
    static readonly LogProcessWidgetControllerFindAllPath = "/amims/log_process/log_process_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logProcessWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logProcessWidgetControllerFindAll$Response(params: LogProcessWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogProcessWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logProcessWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logProcessWidgetControllerFindAll(params: LogProcessWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogProcessWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogProcessWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LogProcessWidgetService>;
}
