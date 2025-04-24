import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AircraftReportControllerFindAll$Params } from '../fn/aircraft-report/aircraft-report-controller-find-all';
import { AircraftReportControllerFindOne$Params } from '../fn/aircraft-report/aircraft-report-controller-find-one';
import { AmimsAircraftReportDto } from '../models/amims-aircraft-report-dto';
import * as i0 from "@angular/core";
export declare class AircraftReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `aircraftReportControllerFindAll()` */
    static readonly AircraftReportControllerFindAllPath = "/amims/aircraft/aircraft_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `aircraftReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    aircraftReportControllerFindAll$Response(params: AircraftReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsAircraftReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `aircraftReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    aircraftReportControllerFindAll(params: AircraftReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsAircraftReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `aircraftReportControllerFindOne()` */
    static readonly AircraftReportControllerFindOnePath = "/amims/aircraft/aircraft_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `aircraftReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    aircraftReportControllerFindOne$Response(params: AircraftReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAircraftReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `aircraftReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    aircraftReportControllerFindOne(params: AircraftReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAircraftReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AircraftReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AircraftReportService>;
}
