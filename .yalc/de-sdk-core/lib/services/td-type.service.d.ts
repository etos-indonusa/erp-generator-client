import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTdTypeDto } from '../models/amims-td-type-dto';
import { TdTypeControllerCreate$Params } from '../fn/td-type/td-type-controller-create';
import { TdTypeControllerFindAll$Params } from '../fn/td-type/td-type-controller-find-all';
import { TdTypeControllerFindOne$Params } from '../fn/td-type/td-type-controller-find-one';
import { TdTypeControllerRemove$Params } from '../fn/td-type/td-type-controller-remove';
import { TdTypeControllerUpdate$Params } from '../fn/td-type/td-type-controller-update';
import * as i0 from "@angular/core";
export declare class TdTypeService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `tdTypeControllerFindAll()` */
    static readonly TdTypeControllerFindAllPath = "/amims/td_type/td_type";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdTypeControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdTypeControllerFindAll$Response(params?: TdTypeControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTdTypeDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdTypeControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdTypeControllerFindAll(params?: TdTypeControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTdTypeDto>;
        'total'?: number;
    }>;
    /** Path part for operation `tdTypeControllerCreate()` */
    static readonly TdTypeControllerCreatePath = "/amims/td_type/td_type";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdTypeControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdTypeControllerCreate$Response(params: TdTypeControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdTypeDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdTypeControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdTypeControllerCreate(params: TdTypeControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdTypeDto;
    }>;
    /** Path part for operation `tdTypeControllerFindOne()` */
    static readonly TdTypeControllerFindOnePath = "/amims/td_type/td_type/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdTypeControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdTypeControllerFindOne$Response(params: TdTypeControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdTypeDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdTypeControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdTypeControllerFindOne(params: TdTypeControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdTypeDto;
    }>;
    /** Path part for operation `tdTypeControllerUpdate()` */
    static readonly TdTypeControllerUpdatePath = "/amims/td_type/td_type/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdTypeControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdTypeControllerUpdate$Response(params: TdTypeControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdTypeDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdTypeControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdTypeControllerUpdate(params: TdTypeControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdTypeDto;
    }>;
    /** Path part for operation `tdTypeControllerRemove()` */
    static readonly TdTypeControllerRemovePath = "/amims/td_type/td_type/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdTypeControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdTypeControllerRemove$Response(params: TdTypeControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdTypeDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdTypeControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdTypeControllerRemove(params: TdTypeControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdTypeDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TdTypeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TdTypeService>;
}
