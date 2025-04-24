import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMpcGseWidgetDto } from '../models/amims-mpc-gse-widget-dto';
import { MpcGseWidgetControllerFindAll$Params } from '../fn/mpc-gse-widget/mpc-gse-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class MpcGseWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `mpcGseWidgetControllerFindAll()` */
    static readonly MpcGseWidgetControllerFindAllPath = "/amims/mpc_gse/mpc_gse_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcGseWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcGseWidgetControllerFindAll$Response(params: MpcGseWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcGseWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcGseWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcGseWidgetControllerFindAll(params: MpcGseWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcGseWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MpcGseWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MpcGseWidgetService>;
}
