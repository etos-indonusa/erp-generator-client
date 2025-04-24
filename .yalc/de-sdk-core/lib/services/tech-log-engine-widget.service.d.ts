import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTechLogEngineWidgetDto } from '../models/amims-tech-log-engine-widget-dto';
import { TechLogEngineWidgetControllerFindAll$Params } from '../fn/tech-log-engine-widget/tech-log-engine-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class TechLogEngineWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `techLogEngineWidgetControllerFindAll()` */
    static readonly TechLogEngineWidgetControllerFindAllPath = "/amims/tech_log_engine/tech_log_engine_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogEngineWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogEngineWidgetControllerFindAll$Response(params: TechLogEngineWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogEngineWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogEngineWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogEngineWidgetControllerFindAll(params: TechLogEngineWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogEngineWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TechLogEngineWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TechLogEngineWidgetService>;
}
