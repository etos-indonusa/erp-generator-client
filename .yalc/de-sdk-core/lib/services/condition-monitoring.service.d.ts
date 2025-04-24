import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsConditionMonitoringDto } from '../models/amims-condition-monitoring-dto';
import { ConditionMonitoringControllerCreate$Params } from '../fn/condition-monitoring/condition-monitoring-controller-create';
import { ConditionMonitoringControllerFindAll$Params } from '../fn/condition-monitoring/condition-monitoring-controller-find-all';
import { ConditionMonitoringControllerFindOne$Params } from '../fn/condition-monitoring/condition-monitoring-controller-find-one';
import { ConditionMonitoringControllerRemove$Params } from '../fn/condition-monitoring/condition-monitoring-controller-remove';
import { ConditionMonitoringControllerUpdate$Params } from '../fn/condition-monitoring/condition-monitoring-controller-update';
import * as i0 from "@angular/core";
export declare class ConditionMonitoringService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `conditionMonitoringControllerFindAll()` */
    static readonly ConditionMonitoringControllerFindAllPath = "/amims/condition_monitoring/condition_monitoring";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `conditionMonitoringControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    conditionMonitoringControllerFindAll$Response(params?: ConditionMonitoringControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsConditionMonitoringDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `conditionMonitoringControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    conditionMonitoringControllerFindAll(params?: ConditionMonitoringControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsConditionMonitoringDto>;
        'total'?: number;
    }>;
    /** Path part for operation `conditionMonitoringControllerCreate()` */
    static readonly ConditionMonitoringControllerCreatePath = "/amims/condition_monitoring/condition_monitoring";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `conditionMonitoringControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    conditionMonitoringControllerCreate$Response(params: ConditionMonitoringControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsConditionMonitoringDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `conditionMonitoringControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    conditionMonitoringControllerCreate(params: ConditionMonitoringControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsConditionMonitoringDto;
    }>;
    /** Path part for operation `conditionMonitoringControllerFindOne()` */
    static readonly ConditionMonitoringControllerFindOnePath = "/amims/condition_monitoring/condition_monitoring/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `conditionMonitoringControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    conditionMonitoringControllerFindOne$Response(params: ConditionMonitoringControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsConditionMonitoringDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `conditionMonitoringControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    conditionMonitoringControllerFindOne(params: ConditionMonitoringControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsConditionMonitoringDto;
    }>;
    /** Path part for operation `conditionMonitoringControllerUpdate()` */
    static readonly ConditionMonitoringControllerUpdatePath = "/amims/condition_monitoring/condition_monitoring/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `conditionMonitoringControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    conditionMonitoringControllerUpdate$Response(params: ConditionMonitoringControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsConditionMonitoringDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `conditionMonitoringControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    conditionMonitoringControllerUpdate(params: ConditionMonitoringControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsConditionMonitoringDto;
    }>;
    /** Path part for operation `conditionMonitoringControllerRemove()` */
    static readonly ConditionMonitoringControllerRemovePath = "/amims/condition_monitoring/condition_monitoring/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `conditionMonitoringControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    conditionMonitoringControllerRemove$Response(params: ConditionMonitoringControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsConditionMonitoringDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `conditionMonitoringControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    conditionMonitoringControllerRemove(params: ConditionMonitoringControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsConditionMonitoringDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConditionMonitoringService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConditionMonitoringService>;
}
