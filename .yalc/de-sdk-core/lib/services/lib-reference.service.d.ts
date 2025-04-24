import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLibReferenceDto } from '../models/amims-lib-reference-dto';
import { LibReferenceControllerCreate$Params } from '../fn/lib-reference/lib-reference-controller-create';
import { LibReferenceControllerFindAll$Params } from '../fn/lib-reference/lib-reference-controller-find-all';
import { LibReferenceControllerFindOne$Params } from '../fn/lib-reference/lib-reference-controller-find-one';
import { LibReferenceControllerRemove$Params } from '../fn/lib-reference/lib-reference-controller-remove';
import { LibReferenceControllerUpdate$Params } from '../fn/lib-reference/lib-reference-controller-update';
import * as i0 from "@angular/core";
export declare class LibReferenceService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `libReferenceControllerFindAll()` */
    static readonly LibReferenceControllerFindAllPath = "/amims/lib_reference/lib_reference";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `libReferenceControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    libReferenceControllerFindAll$Response(params?: LibReferenceControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLibReferenceDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `libReferenceControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    libReferenceControllerFindAll(params?: LibReferenceControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLibReferenceDto>;
        'total'?: number;
    }>;
    /** Path part for operation `libReferenceControllerCreate()` */
    static readonly LibReferenceControllerCreatePath = "/amims/lib_reference/lib_reference";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `libReferenceControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    libReferenceControllerCreate$Response(params: LibReferenceControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLibReferenceDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `libReferenceControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    libReferenceControllerCreate(params: LibReferenceControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLibReferenceDto;
    }>;
    /** Path part for operation `libReferenceControllerFindOne()` */
    static readonly LibReferenceControllerFindOnePath = "/amims/lib_reference/lib_reference/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `libReferenceControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    libReferenceControllerFindOne$Response(params: LibReferenceControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLibReferenceDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `libReferenceControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    libReferenceControllerFindOne(params: LibReferenceControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLibReferenceDto;
    }>;
    /** Path part for operation `libReferenceControllerUpdate()` */
    static readonly LibReferenceControllerUpdatePath = "/amims/lib_reference/lib_reference/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `libReferenceControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    libReferenceControllerUpdate$Response(params: LibReferenceControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLibReferenceDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `libReferenceControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    libReferenceControllerUpdate(params: LibReferenceControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLibReferenceDto;
    }>;
    /** Path part for operation `libReferenceControllerRemove()` */
    static readonly LibReferenceControllerRemovePath = "/amims/lib_reference/lib_reference/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `libReferenceControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    libReferenceControllerRemove$Response(params: LibReferenceControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLibReferenceDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `libReferenceControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    libReferenceControllerRemove(params: LibReferenceControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLibReferenceDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LibReferenceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LibReferenceService>;
}
