import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMpcSelfMaintenanceReportDto } from '../models/amims-mpc-self-maintenance-report-dto';
import { MpcSelfMaintenanceReportControllerFindAll$Params } from '../fn/mpc-self-maintenance-report/mpc-self-maintenance-report-controller-find-all';
import { MpcSelfMaintenanceReportControllerFindOne$Params } from '../fn/mpc-self-maintenance-report/mpc-self-maintenance-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class MpcSelfMaintenanceReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `mpcSelfMaintenanceReportControllerFindAll()` */
    static readonly MpcSelfMaintenanceReportControllerFindAllPath = "/amims/mpc_self_maintenance/mpc_self_maintenance_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcSelfMaintenanceReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcSelfMaintenanceReportControllerFindAll$Response(params: MpcSelfMaintenanceReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcSelfMaintenanceReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcSelfMaintenanceReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcSelfMaintenanceReportControllerFindAll(params: MpcSelfMaintenanceReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcSelfMaintenanceReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `mpcSelfMaintenanceReportControllerFindOne()` */
    static readonly MpcSelfMaintenanceReportControllerFindOnePath = "/amims/mpc_self_maintenance/mpc_self_maintenance_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcSelfMaintenanceReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcSelfMaintenanceReportControllerFindOne$Response(params: MpcSelfMaintenanceReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcSelfMaintenanceReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcSelfMaintenanceReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcSelfMaintenanceReportControllerFindOne(params: MpcSelfMaintenanceReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcSelfMaintenanceReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MpcSelfMaintenanceReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MpcSelfMaintenanceReportService>;
}
