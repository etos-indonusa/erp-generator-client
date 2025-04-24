import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLastMaintenanceReportDto } from '../models/amims-last-maintenance-report-dto';
import { LastMaintenanceReportControllerFindAll$Params } from '../fn/last-maintenance-report/last-maintenance-report-controller-find-all';
import { LastMaintenanceReportControllerFindOne$Params } from '../fn/last-maintenance-report/last-maintenance-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class LastMaintenanceReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `lastMaintenanceReportControllerFindAll()` */
    static readonly LastMaintenanceReportControllerFindAllPath = "/amims/last_maintenance/last_maintenance_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `lastMaintenanceReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    lastMaintenanceReportControllerFindAll$Response(params: LastMaintenanceReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLastMaintenanceReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `lastMaintenanceReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    lastMaintenanceReportControllerFindAll(params: LastMaintenanceReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLastMaintenanceReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `lastMaintenanceReportControllerFindOne()` */
    static readonly LastMaintenanceReportControllerFindOnePath = "/amims/last_maintenance/last_maintenance_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `lastMaintenanceReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    lastMaintenanceReportControllerFindOne$Response(params: LastMaintenanceReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLastMaintenanceReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `lastMaintenanceReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    lastMaintenanceReportControllerFindOne(params: LastMaintenanceReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLastMaintenanceReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LastMaintenanceReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LastMaintenanceReportService>;
}
