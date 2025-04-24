import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTechLogJoWidgetDto } from '../models/amims-tech-log-jo-widget-dto';
import { TechLogJoWidgetControllerFindAll$Params } from '../fn/tech-log-jo-widget/tech-log-jo-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class TechLogJoWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `techLogJoWidgetControllerFindAll()` */
    static readonly TechLogJoWidgetControllerFindAllPath = "/amims/tech_log_jo/tech_log_jo_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogJoWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogJoWidgetControllerFindAll$Response(params: TechLogJoWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogJoWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogJoWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogJoWidgetControllerFindAll(params: TechLogJoWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogJoWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TechLogJoWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TechLogJoWidgetService>;
}
