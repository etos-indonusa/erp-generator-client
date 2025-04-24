import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMaintenanceWidgetDto } from '../models/amims-maintenance-widget-dto';
import { MaintenanceWidgetControllerFindAll$Params } from '../fn/maintenance-widget/maintenance-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class MaintenanceWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `maintenanceWidgetControllerFindAll()` */
    static readonly MaintenanceWidgetControllerFindAllPath = "/amims/maintenance/maintenance_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `maintenanceWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    maintenanceWidgetControllerFindAll$Response(params: MaintenanceWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMaintenanceWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `maintenanceWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    maintenanceWidgetControllerFindAll(params: MaintenanceWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMaintenanceWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaintenanceWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MaintenanceWidgetService>;
}
