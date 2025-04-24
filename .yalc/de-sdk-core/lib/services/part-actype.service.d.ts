import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartActypeDto } from '../models/amims-part-actype-dto';
import { PartActypeControllerCreate$Params } from '../fn/part-actype/part-actype-controller-create';
import { PartActypeControllerFindAll$Params } from '../fn/part-actype/part-actype-controller-find-all';
import { PartActypeControllerFindOne$Params } from '../fn/part-actype/part-actype-controller-find-one';
import { PartActypeControllerRemove$Params } from '../fn/part-actype/part-actype-controller-remove';
import { PartActypeControllerUpdate$Params } from '../fn/part-actype/part-actype-controller-update';
import * as i0 from "@angular/core";
export declare class PartActypeService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partActypeControllerFindAll()` */
    static readonly PartActypeControllerFindAllPath = "/amims/part_actype/part_actype";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partActypeControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    partActypeControllerFindAll$Response(params?: PartActypeControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartActypeDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partActypeControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partActypeControllerFindAll(params?: PartActypeControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartActypeDto>;
        'total'?: number;
    }>;
    /** Path part for operation `partActypeControllerCreate()` */
    static readonly PartActypeControllerCreatePath = "/amims/part_actype/part_actype";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partActypeControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partActypeControllerCreate$Response(params: PartActypeControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartActypeDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partActypeControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partActypeControllerCreate(params: PartActypeControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartActypeDto;
    }>;
    /** Path part for operation `partActypeControllerFindOne()` */
    static readonly PartActypeControllerFindOnePath = "/amims/part_actype/part_actype/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partActypeControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    partActypeControllerFindOne$Response(params: PartActypeControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartActypeDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partActypeControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partActypeControllerFindOne(params: PartActypeControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartActypeDto;
    }>;
    /** Path part for operation `partActypeControllerUpdate()` */
    static readonly PartActypeControllerUpdatePath = "/amims/part_actype/part_actype/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partActypeControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partActypeControllerUpdate$Response(params: PartActypeControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartActypeDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partActypeControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partActypeControllerUpdate(params: PartActypeControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartActypeDto;
    }>;
    /** Path part for operation `partActypeControllerRemove()` */
    static readonly PartActypeControllerRemovePath = "/amims/part_actype/part_actype/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partActypeControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    partActypeControllerRemove$Response(params: PartActypeControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartActypeDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partActypeControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partActypeControllerRemove(params: PartActypeControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartActypeDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartActypeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartActypeService>;
}
