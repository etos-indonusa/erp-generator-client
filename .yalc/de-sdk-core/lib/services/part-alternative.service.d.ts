import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartAlternativeDto } from '../models/amims-part-alternative-dto';
import { PartAlternativeControllerCreate$Params } from '../fn/part-alternative/part-alternative-controller-create';
import { PartAlternativeControllerFindAll$Params } from '../fn/part-alternative/part-alternative-controller-find-all';
import { PartAlternativeControllerFindOne$Params } from '../fn/part-alternative/part-alternative-controller-find-one';
import { PartAlternativeControllerRemove$Params } from '../fn/part-alternative/part-alternative-controller-remove';
import { PartAlternativeControllerUpdate$Params } from '../fn/part-alternative/part-alternative-controller-update';
import * as i0 from "@angular/core";
export declare class PartAlternativeService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partAlternativeControllerFindAll()` */
    static readonly PartAlternativeControllerFindAllPath = "/amims/part_alternative/part_alternative";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partAlternativeControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    partAlternativeControllerFindAll$Response(params?: PartAlternativeControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartAlternativeDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partAlternativeControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partAlternativeControllerFindAll(params?: PartAlternativeControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartAlternativeDto>;
        'total'?: number;
    }>;
    /** Path part for operation `partAlternativeControllerCreate()` */
    static readonly PartAlternativeControllerCreatePath = "/amims/part_alternative/part_alternative";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partAlternativeControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partAlternativeControllerCreate$Response(params: PartAlternativeControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartAlternativeDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partAlternativeControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partAlternativeControllerCreate(params: PartAlternativeControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartAlternativeDto;
    }>;
    /** Path part for operation `partAlternativeControllerFindOne()` */
    static readonly PartAlternativeControllerFindOnePath = "/amims/part_alternative/part_alternative/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partAlternativeControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    partAlternativeControllerFindOne$Response(params: PartAlternativeControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartAlternativeDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partAlternativeControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partAlternativeControllerFindOne(params: PartAlternativeControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartAlternativeDto;
    }>;
    /** Path part for operation `partAlternativeControllerUpdate()` */
    static readonly PartAlternativeControllerUpdatePath = "/amims/part_alternative/part_alternative/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partAlternativeControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partAlternativeControllerUpdate$Response(params: PartAlternativeControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartAlternativeDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partAlternativeControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partAlternativeControllerUpdate(params: PartAlternativeControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartAlternativeDto;
    }>;
    /** Path part for operation `partAlternativeControllerRemove()` */
    static readonly PartAlternativeControllerRemovePath = "/amims/part_alternative/part_alternative/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partAlternativeControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    partAlternativeControllerRemove$Response(params: PartAlternativeControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartAlternativeDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partAlternativeControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partAlternativeControllerRemove(params: PartAlternativeControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartAlternativeDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartAlternativeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartAlternativeService>;
}
