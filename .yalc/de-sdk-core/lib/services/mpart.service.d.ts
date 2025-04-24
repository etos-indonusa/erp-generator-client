import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMpartDto } from '../models/amims-mpart-dto';
import { MpartControllerCreate$Params } from '../fn/mpart/mpart-controller-create';
import { MpartControllerFindAll$Params } from '../fn/mpart/mpart-controller-find-all';
import { MpartControllerFindOne$Params } from '../fn/mpart/mpart-controller-find-one';
import { MpartControllerRemove$Params } from '../fn/mpart/mpart-controller-remove';
import { MpartControllerUpdate$Params } from '../fn/mpart/mpart-controller-update';
import * as i0 from "@angular/core";
export declare class MpartService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `mpartControllerFindAll()` */
    static readonly MpartControllerFindAllPath = "/amims/mpart/mpart";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpartControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpartControllerFindAll$Response(params?: MpartControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpartDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpartControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpartControllerFindAll(params?: MpartControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpartDto>;
        'total'?: number;
    }>;
    /** Path part for operation `mpartControllerCreate()` */
    static readonly MpartControllerCreatePath = "/amims/mpart/mpart";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpartControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpartControllerCreate$Response(params: MpartControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpartDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpartControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpartControllerCreate(params: MpartControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpartDto;
    }>;
    /** Path part for operation `mpartControllerFindOne()` */
    static readonly MpartControllerFindOnePath = "/amims/mpart/mpart/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpartControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpartControllerFindOne$Response(params: MpartControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpartDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpartControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpartControllerFindOne(params: MpartControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpartDto;
    }>;
    /** Path part for operation `mpartControllerUpdate()` */
    static readonly MpartControllerUpdatePath = "/amims/mpart/mpart/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpartControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpartControllerUpdate$Response(params: MpartControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpartDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpartControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpartControllerUpdate(params: MpartControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpartDto;
    }>;
    /** Path part for operation `mpartControllerRemove()` */
    static readonly MpartControllerRemovePath = "/amims/mpart/mpart/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpartControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpartControllerRemove$Response(params: MpartControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpartDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpartControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpartControllerRemove(params: MpartControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpartDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MpartService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MpartService>;
}
