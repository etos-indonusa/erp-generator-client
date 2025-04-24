import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLocationFlightWidgetDto } from '../models/amims-location-flight-widget-dto';
import { LocationFlightWidgetControllerFindAll$Params } from '../fn/location-flight-widget/location-flight-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class LocationFlightWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `locationFlightWidgetControllerFindAll()` */
    static readonly LocationFlightWidgetControllerFindAllPath = "/amims/location_flight/location_flight_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `locationFlightWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    locationFlightWidgetControllerFindAll$Response(params: LocationFlightWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLocationFlightWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `locationFlightWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    locationFlightWidgetControllerFindAll(params: LocationFlightWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLocationFlightWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocationFlightWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LocationFlightWidgetService>;
}
