import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMelDto } from '../models/amims-mel-dto';
import { MelControllerCreate$Params } from '../fn/mel/mel-controller-create';
import { MelControllerFindAll$Params } from '../fn/mel/mel-controller-find-all';
import { MelControllerFindOne$Params } from '../fn/mel/mel-controller-find-one';
import { MelControllerRemove$Params } from '../fn/mel/mel-controller-remove';
import { MelControllerUpdate$Params } from '../fn/mel/mel-controller-update';
import * as i0 from "@angular/core";
export declare class MelService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `melControllerFindAll()` */
    static readonly MelControllerFindAllPath = "/amims/mel/mel";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `melControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    melControllerFindAll$Response(params?: MelControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMelDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `melControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    melControllerFindAll(params?: MelControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMelDto>;
        'total'?: number;
    }>;
    /** Path part for operation `melControllerCreate()` */
    static readonly MelControllerCreatePath = "/amims/mel/mel";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `melControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    melControllerCreate$Response(params: MelControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMelDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `melControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    melControllerCreate(params: MelControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMelDto;
    }>;
    /** Path part for operation `melControllerFindOne()` */
    static readonly MelControllerFindOnePath = "/amims/mel/mel/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `melControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    melControllerFindOne$Response(params: MelControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMelDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `melControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    melControllerFindOne(params: MelControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMelDto;
    }>;
    /** Path part for operation `melControllerUpdate()` */
    static readonly MelControllerUpdatePath = "/amims/mel/mel/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `melControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    melControllerUpdate$Response(params: MelControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMelDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `melControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    melControllerUpdate(params: MelControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMelDto;
    }>;
    /** Path part for operation `melControllerRemove()` */
    static readonly MelControllerRemovePath = "/amims/mel/mel/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `melControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    melControllerRemove$Response(params: MelControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMelDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `melControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    melControllerRemove(params: MelControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMelDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MelService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MelService>;
}
