import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AircraftDetailWidgetControllerFindAll$Params } from '../fn/aircraft-detail-widget/aircraft-detail-widget-controller-find-all';
import { AmimsAircraftDetailWidgetDto } from '../models/amims-aircraft-detail-widget-dto';
import * as i0 from "@angular/core";
export declare class AircraftDetailWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `aircraftDetailWidgetControllerFindAll()` */
    static readonly AircraftDetailWidgetControllerFindAllPath = "/amims/aircraft_detail/aircraft_detail_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `aircraftDetailWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    aircraftDetailWidgetControllerFindAll$Response(params: AircraftDetailWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsAircraftDetailWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `aircraftDetailWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    aircraftDetailWidgetControllerFindAll(params: AircraftDetailWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsAircraftDetailWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AircraftDetailWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AircraftDetailWidgetService>;
}
