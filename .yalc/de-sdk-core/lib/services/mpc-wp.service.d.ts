import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMpcWpDto } from '../models/amims-mpc-wp-dto';
import { MpcWpControllerCreate$Params } from '../fn/mpc-wp/mpc-wp-controller-create';
import { MpcWpControllerFindAll$Params } from '../fn/mpc-wp/mpc-wp-controller-find-all';
import { MpcWpControllerFindOne$Params } from '../fn/mpc-wp/mpc-wp-controller-find-one';
import { MpcWpControllerRemove$Params } from '../fn/mpc-wp/mpc-wp-controller-remove';
import { MpcWpControllerUpdate$Params } from '../fn/mpc-wp/mpc-wp-controller-update';
import * as i0 from "@angular/core";
export declare class MpcWpService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `mpcWpControllerFindAll()` */
    static readonly MpcWpControllerFindAllPath = "/amims/mpc_wp/mpc_wp";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcWpControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcWpControllerFindAll$Response(params?: MpcWpControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcWpDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcWpControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcWpControllerFindAll(params?: MpcWpControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcWpDto>;
        'total'?: number;
    }>;
    /** Path part for operation `mpcWpControllerCreate()` */
    static readonly MpcWpControllerCreatePath = "/amims/mpc_wp/mpc_wp";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcWpControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcWpControllerCreate$Response(params: MpcWpControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcWpDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcWpControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcWpControllerCreate(params: MpcWpControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcWpDto;
    }>;
    /** Path part for operation `mpcWpControllerFindOne()` */
    static readonly MpcWpControllerFindOnePath = "/amims/mpc_wp/mpc_wp/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcWpControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcWpControllerFindOne$Response(params: MpcWpControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcWpDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcWpControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcWpControllerFindOne(params: MpcWpControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcWpDto;
    }>;
    /** Path part for operation `mpcWpControllerUpdate()` */
    static readonly MpcWpControllerUpdatePath = "/amims/mpc_wp/mpc_wp/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcWpControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcWpControllerUpdate$Response(params: MpcWpControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcWpDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcWpControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcWpControllerUpdate(params: MpcWpControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcWpDto;
    }>;
    /** Path part for operation `mpcWpControllerRemove()` */
    static readonly MpcWpControllerRemovePath = "/amims/mpc_wp/mpc_wp/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcWpControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcWpControllerRemove$Response(params: MpcWpControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcWpDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcWpControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcWpControllerRemove(params: MpcWpControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcWpDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MpcWpService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MpcWpService>;
}
