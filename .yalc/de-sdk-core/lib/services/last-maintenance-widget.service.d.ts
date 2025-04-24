import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLastMaintenanceWidgetDto } from '../models/amims-last-maintenance-widget-dto';
import { LastMaintenanceWidgetControllerFindAll$Params } from '../fn/last-maintenance-widget/last-maintenance-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class LastMaintenanceWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `lastMaintenanceWidgetControllerFindAll()` */
    static readonly LastMaintenanceWidgetControllerFindAllPath = "/amims/last_maintenance/last_maintenance_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `lastMaintenanceWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    lastMaintenanceWidgetControllerFindAll$Response(params: LastMaintenanceWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLastMaintenanceWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `lastMaintenanceWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    lastMaintenanceWidgetControllerFindAll(params: LastMaintenanceWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLastMaintenanceWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LastMaintenanceWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LastMaintenanceWidgetService>;
}
