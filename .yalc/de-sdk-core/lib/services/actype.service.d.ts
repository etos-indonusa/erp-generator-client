import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ActypeControllerCreate$Params } from '../fn/actype/actype-controller-create';
import { ActypeControllerFindAll$Params } from '../fn/actype/actype-controller-find-all';
import { ActypeControllerFindOne$Params } from '../fn/actype/actype-controller-find-one';
import { ActypeControllerRemove$Params } from '../fn/actype/actype-controller-remove';
import { ActypeControllerUpdate$Params } from '../fn/actype/actype-controller-update';
import { AmimsActypeDto } from '../models/amims-actype-dto';
import * as i0 from "@angular/core";
export declare class ActypeService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `actypeControllerFindAll()` */
    static readonly ActypeControllerFindAllPath = "/amims/actype/actype";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `actypeControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    actypeControllerFindAll$Response(params?: ActypeControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsActypeDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `actypeControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    actypeControllerFindAll(params?: ActypeControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsActypeDto>;
        'total'?: number;
    }>;
    /** Path part for operation `actypeControllerCreate()` */
    static readonly ActypeControllerCreatePath = "/amims/actype/actype";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `actypeControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    actypeControllerCreate$Response(params: ActypeControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsActypeDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `actypeControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    actypeControllerCreate(params: ActypeControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsActypeDto;
    }>;
    /** Path part for operation `actypeControllerFindOne()` */
    static readonly ActypeControllerFindOnePath = "/amims/actype/actype/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `actypeControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    actypeControllerFindOne$Response(params: ActypeControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsActypeDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `actypeControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    actypeControllerFindOne(params: ActypeControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsActypeDto;
    }>;
    /** Path part for operation `actypeControllerUpdate()` */
    static readonly ActypeControllerUpdatePath = "/amims/actype/actype/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `actypeControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    actypeControllerUpdate$Response(params: ActypeControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsActypeDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `actypeControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    actypeControllerUpdate(params: ActypeControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsActypeDto;
    }>;
    /** Path part for operation `actypeControllerRemove()` */
    static readonly ActypeControllerRemovePath = "/amims/actype/actype/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `actypeControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    actypeControllerRemove$Response(params: ActypeControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsActypeDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `actypeControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    actypeControllerRemove(params: ActypeControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsActypeDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActypeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ActypeService>;
}
