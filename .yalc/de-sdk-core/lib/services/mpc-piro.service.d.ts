import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMpcPiroDto } from '../models/amims-mpc-piro-dto';
import { MpcPiroControllerCreate$Params } from '../fn/mpc-piro/mpc-piro-controller-create';
import { MpcPiroControllerFindAll$Params } from '../fn/mpc-piro/mpc-piro-controller-find-all';
import { MpcPiroControllerFindOne$Params } from '../fn/mpc-piro/mpc-piro-controller-find-one';
import { MpcPiroControllerRemove$Params } from '../fn/mpc-piro/mpc-piro-controller-remove';
import { MpcPiroControllerUpdate$Params } from '../fn/mpc-piro/mpc-piro-controller-update';
import * as i0 from "@angular/core";
export declare class MpcPiroService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `mpcPiroControllerFindAll()` */
    static readonly MpcPiroControllerFindAllPath = "/amims/mpc_piro/mpc_piro";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcPiroControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcPiroControllerFindAll$Response(params?: MpcPiroControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcPiroDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcPiroControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcPiroControllerFindAll(params?: MpcPiroControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcPiroDto>;
        'total'?: number;
    }>;
    /** Path part for operation `mpcPiroControllerCreate()` */
    static readonly MpcPiroControllerCreatePath = "/amims/mpc_piro/mpc_piro";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcPiroControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcPiroControllerCreate$Response(params: MpcPiroControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcPiroDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcPiroControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcPiroControllerCreate(params: MpcPiroControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcPiroDto;
    }>;
    /** Path part for operation `mpcPiroControllerFindOne()` */
    static readonly MpcPiroControllerFindOnePath = "/amims/mpc_piro/mpc_piro/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcPiroControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcPiroControllerFindOne$Response(params: MpcPiroControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcPiroDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcPiroControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcPiroControllerFindOne(params: MpcPiroControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcPiroDto;
    }>;
    /** Path part for operation `mpcPiroControllerUpdate()` */
    static readonly MpcPiroControllerUpdatePath = "/amims/mpc_piro/mpc_piro/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcPiroControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcPiroControllerUpdate$Response(params: MpcPiroControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcPiroDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcPiroControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcPiroControllerUpdate(params: MpcPiroControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcPiroDto;
    }>;
    /** Path part for operation `mpcPiroControllerRemove()` */
    static readonly MpcPiroControllerRemovePath = "/amims/mpc_piro/mpc_piro/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcPiroControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcPiroControllerRemove$Response(params: MpcPiroControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcPiroDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcPiroControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcPiroControllerRemove(params: MpcPiroControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcPiroDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MpcPiroService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MpcPiroService>;
}
