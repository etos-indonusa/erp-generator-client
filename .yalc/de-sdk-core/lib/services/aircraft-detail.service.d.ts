import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AircraftDetailControllerCreate$Params } from '../fn/aircraft-detail/aircraft-detail-controller-create';
import { AircraftDetailControllerFindAll$Params } from '../fn/aircraft-detail/aircraft-detail-controller-find-all';
import { AircraftDetailControllerFindOne$Params } from '../fn/aircraft-detail/aircraft-detail-controller-find-one';
import { AircraftDetailControllerRemove$Params } from '../fn/aircraft-detail/aircraft-detail-controller-remove';
import { AircraftDetailControllerUpdate$Params } from '../fn/aircraft-detail/aircraft-detail-controller-update';
import { AmimsAircraftDetailDto } from '../models/amims-aircraft-detail-dto';
import * as i0 from "@angular/core";
export declare class AircraftDetailService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `aircraftDetailControllerFindAll()` */
    static readonly AircraftDetailControllerFindAllPath = "/amims/aircraft_detail/aircraft_detail";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `aircraftDetailControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    aircraftDetailControllerFindAll$Response(params?: AircraftDetailControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsAircraftDetailDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `aircraftDetailControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    aircraftDetailControllerFindAll(params?: AircraftDetailControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsAircraftDetailDto>;
        'total'?: number;
    }>;
    /** Path part for operation `aircraftDetailControllerCreate()` */
    static readonly AircraftDetailControllerCreatePath = "/amims/aircraft_detail/aircraft_detail";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `aircraftDetailControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    aircraftDetailControllerCreate$Response(params: AircraftDetailControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAircraftDetailDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `aircraftDetailControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    aircraftDetailControllerCreate(params: AircraftDetailControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAircraftDetailDto;
    }>;
    /** Path part for operation `aircraftDetailControllerFindOne()` */
    static readonly AircraftDetailControllerFindOnePath = "/amims/aircraft_detail/aircraft_detail/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `aircraftDetailControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    aircraftDetailControllerFindOne$Response(params: AircraftDetailControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAircraftDetailDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `aircraftDetailControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    aircraftDetailControllerFindOne(params: AircraftDetailControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAircraftDetailDto;
    }>;
    /** Path part for operation `aircraftDetailControllerUpdate()` */
    static readonly AircraftDetailControllerUpdatePath = "/amims/aircraft_detail/aircraft_detail/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `aircraftDetailControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    aircraftDetailControllerUpdate$Response(params: AircraftDetailControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAircraftDetailDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `aircraftDetailControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    aircraftDetailControllerUpdate(params: AircraftDetailControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAircraftDetailDto;
    }>;
    /** Path part for operation `aircraftDetailControllerRemove()` */
    static readonly AircraftDetailControllerRemovePath = "/amims/aircraft_detail/aircraft_detail/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `aircraftDetailControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    aircraftDetailControllerRemove$Response(params: AircraftDetailControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAircraftDetailDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `aircraftDetailControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    aircraftDetailControllerRemove(params: AircraftDetailControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAircraftDetailDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AircraftDetailService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AircraftDetailService>;
}
