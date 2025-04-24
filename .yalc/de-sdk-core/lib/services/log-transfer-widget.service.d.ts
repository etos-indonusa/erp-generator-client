import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLogTransferWidgetDto } from '../models/amims-log-transfer-widget-dto';
import { LogTransferWidgetControllerFindAll$Params } from '../fn/log-transfer-widget/log-transfer-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class LogTransferWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `logTransferWidgetControllerFindAll()` */
    static readonly LogTransferWidgetControllerFindAllPath = "/amims/log_transfer/log_transfer_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `logTransferWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logTransferWidgetControllerFindAll$Response(params: LogTransferWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogTransferWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `logTransferWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    logTransferWidgetControllerFindAll(params: LogTransferWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLogTransferWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogTransferWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LogTransferWidgetService>;
}
