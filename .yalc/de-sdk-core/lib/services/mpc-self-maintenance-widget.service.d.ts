import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMpcSelfMaintenanceWidgetDto } from '../models/amims-mpc-self-maintenance-widget-dto';
import { MpcSelfMaintenanceWidgetControllerFindAll$Params } from '../fn/mpc-self-maintenance-widget/mpc-self-maintenance-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class MpcSelfMaintenanceWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `mpcSelfMaintenanceWidgetControllerFindAll()` */
    static readonly MpcSelfMaintenanceWidgetControllerFindAllPath = "/amims/mpc_self_maintenance/mpc_self_maintenance_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcSelfMaintenanceWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcSelfMaintenanceWidgetControllerFindAll$Response(params: MpcSelfMaintenanceWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcSelfMaintenanceWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcSelfMaintenanceWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcSelfMaintenanceWidgetControllerFindAll(params: MpcSelfMaintenanceWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcSelfMaintenanceWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MpcSelfMaintenanceWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MpcSelfMaintenanceWidgetService>;
}
