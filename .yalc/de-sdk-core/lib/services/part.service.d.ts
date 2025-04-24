import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartDto } from '../models/amims-part-dto';
import { PartControllerCreate$Params } from '../fn/part/part-controller-create';
import { PartControllerFindAll$Params } from '../fn/part/part-controller-find-all';
import { PartControllerFindOne$Params } from '../fn/part/part-controller-find-one';
import { PartControllerRemove$Params } from '../fn/part/part-controller-remove';
import { PartControllerUpdate$Params } from '../fn/part/part-controller-update';
import * as i0 from "@angular/core";
export declare class PartService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partControllerFindAll()` */
    static readonly PartControllerFindAllPath = "/amims/part/part";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    partControllerFindAll$Response(params?: PartControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partControllerFindAll(params?: PartControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartDto>;
        'total'?: number;
    }>;
    /** Path part for operation `partControllerCreate()` */
    static readonly PartControllerCreatePath = "/amims/part/part";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partControllerCreate$Response(params: PartControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partControllerCreate(params: PartControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartDto;
    }>;
    /** Path part for operation `partControllerFindOne()` */
    static readonly PartControllerFindOnePath = "/amims/part/part/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    partControllerFindOne$Response(params: PartControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partControllerFindOne(params: PartControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartDto;
    }>;
    /** Path part for operation `partControllerUpdate()` */
    static readonly PartControllerUpdatePath = "/amims/part/part/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partControllerUpdate$Response(params: PartControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partControllerUpdate(params: PartControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartDto;
    }>;
    /** Path part for operation `partControllerRemove()` */
    static readonly PartControllerRemovePath = "/amims/part/part/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    partControllerRemove$Response(params: PartControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partControllerRemove(params: PartControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartService>;
}
