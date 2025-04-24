import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTdRefDto } from '../models/amims-td-ref-dto';
import { TdRefControllerCreate$Params } from '../fn/td-ref/td-ref-controller-create';
import { TdRefControllerFindAll$Params } from '../fn/td-ref/td-ref-controller-find-all';
import { TdRefControllerFindOne$Params } from '../fn/td-ref/td-ref-controller-find-one';
import { TdRefControllerRemove$Params } from '../fn/td-ref/td-ref-controller-remove';
import { TdRefControllerUpdate$Params } from '../fn/td-ref/td-ref-controller-update';
import * as i0 from "@angular/core";
export declare class TdRefService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `tdRefControllerFindAll()` */
    static readonly TdRefControllerFindAllPath = "/amims/td_ref/td_ref";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdRefControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdRefControllerFindAll$Response(params?: TdRefControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTdRefDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdRefControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdRefControllerFindAll(params?: TdRefControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTdRefDto>;
        'total'?: number;
    }>;
    /** Path part for operation `tdRefControllerCreate()` */
    static readonly TdRefControllerCreatePath = "/amims/td_ref/td_ref";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdRefControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdRefControllerCreate$Response(params: TdRefControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdRefDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdRefControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdRefControllerCreate(params: TdRefControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdRefDto;
    }>;
    /** Path part for operation `tdRefControllerFindOne()` */
    static readonly TdRefControllerFindOnePath = "/amims/td_ref/td_ref/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdRefControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdRefControllerFindOne$Response(params: TdRefControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdRefDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdRefControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdRefControllerFindOne(params: TdRefControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdRefDto;
    }>;
    /** Path part for operation `tdRefControllerUpdate()` */
    static readonly TdRefControllerUpdatePath = "/amims/td_ref/td_ref/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdRefControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdRefControllerUpdate$Response(params: TdRefControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdRefDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdRefControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdRefControllerUpdate(params: TdRefControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdRefDto;
    }>;
    /** Path part for operation `tdRefControllerRemove()` */
    static readonly TdRefControllerRemovePath = "/amims/td_ref/td_ref/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdRefControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdRefControllerRemove$Response(params: TdRefControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdRefDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdRefControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdRefControllerRemove(params: TdRefControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdRefDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TdRefService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TdRefService>;
}
