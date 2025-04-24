import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AircraftWidgetControllerFindAll$Params } from '../fn/aircraft-widget/aircraft-widget-controller-find-all';
import { AmimsAircraftWidgetDto } from '../models/amims-aircraft-widget-dto';
import * as i0 from "@angular/core";
export declare class AircraftWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `aircraftWidgetControllerFindAll()` */
    static readonly AircraftWidgetControllerFindAllPath = "/amims/aircraft/aircraft_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `aircraftWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    aircraftWidgetControllerFindAll$Response(params: AircraftWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsAircraftWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `aircraftWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    aircraftWidgetControllerFindAll(params: AircraftWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsAircraftWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AircraftWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AircraftWidgetService>;
}
