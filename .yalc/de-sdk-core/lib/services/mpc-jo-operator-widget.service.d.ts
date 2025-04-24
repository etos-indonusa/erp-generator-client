import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMpcJoOperatorWidgetDto } from '../models/amims-mpc-jo-operator-widget-dto';
import { MpcJoOperatorWidgetControllerFindAll$Params } from '../fn/mpc-jo-operator-widget/mpc-jo-operator-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class MpcJoOperatorWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `mpcJoOperatorWidgetControllerFindAll()` */
    static readonly MpcJoOperatorWidgetControllerFindAllPath = "/amims/mpc_jo_operator/mpc_jo_operator_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcJoOperatorWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcJoOperatorWidgetControllerFindAll$Response(params: MpcJoOperatorWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcJoOperatorWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcJoOperatorWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcJoOperatorWidgetControllerFindAll(params: MpcJoOperatorWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcJoOperatorWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MpcJoOperatorWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MpcJoOperatorWidgetService>;
}
