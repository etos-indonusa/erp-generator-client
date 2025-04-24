import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPilotReportDto } from '../models/amims-pilot-report-dto';
import { PilotReportControllerFindAll$Params } from '../fn/pilot-report/pilot-report-controller-find-all';
import { PilotReportControllerFindOne$Params } from '../fn/pilot-report/pilot-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PilotReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `pilotReportControllerFindAll()` */
    static readonly PilotReportControllerFindAllPath = "/amims/pilot/pilot_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `pilotReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    pilotReportControllerFindAll$Response(params: PilotReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPilotReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `pilotReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    pilotReportControllerFindAll(params: PilotReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPilotReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `pilotReportControllerFindOne()` */
    static readonly PilotReportControllerFindOnePath = "/amims/pilot/pilot_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `pilotReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    pilotReportControllerFindOne$Response(params: PilotReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPilotReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `pilotReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    pilotReportControllerFindOne(params: PilotReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPilotReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PilotReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PilotReportService>;
}
