import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsSiteWidgetDto } from '../models/amims-site-widget-dto';
import { SiteWidgetControllerFindAll$Params } from '../fn/site-widget/site-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class SiteWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `siteWidgetControllerFindAll()` */
    static readonly SiteWidgetControllerFindAllPath = "/amims/site/site_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `siteWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    siteWidgetControllerFindAll$Response(params: SiteWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsSiteWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `siteWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    siteWidgetControllerFindAll(params: SiteWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsSiteWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SiteWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SiteWidgetService>;
}
