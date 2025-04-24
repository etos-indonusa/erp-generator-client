import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMpcWpWidgetDto } from '../models/amims-mpc-wp-widget-dto';
import { MpcWpWidgetControllerFindAll$Params } from '../fn/mpc-wp-widget/mpc-wp-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class MpcWpWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `mpcWpWidgetControllerFindAll()` */
    static readonly MpcWpWidgetControllerFindAllPath = "/amims/mpc_wp/mpc_wp_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcWpWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcWpWidgetControllerFindAll$Response(params: MpcWpWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcWpWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcWpWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcWpWidgetControllerFindAll(params: MpcWpWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcWpWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MpcWpWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MpcWpWidgetService>;
}
