import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMpcGseDto } from '../models/amims-mpc-gse-dto';
import { MpcGseControllerCreate$Params } from '../fn/mpc-gse/mpc-gse-controller-create';
import { MpcGseControllerFindAll$Params } from '../fn/mpc-gse/mpc-gse-controller-find-all';
import { MpcGseControllerFindOne$Params } from '../fn/mpc-gse/mpc-gse-controller-find-one';
import { MpcGseControllerRemove$Params } from '../fn/mpc-gse/mpc-gse-controller-remove';
import { MpcGseControllerUpdate$Params } from '../fn/mpc-gse/mpc-gse-controller-update';
import * as i0 from "@angular/core";
export declare class MpcGseService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `mpcGseControllerFindAll()` */
    static readonly MpcGseControllerFindAllPath = "/amims/mpc_gse/mpc_gse";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcGseControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcGseControllerFindAll$Response(params?: MpcGseControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcGseDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcGseControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcGseControllerFindAll(params?: MpcGseControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcGseDto>;
        'total'?: number;
    }>;
    /** Path part for operation `mpcGseControllerCreate()` */
    static readonly MpcGseControllerCreatePath = "/amims/mpc_gse/mpc_gse";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcGseControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcGseControllerCreate$Response(params: MpcGseControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcGseDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcGseControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcGseControllerCreate(params: MpcGseControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcGseDto;
    }>;
    /** Path part for operation `mpcGseControllerFindOne()` */
    static readonly MpcGseControllerFindOnePath = "/amims/mpc_gse/mpc_gse/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcGseControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcGseControllerFindOne$Response(params: MpcGseControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcGseDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcGseControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcGseControllerFindOne(params: MpcGseControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcGseDto;
    }>;
    /** Path part for operation `mpcGseControllerUpdate()` */
    static readonly MpcGseControllerUpdatePath = "/amims/mpc_gse/mpc_gse/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcGseControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcGseControllerUpdate$Response(params: MpcGseControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcGseDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcGseControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcGseControllerUpdate(params: MpcGseControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcGseDto;
    }>;
    /** Path part for operation `mpcGseControllerRemove()` */
    static readonly MpcGseControllerRemovePath = "/amims/mpc_gse/mpc_gse/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcGseControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcGseControllerRemove$Response(params: MpcGseControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcGseDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcGseControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcGseControllerRemove(params: MpcGseControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcGseDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MpcGseService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MpcGseService>;
}
