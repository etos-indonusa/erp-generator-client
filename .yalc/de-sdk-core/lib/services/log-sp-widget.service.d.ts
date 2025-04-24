import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLogSpWidgetDto } from '../models/amims-log-sp-widget-dto';
import { LogSpWidgetControllerFindAll$Params } from '../fn/log-sp-widget/log-sp-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class LogSpWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `logSpWidgetControllerFindAll()` */
    static readonly LogSpWidgetControllerFindAllPath = "/amims/log_sp/log_sp_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logSpWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logSpWidgetControllerFindAll$Response(params: LogSpWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogSpWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logSpWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logSpWidgetControllerFindAll(params: LogSpWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogSpWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogSpWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LogSpWidgetService>;
}
