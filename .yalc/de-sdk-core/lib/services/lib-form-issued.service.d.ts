import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLibFormIssuedDto } from '../models/amims-lib-form-issued-dto';
import { LibFormIssuedControllerCreate$Params } from '../fn/lib-form-issued/lib-form-issued-controller-create';
import { LibFormIssuedControllerFindAll$Params } from '../fn/lib-form-issued/lib-form-issued-controller-find-all';
import { LibFormIssuedControllerFindOne$Params } from '../fn/lib-form-issued/lib-form-issued-controller-find-one';
import { LibFormIssuedControllerRemove$Params } from '../fn/lib-form-issued/lib-form-issued-controller-remove';
import { LibFormIssuedControllerUpdate$Params } from '../fn/lib-form-issued/lib-form-issued-controller-update';
import * as i0 from "@angular/core";
export declare class LibFormIssuedService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `libFormIssuedControllerFindAll()` */
    static readonly LibFormIssuedControllerFindAllPath = "/amims/lib_form_issued/lib_form_issued";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `libFormIssuedControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    libFormIssuedControllerFindAll$Response(params?: LibFormIssuedControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLibFormIssuedDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `libFormIssuedControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    libFormIssuedControllerFindAll(params?: LibFormIssuedControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLibFormIssuedDto>;
        'total'?: number;
    }>;
    /** Path part for operation `libFormIssuedControllerCreate()` */
    static readonly LibFormIssuedControllerCreatePath = "/amims/lib_form_issued/lib_form_issued";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `libFormIssuedControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    libFormIssuedControllerCreate$Response(params: LibFormIssuedControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLibFormIssuedDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `libFormIssuedControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    libFormIssuedControllerCreate(params: LibFormIssuedControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLibFormIssuedDto;
    }>;
    /** Path part for operation `libFormIssuedControllerFindOne()` */
    static readonly LibFormIssuedControllerFindOnePath = "/amims/lib_form_issued/lib_form_issued/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `libFormIssuedControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    libFormIssuedControllerFindOne$Response(params: LibFormIssuedControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLibFormIssuedDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `libFormIssuedControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    libFormIssuedControllerFindOne(params: LibFormIssuedControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLibFormIssuedDto;
    }>;
    /** Path part for operation `libFormIssuedControllerUpdate()` */
    static readonly LibFormIssuedControllerUpdatePath = "/amims/lib_form_issued/lib_form_issued/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `libFormIssuedControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    libFormIssuedControllerUpdate$Response(params: LibFormIssuedControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLibFormIssuedDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `libFormIssuedControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    libFormIssuedControllerUpdate(params: LibFormIssuedControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLibFormIssuedDto;
    }>;
    /** Path part for operation `libFormIssuedControllerRemove()` */
    static readonly LibFormIssuedControllerRemovePath = "/amims/lib_form_issued/lib_form_issued/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `libFormIssuedControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    libFormIssuedControllerRemove$Response(params: LibFormIssuedControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLibFormIssuedDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `libFormIssuedControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    libFormIssuedControllerRemove(params: LibFormIssuedControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLibFormIssuedDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LibFormIssuedService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LibFormIssuedService>;
}
