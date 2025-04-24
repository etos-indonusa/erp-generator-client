import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTechLogItemWidgetDto } from '../models/amims-tech-log-item-widget-dto';
import { TechLogItemWidgetControllerFindAll$Params } from '../fn/tech-log-item-widget/tech-log-item-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class TechLogItemWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `techLogItemWidgetControllerFindAll()` */
    static readonly TechLogItemWidgetControllerFindAllPath = "/amims/tech_log_item/tech_log_item_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogItemWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogItemWidgetControllerFindAll$Response(params: TechLogItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogItemWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogItemWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogItemWidgetControllerFindAll(params: TechLogItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogItemWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TechLogItemWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TechLogItemWidgetService>;
}
