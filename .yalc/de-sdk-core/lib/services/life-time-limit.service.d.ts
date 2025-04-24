import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLifeTimeLimitDto } from '../models/amims-life-time-limit-dto';
import { LifeTimeLimitControllerCreate$Params } from '../fn/life-time-limit/life-time-limit-controller-create';
import { LifeTimeLimitControllerFindAll$Params } from '../fn/life-time-limit/life-time-limit-controller-find-all';
import { LifeTimeLimitControllerFindOne$Params } from '../fn/life-time-limit/life-time-limit-controller-find-one';
import { LifeTimeLimitControllerRemove$Params } from '../fn/life-time-limit/life-time-limit-controller-remove';
import { LifeTimeLimitControllerUpdate$Params } from '../fn/life-time-limit/life-time-limit-controller-update';
import * as i0 from "@angular/core";
export declare class LifeTimeLimitService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `lifeTimeLimitControllerFindAll()` */
    static readonly LifeTimeLimitControllerFindAllPath = "/amims/life_time_limit/life_time_limit";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `lifeTimeLimitControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    lifeTimeLimitControllerFindAll$Response(params?: LifeTimeLimitControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLifeTimeLimitDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `lifeTimeLimitControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    lifeTimeLimitControllerFindAll(params?: LifeTimeLimitControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLifeTimeLimitDto>;
        'total'?: number;
    }>;
    /** Path part for operation `lifeTimeLimitControllerCreate()` */
    static readonly LifeTimeLimitControllerCreatePath = "/amims/life_time_limit/life_time_limit";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `lifeTimeLimitControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    lifeTimeLimitControllerCreate$Response(params: LifeTimeLimitControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLifeTimeLimitDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `lifeTimeLimitControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    lifeTimeLimitControllerCreate(params: LifeTimeLimitControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLifeTimeLimitDto;
    }>;
    /** Path part for operation `lifeTimeLimitControllerFindOne()` */
    static readonly LifeTimeLimitControllerFindOnePath = "/amims/life_time_limit/life_time_limit/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `lifeTimeLimitControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    lifeTimeLimitControllerFindOne$Response(params: LifeTimeLimitControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLifeTimeLimitDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `lifeTimeLimitControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    lifeTimeLimitControllerFindOne(params: LifeTimeLimitControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLifeTimeLimitDto;
    }>;
    /** Path part for operation `lifeTimeLimitControllerUpdate()` */
    static readonly LifeTimeLimitControllerUpdatePath = "/amims/life_time_limit/life_time_limit/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `lifeTimeLimitControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    lifeTimeLimitControllerUpdate$Response(params: LifeTimeLimitControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLifeTimeLimitDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `lifeTimeLimitControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    lifeTimeLimitControllerUpdate(params: LifeTimeLimitControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLifeTimeLimitDto;
    }>;
    /** Path part for operation `lifeTimeLimitControllerRemove()` */
    static readonly LifeTimeLimitControllerRemovePath = "/amims/life_time_limit/life_time_limit/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `lifeTimeLimitControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    lifeTimeLimitControllerRemove$Response(params: LifeTimeLimitControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLifeTimeLimitDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `lifeTimeLimitControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    lifeTimeLimitControllerRemove(params: LifeTimeLimitControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLifeTimeLimitDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LifeTimeLimitService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LifeTimeLimitService>;
}
