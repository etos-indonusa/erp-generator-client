import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMpcJoWidgetDto } from '../models/amims-mpc-jo-widget-dto';
import { MpcJoWidgetControllerFindAll$Params } from '../fn/mpc-jo-widget/mpc-jo-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class MpcJoWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `mpcJoWidgetControllerFindAll()` */
    static readonly MpcJoWidgetControllerFindAllPath = "/amims/mpc_jo/mpc_jo_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcJoWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcJoWidgetControllerFindAll$Response(params: MpcJoWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcJoWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcJoWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcJoWidgetControllerFindAll(params: MpcJoWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcJoWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MpcJoWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MpcJoWidgetService>;
}
