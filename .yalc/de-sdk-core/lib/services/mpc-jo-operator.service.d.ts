import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMpcJoOperatorDto } from '../models/amims-mpc-jo-operator-dto';
import { MpcJoOperatorControllerCreate$Params } from '../fn/mpc-jo-operator/mpc-jo-operator-controller-create';
import { MpcJoOperatorControllerFindAll$Params } from '../fn/mpc-jo-operator/mpc-jo-operator-controller-find-all';
import { MpcJoOperatorControllerFindOne$Params } from '../fn/mpc-jo-operator/mpc-jo-operator-controller-find-one';
import { MpcJoOperatorControllerRemove$Params } from '../fn/mpc-jo-operator/mpc-jo-operator-controller-remove';
import { MpcJoOperatorControllerUpdate$Params } from '../fn/mpc-jo-operator/mpc-jo-operator-controller-update';
import * as i0 from "@angular/core";
export declare class MpcJoOperatorService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `mpcJoOperatorControllerFindAll()` */
    static readonly MpcJoOperatorControllerFindAllPath = "/amims/mpc_jo_operator/mpc_jo_operator";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcJoOperatorControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcJoOperatorControllerFindAll$Response(params?: MpcJoOperatorControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcJoOperatorDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcJoOperatorControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcJoOperatorControllerFindAll(params?: MpcJoOperatorControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcJoOperatorDto>;
        'total'?: number;
    }>;
    /** Path part for operation `mpcJoOperatorControllerCreate()` */
    static readonly MpcJoOperatorControllerCreatePath = "/amims/mpc_jo_operator/mpc_jo_operator";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcJoOperatorControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcJoOperatorControllerCreate$Response(params: MpcJoOperatorControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcJoOperatorDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcJoOperatorControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcJoOperatorControllerCreate(params: MpcJoOperatorControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcJoOperatorDto;
    }>;
    /** Path part for operation `mpcJoOperatorControllerFindOne()` */
    static readonly MpcJoOperatorControllerFindOnePath = "/amims/mpc_jo_operator/mpc_jo_operator/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcJoOperatorControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcJoOperatorControllerFindOne$Response(params: MpcJoOperatorControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcJoOperatorDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcJoOperatorControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcJoOperatorControllerFindOne(params: MpcJoOperatorControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcJoOperatorDto;
    }>;
    /** Path part for operation `mpcJoOperatorControllerUpdate()` */
    static readonly MpcJoOperatorControllerUpdatePath = "/amims/mpc_jo_operator/mpc_jo_operator/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcJoOperatorControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcJoOperatorControllerUpdate$Response(params: MpcJoOperatorControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcJoOperatorDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcJoOperatorControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcJoOperatorControllerUpdate(params: MpcJoOperatorControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcJoOperatorDto;
    }>;
    /** Path part for operation `mpcJoOperatorControllerRemove()` */
    static readonly MpcJoOperatorControllerRemovePath = "/amims/mpc_jo_operator/mpc_jo_operator/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcJoOperatorControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcJoOperatorControllerRemove$Response(params: MpcJoOperatorControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcJoOperatorDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcJoOperatorControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcJoOperatorControllerRemove(params: MpcJoOperatorControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcJoOperatorDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MpcJoOperatorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MpcJoOperatorService>;
}
