import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AircraftControllerCreate$Params } from '../fn/aircraft/aircraft-controller-create';
import { AircraftControllerFindAll$Params } from '../fn/aircraft/aircraft-controller-find-all';
import { AircraftControllerFindOne$Params } from '../fn/aircraft/aircraft-controller-find-one';
import { AircraftControllerRemove$Params } from '../fn/aircraft/aircraft-controller-remove';
import { AircraftControllerUpdate$Params } from '../fn/aircraft/aircraft-controller-update';
import { AmimsAircraftDto } from '../models/amims-aircraft-dto';
import * as i0 from "@angular/core";
export declare class AircraftService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `aircraftControllerFindAll()` */
    static readonly AircraftControllerFindAllPath = "/amims/aircraft/aircraft";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `aircraftControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    aircraftControllerFindAll$Response(params?: AircraftControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsAircraftDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `aircraftControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    aircraftControllerFindAll(params?: AircraftControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsAircraftDto>;
        'total'?: number;
    }>;
    /** Path part for operation `aircraftControllerCreate()` */
    static readonly AircraftControllerCreatePath = "/amims/aircraft/aircraft";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `aircraftControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    aircraftControllerCreate$Response(params: AircraftControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAircraftDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `aircraftControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    aircraftControllerCreate(params: AircraftControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAircraftDto;
    }>;
    /** Path part for operation `aircraftControllerFindOne()` */
    static readonly AircraftControllerFindOnePath = "/amims/aircraft/aircraft/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `aircraftControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    aircraftControllerFindOne$Response(params: AircraftControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAircraftDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `aircraftControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    aircraftControllerFindOne(params: AircraftControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAircraftDto;
    }>;
    /** Path part for operation `aircraftControllerUpdate()` */
    static readonly AircraftControllerUpdatePath = "/amims/aircraft/aircraft/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `aircraftControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    aircraftControllerUpdate$Response(params: AircraftControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAircraftDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `aircraftControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    aircraftControllerUpdate(params: AircraftControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAircraftDto;
    }>;
    /** Path part for operation `aircraftControllerRemove()` */
    static readonly AircraftControllerRemovePath = "/amims/aircraft/aircraft/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `aircraftControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    aircraftControllerRemove$Response(params: AircraftControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAircraftDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `aircraftControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    aircraftControllerRemove(params: AircraftControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAircraftDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AircraftService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AircraftService>;
}
