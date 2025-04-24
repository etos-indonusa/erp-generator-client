import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartidDto } from '../models/amims-partid-dto';
import { PartidControllerCreate$Params } from '../fn/partid/partid-controller-create';
import { PartidControllerFindAll$Params } from '../fn/partid/partid-controller-find-all';
import { PartidControllerFindOne$Params } from '../fn/partid/partid-controller-find-one';
import { PartidControllerRemove$Params } from '../fn/partid/partid-controller-remove';
import { PartidControllerUpdate$Params } from '../fn/partid/partid-controller-update';
import * as i0 from "@angular/core";
export declare class PartidService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partidControllerFindAll()` */
    static readonly PartidControllerFindAllPath = "/amims/partid/partid";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partidControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    partidControllerFindAll$Response(params?: PartidControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartidDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partidControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partidControllerFindAll(params?: PartidControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartidDto>;
        'total'?: number;
    }>;
    /** Path part for operation `partidControllerCreate()` */
    static readonly PartidControllerCreatePath = "/amims/partid/partid";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partidControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partidControllerCreate$Response(params: PartidControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartidDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partidControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partidControllerCreate(params: PartidControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartidDto;
    }>;
    /** Path part for operation `partidControllerFindOne()` */
    static readonly PartidControllerFindOnePath = "/amims/partid/partid/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partidControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    partidControllerFindOne$Response(params: PartidControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartidDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partidControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partidControllerFindOne(params: PartidControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartidDto;
    }>;
    /** Path part for operation `partidControllerUpdate()` */
    static readonly PartidControllerUpdatePath = "/amims/partid/partid/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partidControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partidControllerUpdate$Response(params: PartidControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartidDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partidControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partidControllerUpdate(params: PartidControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartidDto;
    }>;
    /** Path part for operation `partidControllerRemove()` */
    static readonly PartidControllerRemovePath = "/amims/partid/partid/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partidControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    partidControllerRemove$Response(params: PartidControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartidDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partidControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partidControllerRemove(params: PartidControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartidDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartidService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartidService>;
}
