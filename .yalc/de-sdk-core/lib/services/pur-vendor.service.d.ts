import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurVendorDto } from '../models/amims-pur-vendor-dto';
import { PurVendorControllerCreate$Params } from '../fn/pur-vendor/pur-vendor-controller-create';
import { PurVendorControllerFindAll$Params } from '../fn/pur-vendor/pur-vendor-controller-find-all';
import { PurVendorControllerFindOne$Params } from '../fn/pur-vendor/pur-vendor-controller-find-one';
import { PurVendorControllerRemove$Params } from '../fn/pur-vendor/pur-vendor-controller-remove';
import { PurVendorControllerUpdate$Params } from '../fn/pur-vendor/pur-vendor-controller-update';
import * as i0 from "@angular/core";
export declare class PurVendorService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purVendorControllerFindAll()` */
    static readonly PurVendorControllerFindAllPath = "/amims/pur_vendor/pur_vendor";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purVendorControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    purVendorControllerFindAll$Response(params?: PurVendorControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurVendorDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purVendorControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purVendorControllerFindAll(params?: PurVendorControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurVendorDto>;
        'total'?: number;
    }>;
    /** Path part for operation `purVendorControllerCreate()` */
    static readonly PurVendorControllerCreatePath = "/amims/pur_vendor/pur_vendor";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purVendorControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purVendorControllerCreate$Response(params: PurVendorControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purVendorControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purVendorControllerCreate(params: PurVendorControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorDto;
    }>;
    /** Path part for operation `purVendorControllerFindOne()` */
    static readonly PurVendorControllerFindOnePath = "/amims/pur_vendor/pur_vendor/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purVendorControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    purVendorControllerFindOne$Response(params: PurVendorControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purVendorControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purVendorControllerFindOne(params: PurVendorControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorDto;
    }>;
    /** Path part for operation `purVendorControllerUpdate()` */
    static readonly PurVendorControllerUpdatePath = "/amims/pur_vendor/pur_vendor/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purVendorControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purVendorControllerUpdate$Response(params: PurVendorControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purVendorControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purVendorControllerUpdate(params: PurVendorControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorDto;
    }>;
    /** Path part for operation `purVendorControllerRemove()` */
    static readonly PurVendorControllerRemovePath = "/amims/pur_vendor/pur_vendor/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purVendorControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    purVendorControllerRemove$Response(params: PurVendorControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purVendorControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purVendorControllerRemove(params: PurVendorControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurVendorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurVendorService>;
}
