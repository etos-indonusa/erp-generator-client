import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTechLogEngineCheckWidgetDto } from '../models/amims-tech-log-engine-check-widget-dto';
import { TechLogEngineCheckWidgetControllerFindAll$Params } from '../fn/tech-log-engine-check-widget/tech-log-engine-check-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class TechLogEngineCheckWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `techLogEngineCheckWidgetControllerFindAll()` */
    static readonly TechLogEngineCheckWidgetControllerFindAllPath = "/amims/tech_log_engine_check/tech_log_engine_check_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogEngineCheckWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogEngineCheckWidgetControllerFindAll$Response(params: TechLogEngineCheckWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogEngineCheckWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogEngineCheckWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogEngineCheckWidgetControllerFindAll(params: TechLogEngineCheckWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogEngineCheckWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TechLogEngineCheckWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TechLogEngineCheckWidgetService>;
}
