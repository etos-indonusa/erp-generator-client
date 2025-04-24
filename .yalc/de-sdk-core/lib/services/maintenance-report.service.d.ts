import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMaintenanceReportDto } from '../models/amims-maintenance-report-dto';
import { MaintenanceReportControllerFindAll$Params } from '../fn/maintenance-report/maintenance-report-controller-find-all';
import { MaintenanceReportControllerFindOne$Params } from '../fn/maintenance-report/maintenance-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class MaintenanceReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `maintenanceReportControllerFindAll()` */
    static readonly MaintenanceReportControllerFindAllPath = "/amims/maintenance/maintenance_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `maintenanceReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    maintenanceReportControllerFindAll$Response(params: MaintenanceReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMaintenanceReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `maintenanceReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    maintenanceReportControllerFindAll(params: MaintenanceReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMaintenanceReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `maintenanceReportControllerFindOne()` */
    static readonly MaintenanceReportControllerFindOnePath = "/amims/maintenance/maintenance_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `maintenanceReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceReportControllerFindOne$Response(params: MaintenanceReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `maintenanceReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceReportControllerFindOne(params: MaintenanceReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaintenanceReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MaintenanceReportService>;
}
