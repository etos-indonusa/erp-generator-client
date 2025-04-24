import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLibUploadDto } from '../models/amims-lib-upload-dto';
import { LibUploadControllerCreate$Params } from '../fn/lib-upload/lib-upload-controller-create';
import { LibUploadControllerFindAll$Params } from '../fn/lib-upload/lib-upload-controller-find-all';
import { LibUploadControllerFindOne$Params } from '../fn/lib-upload/lib-upload-controller-find-one';
import { LibUploadControllerRemove$Params } from '../fn/lib-upload/lib-upload-controller-remove';
import { LibUploadControllerUpdate$Params } from '../fn/lib-upload/lib-upload-controller-update';
import * as i0 from "@angular/core";
export declare class LibUploadService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `libUploadControllerFindAll()` */
    static readonly LibUploadControllerFindAllPath = "/amims/lib_upload/lib_upload";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `libUploadControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    libUploadControllerFindAll$Response(params?: LibUploadControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLibUploadDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `libUploadControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    libUploadControllerFindAll(params?: LibUploadControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLibUploadDto>;
        'total'?: number;
    }>;
    /** Path part for operation `libUploadControllerCreate()` */
    static readonly LibUploadControllerCreatePath = "/amims/lib_upload/lib_upload";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `libUploadControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    libUploadControllerCreate$Response(params: LibUploadControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLibUploadDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `libUploadControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    libUploadControllerCreate(params: LibUploadControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLibUploadDto;
    }>;
    /** Path part for operation `libUploadControllerFindOne()` */
    static readonly LibUploadControllerFindOnePath = "/amims/lib_upload/lib_upload/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `libUploadControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    libUploadControllerFindOne$Response(params: LibUploadControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLibUploadDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `libUploadControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    libUploadControllerFindOne(params: LibUploadControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLibUploadDto;
    }>;
    /** Path part for operation `libUploadControllerUpdate()` */
    static readonly LibUploadControllerUpdatePath = "/amims/lib_upload/lib_upload/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `libUploadControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    libUploadControllerUpdate$Response(params: LibUploadControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLibUploadDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `libUploadControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    libUploadControllerUpdate(params: LibUploadControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLibUploadDto;
    }>;
    /** Path part for operation `libUploadControllerRemove()` */
    static readonly LibUploadControllerRemovePath = "/amims/lib_upload/lib_upload/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `libUploadControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    libUploadControllerRemove$Response(params: LibUploadControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLibUploadDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `libUploadControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    libUploadControllerRemove(params: LibUploadControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLibUploadDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LibUploadService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LibUploadService>;
}
