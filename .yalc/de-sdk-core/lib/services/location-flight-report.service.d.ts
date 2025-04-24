import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLocationFlightReportDto } from '../models/amims-location-flight-report-dto';
import { LocationFlightReportControllerFindAll$Params } from '../fn/location-flight-report/location-flight-report-controller-find-all';
import { LocationFlightReportControllerFindOne$Params } from '../fn/location-flight-report/location-flight-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class LocationFlightReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `locationFlightReportControllerFindAll()` */
    static readonly LocationFlightReportControllerFindAllPath = "/amims/location_flight/location_flight_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `locationFlightReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    locationFlightReportControllerFindAll$Response(params: LocationFlightReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLocationFlightReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `locationFlightReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    locationFlightReportControllerFindAll(params: LocationFlightReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLocationFlightReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `locationFlightReportControllerFindOne()` */
    static readonly LocationFlightReportControllerFindOnePath = "/amims/location_flight/location_flight_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `locationFlightReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    locationFlightReportControllerFindOne$Response(params: LocationFlightReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLocationFlightReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `locationFlightReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    locationFlightReportControllerFindOne(params: LocationFlightReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLocationFlightReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocationFlightReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LocationFlightReportService>;
}
