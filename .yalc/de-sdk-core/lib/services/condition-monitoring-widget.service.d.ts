import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsConditionMonitoringWidgetDto } from '../models/amims-condition-monitoring-widget-dto';
import { ConditionMonitoringWidgetControllerFindAll$Params } from '../fn/condition-monitoring-widget/condition-monitoring-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class ConditionMonitoringWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `conditionMonitoringWidgetControllerFindAll()` */
    static readonly ConditionMonitoringWidgetControllerFindAllPath = "/amims/condition_monitoring/condition_monitoring_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `conditionMonitoringWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    conditionMonitoringWidgetControllerFindAll$Response(params: ConditionMonitoringWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsConditionMonitoringWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `conditionMonitoringWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    conditionMonitoringWidgetControllerFindAll(params: ConditionMonitoringWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsConditionMonitoringWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConditionMonitoringWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConditionMonitoringWidgetService>;
}
