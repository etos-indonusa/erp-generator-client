import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMpcJoDto } from '../models/amims-mpc-jo-dto';
import { MpcJoControllerCreate$Params } from '../fn/mpc-jo/mpc-jo-controller-create';
import { MpcJoControllerFindAll$Params } from '../fn/mpc-jo/mpc-jo-controller-find-all';
import { MpcJoControllerFindOne$Params } from '../fn/mpc-jo/mpc-jo-controller-find-one';
import { MpcJoControllerRemove$Params } from '../fn/mpc-jo/mpc-jo-controller-remove';
import { MpcJoControllerUpdate$Params } from '../fn/mpc-jo/mpc-jo-controller-update';
import * as i0 from "@angular/core";
export declare class MpcJoService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `mpcJoControllerFindAll()` */
    static readonly MpcJoControllerFindAllPath = "/amims/mpc_jo/mpc_jo";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcJoControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcJoControllerFindAll$Response(params?: MpcJoControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcJoDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcJoControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcJoControllerFindAll(params?: MpcJoControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcJoDto>;
        'total'?: number;
    }>;
    /** Path part for operation `mpcJoControllerCreate()` */
    static readonly MpcJoControllerCreatePath = "/amims/mpc_jo/mpc_jo";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcJoControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcJoControllerCreate$Response(params: MpcJoControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcJoDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcJoControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcJoControllerCreate(params: MpcJoControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcJoDto;
    }>;
    /** Path part for operation `mpcJoControllerFindOne()` */
    static readonly MpcJoControllerFindOnePath = "/amims/mpc_jo/mpc_jo/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcJoControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcJoControllerFindOne$Response(params: MpcJoControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcJoDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcJoControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcJoControllerFindOne(params: MpcJoControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcJoDto;
    }>;
    /** Path part for operation `mpcJoControllerUpdate()` */
    static readonly MpcJoControllerUpdatePath = "/amims/mpc_jo/mpc_jo/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcJoControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcJoControllerUpdate$Response(params: MpcJoControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcJoDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcJoControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcJoControllerUpdate(params: MpcJoControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcJoDto;
    }>;
    /** Path part for operation `mpcJoControllerRemove()` */
    static readonly MpcJoControllerRemovePath = "/amims/mpc_jo/mpc_jo/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcJoControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcJoControllerRemove$Response(params: MpcJoControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcJoDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcJoControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcJoControllerRemove(params: MpcJoControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcJoDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MpcJoService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MpcJoService>;
}
