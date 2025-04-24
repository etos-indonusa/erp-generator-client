import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AircraftDetailReportControllerFindAll$Params } from '../fn/aircraft-detail-report/aircraft-detail-report-controller-find-all';
import { AircraftDetailReportControllerFindOne$Params } from '../fn/aircraft-detail-report/aircraft-detail-report-controller-find-one';
import { AmimsAircraftDetailReportDto } from '../models/amims-aircraft-detail-report-dto';
import * as i0 from "@angular/core";
export declare class AircraftDetailReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `aircraftDetailReportControllerFindAll()` */
    static readonly AircraftDetailReportControllerFindAllPath = "/amims/aircraft_detail/aircraft_detail_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `aircraftDetailReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    aircraftDetailReportControllerFindAll$Response(params: AircraftDetailReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsAircraftDetailReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `aircraftDetailReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    aircraftDetailReportControllerFindAll(params: AircraftDetailReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsAircraftDetailReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `aircraftDetailReportControllerFindOne()` */
    static readonly AircraftDetailReportControllerFindOnePath = "/amims/aircraft_detail/aircraft_detail_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `aircraftDetailReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    aircraftDetailReportControllerFindOne$Response(params: AircraftDetailReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAircraftDetailReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `aircraftDetailReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    aircraftDetailReportControllerFindOne(params: AircraftDetailReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAircraftDetailReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AircraftDetailReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AircraftDetailReportService>;
}
