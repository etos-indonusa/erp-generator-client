import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsRotaryFactorDto } from '../models/amims-rotary-factor-dto';
import { RotaryFactorControllerCreate$Params } from '../fn/rotary-factor/rotary-factor-controller-create';
import { RotaryFactorControllerFindAll$Params } from '../fn/rotary-factor/rotary-factor-controller-find-all';
import { RotaryFactorControllerFindOne$Params } from '../fn/rotary-factor/rotary-factor-controller-find-one';
import { RotaryFactorControllerRemove$Params } from '../fn/rotary-factor/rotary-factor-controller-remove';
import { RotaryFactorControllerUpdate$Params } from '../fn/rotary-factor/rotary-factor-controller-update';
import * as i0 from "@angular/core";
export declare class RotaryFactorService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `rotaryFactorControllerFindAll()` */
    static readonly RotaryFactorControllerFindAllPath = "/amims/rotary_factor/rotary_factor";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `rotaryFactorControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    rotaryFactorControllerFindAll$Response(params?: RotaryFactorControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsRotaryFactorDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `rotaryFactorControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    rotaryFactorControllerFindAll(params?: RotaryFactorControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsRotaryFactorDto>;
        'total'?: number;
    }>;
    /** Path part for operation `rotaryFactorControllerCreate()` */
    static readonly RotaryFactorControllerCreatePath = "/amims/rotary_factor/rotary_factor";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `rotaryFactorControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    rotaryFactorControllerCreate$Response(params: RotaryFactorControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsRotaryFactorDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `rotaryFactorControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    rotaryFactorControllerCreate(params: RotaryFactorControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsRotaryFactorDto;
    }>;
    /** Path part for operation `rotaryFactorControllerFindOne()` */
    static readonly RotaryFactorControllerFindOnePath = "/amims/rotary_factor/rotary_factor/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `rotaryFactorControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    rotaryFactorControllerFindOne$Response(params: RotaryFactorControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsRotaryFactorDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `rotaryFactorControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    rotaryFactorControllerFindOne(params: RotaryFactorControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsRotaryFactorDto;
    }>;
    /** Path part for operation `rotaryFactorControllerUpdate()` */
    static readonly RotaryFactorControllerUpdatePath = "/amims/rotary_factor/rotary_factor/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `rotaryFactorControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    rotaryFactorControllerUpdate$Response(params: RotaryFactorControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsRotaryFactorDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `rotaryFactorControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    rotaryFactorControllerUpdate(params: RotaryFactorControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsRotaryFactorDto;
    }>;
    /** Path part for operation `rotaryFactorControllerRemove()` */
    static readonly RotaryFactorControllerRemovePath = "/amims/rotary_factor/rotary_factor/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `rotaryFactorControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    rotaryFactorControllerRemove$Response(params: RotaryFactorControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsRotaryFactorDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `rotaryFactorControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    rotaryFactorControllerRemove(params: RotaryFactorControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsRotaryFactorDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RotaryFactorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RotaryFactorService>;
}
