import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLocationFlightDto } from '../models/amims-location-flight-dto';
import { LocationFlightControllerCreate$Params } from '../fn/location-flight/location-flight-controller-create';
import { LocationFlightControllerFindAll$Params } from '../fn/location-flight/location-flight-controller-find-all';
import { LocationFlightControllerFindOne$Params } from '../fn/location-flight/location-flight-controller-find-one';
import { LocationFlightControllerRemove$Params } from '../fn/location-flight/location-flight-controller-remove';
import { LocationFlightControllerUpdate$Params } from '../fn/location-flight/location-flight-controller-update';
import * as i0 from "@angular/core";
export declare class LocationFlightService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `locationFlightControllerFindAll()` */
    static readonly LocationFlightControllerFindAllPath = "/amims/location_flight/location_flight";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `locationFlightControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    locationFlightControllerFindAll$Response(params?: LocationFlightControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLocationFlightDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `locationFlightControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    locationFlightControllerFindAll(params?: LocationFlightControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLocationFlightDto>;
        'total'?: number;
    }>;
    /** Path part for operation `locationFlightControllerCreate()` */
    static readonly LocationFlightControllerCreatePath = "/amims/location_flight/location_flight";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `locationFlightControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    locationFlightControllerCreate$Response(params: LocationFlightControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLocationFlightDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `locationFlightControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    locationFlightControllerCreate(params: LocationFlightControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLocationFlightDto;
    }>;
    /** Path part for operation `locationFlightControllerFindOne()` */
    static readonly LocationFlightControllerFindOnePath = "/amims/location_flight/location_flight/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `locationFlightControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    locationFlightControllerFindOne$Response(params: LocationFlightControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLocationFlightDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `locationFlightControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    locationFlightControllerFindOne(params: LocationFlightControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLocationFlightDto;
    }>;
    /** Path part for operation `locationFlightControllerUpdate()` */
    static readonly LocationFlightControllerUpdatePath = "/amims/location_flight/location_flight/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `locationFlightControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    locationFlightControllerUpdate$Response(params: LocationFlightControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLocationFlightDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `locationFlightControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    locationFlightControllerUpdate(params: LocationFlightControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLocationFlightDto;
    }>;
    /** Path part for operation `locationFlightControllerRemove()` */
    static readonly LocationFlightControllerRemovePath = "/amims/location_flight/location_flight/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `locationFlightControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    locationFlightControllerRemove$Response(params: LocationFlightControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLocationFlightDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `locationFlightControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    locationFlightControllerRemove(params: LocationFlightControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLocationFlightDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocationFlightService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LocationFlightService>;
}
