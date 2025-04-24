import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurReturnDto } from '../models/amims-pur-return-dto';
import { PurReturnControllerCreate$Params } from '../fn/pur-return/pur-return-controller-create';
import { PurReturnControllerFindAll$Params } from '../fn/pur-return/pur-return-controller-find-all';
import { PurReturnControllerFindOne$Params } from '../fn/pur-return/pur-return-controller-find-one';
import { PurReturnControllerRemove$Params } from '../fn/pur-return/pur-return-controller-remove';
import { PurReturnControllerUpdate$Params } from '../fn/pur-return/pur-return-controller-update';
import * as i0 from "@angular/core";
export declare class PurReturnService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purReturnControllerFindAll()` */
    static readonly PurReturnControllerFindAllPath = "/amims/pur_return/pur_return";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purReturnControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    purReturnControllerFindAll$Response(params?: PurReturnControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurReturnDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purReturnControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purReturnControllerFindAll(params?: PurReturnControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurReturnDto>;
        'total'?: number;
    }>;
    /** Path part for operation `purReturnControllerCreate()` */
    static readonly PurReturnControllerCreatePath = "/amims/pur_return/pur_return";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purReturnControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purReturnControllerCreate$Response(params: PurReturnControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurReturnDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purReturnControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purReturnControllerCreate(params: PurReturnControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurReturnDto;
    }>;
    /** Path part for operation `purReturnControllerFindOne()` */
    static readonly PurReturnControllerFindOnePath = "/amims/pur_return/pur_return/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purReturnControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    purReturnControllerFindOne$Response(params: PurReturnControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurReturnDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purReturnControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purReturnControllerFindOne(params: PurReturnControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurReturnDto;
    }>;
    /** Path part for operation `purReturnControllerUpdate()` */
    static readonly PurReturnControllerUpdatePath = "/amims/pur_return/pur_return/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purReturnControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purReturnControllerUpdate$Response(params: PurReturnControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurReturnDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purReturnControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purReturnControllerUpdate(params: PurReturnControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurReturnDto;
    }>;
    /** Path part for operation `purReturnControllerRemove()` */
    static readonly PurReturnControllerRemovePath = "/amims/pur_return/pur_return/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purReturnControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    purReturnControllerRemove$Response(params: PurReturnControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurReturnDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purReturnControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purReturnControllerRemove(params: PurReturnControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurReturnDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurReturnService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurReturnService>;
}
