import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTdDto } from '../models/amims-td-dto';
import { TdControllerCreate$Params } from '../fn/td/td-controller-create';
import { TdControllerFindAll$Params } from '../fn/td/td-controller-find-all';
import { TdControllerFindOne$Params } from '../fn/td/td-controller-find-one';
import { TdControllerRemove$Params } from '../fn/td/td-controller-remove';
import { TdControllerUpdate$Params } from '../fn/td/td-controller-update';
import * as i0 from "@angular/core";
export declare class TdService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `tdControllerFindAll()` */
    static readonly TdControllerFindAllPath = "/amims/td/td";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdControllerFindAll$Response(params?: TdControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTdDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdControllerFindAll(params?: TdControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTdDto>;
        'total'?: number;
    }>;
    /** Path part for operation `tdControllerCreate()` */
    static readonly TdControllerCreatePath = "/amims/td/td";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdControllerCreate$Response(params: TdControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdControllerCreate(params: TdControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdDto;
    }>;
    /** Path part for operation `tdControllerFindOne()` */
    static readonly TdControllerFindOnePath = "/amims/td/td/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdControllerFindOne$Response(params: TdControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdControllerFindOne(params: TdControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdDto;
    }>;
    /** Path part for operation `tdControllerUpdate()` */
    static readonly TdControllerUpdatePath = "/amims/td/td/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdControllerUpdate$Response(params: TdControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdControllerUpdate(params: TdControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdDto;
    }>;
    /** Path part for operation `tdControllerRemove()` */
    static readonly TdControllerRemovePath = "/amims/td/td/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdControllerRemove$Response(params: TdControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdControllerRemove(params: TdControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TdService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TdService>;
}
