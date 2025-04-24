import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPositionDto } from '../models/amims-position-dto';
import { PositionControllerCreate$Params } from '../fn/position/position-controller-create';
import { PositionControllerFindAll$Params } from '../fn/position/position-controller-find-all';
import { PositionControllerFindOne$Params } from '../fn/position/position-controller-find-one';
import { PositionControllerRemove$Params } from '../fn/position/position-controller-remove';
import { PositionControllerUpdate$Params } from '../fn/position/position-controller-update';
import * as i0 from "@angular/core";
export declare class PositionService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `positionControllerFindAll()` */
    static readonly PositionControllerFindAllPath = "/amims/position/position";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `positionControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    positionControllerFindAll$Response(params?: PositionControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPositionDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `positionControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    positionControllerFindAll(params?: PositionControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPositionDto>;
        'total'?: number;
    }>;
    /** Path part for operation `positionControllerCreate()` */
    static readonly PositionControllerCreatePath = "/amims/position/position";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `positionControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    positionControllerCreate$Response(params: PositionControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPositionDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `positionControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    positionControllerCreate(params: PositionControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPositionDto;
    }>;
    /** Path part for operation `positionControllerFindOne()` */
    static readonly PositionControllerFindOnePath = "/amims/position/position/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `positionControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    positionControllerFindOne$Response(params: PositionControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPositionDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `positionControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    positionControllerFindOne(params: PositionControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPositionDto;
    }>;
    /** Path part for operation `positionControllerUpdate()` */
    static readonly PositionControllerUpdatePath = "/amims/position/position/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `positionControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    positionControllerUpdate$Response(params: PositionControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPositionDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `positionControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    positionControllerUpdate(params: PositionControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPositionDto;
    }>;
    /** Path part for operation `positionControllerRemove()` */
    static readonly PositionControllerRemovePath = "/amims/position/position/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `positionControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    positionControllerRemove$Response(params: PositionControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPositionDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `positionControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    positionControllerRemove(params: PositionControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPositionDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PositionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PositionService>;
}
