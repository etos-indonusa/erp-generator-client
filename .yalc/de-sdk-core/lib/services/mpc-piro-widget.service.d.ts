import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMpcPiroWidgetDto } from '../models/amims-mpc-piro-widget-dto';
import { MpcPiroWidgetControllerFindAll$Params } from '../fn/mpc-piro-widget/mpc-piro-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class MpcPiroWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `mpcPiroWidgetControllerFindAll()` */
    static readonly MpcPiroWidgetControllerFindAllPath = "/amims/mpc_piro/mpc_piro_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcPiroWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcPiroWidgetControllerFindAll$Response(params: MpcPiroWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcPiroWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcPiroWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcPiroWidgetControllerFindAll(params: MpcPiroWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcPiroWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MpcPiroWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MpcPiroWidgetService>;
}
