import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartConditionDto } from '../models/amims-part-condition-dto';
import { PartConditionControllerCreate$Params } from '../fn/part-condition/part-condition-controller-create';
import { PartConditionControllerFindAll$Params } from '../fn/part-condition/part-condition-controller-find-all';
import { PartConditionControllerFindOne$Params } from '../fn/part-condition/part-condition-controller-find-one';
import { PartConditionControllerRemove$Params } from '../fn/part-condition/part-condition-controller-remove';
import { PartConditionControllerUpdate$Params } from '../fn/part-condition/part-condition-controller-update';
import * as i0 from "@angular/core";
export declare class PartConditionService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partConditionControllerFindAll()` */
    static readonly PartConditionControllerFindAllPath = "/amims/part_condition/part_condition";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partConditionControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    partConditionControllerFindAll$Response(params?: PartConditionControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartConditionDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partConditionControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partConditionControllerFindAll(params?: PartConditionControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartConditionDto>;
        'total'?: number;
    }>;
    /** Path part for operation `partConditionControllerCreate()` */
    static readonly PartConditionControllerCreatePath = "/amims/part_condition/part_condition";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partConditionControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partConditionControllerCreate$Response(params: PartConditionControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartConditionDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partConditionControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partConditionControllerCreate(params: PartConditionControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartConditionDto;
    }>;
    /** Path part for operation `partConditionControllerFindOne()` */
    static readonly PartConditionControllerFindOnePath = "/amims/part_condition/part_condition/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partConditionControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    partConditionControllerFindOne$Response(params: PartConditionControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartConditionDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partConditionControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partConditionControllerFindOne(params: PartConditionControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartConditionDto;
    }>;
    /** Path part for operation `partConditionControllerUpdate()` */
    static readonly PartConditionControllerUpdatePath = "/amims/part_condition/part_condition/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partConditionControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partConditionControllerUpdate$Response(params: PartConditionControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartConditionDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partConditionControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partConditionControllerUpdate(params: PartConditionControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartConditionDto;
    }>;
    /** Path part for operation `partConditionControllerRemove()` */
    static readonly PartConditionControllerRemovePath = "/amims/part_condition/part_condition/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partConditionControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    partConditionControllerRemove$Response(params: PartConditionControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartConditionDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partConditionControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partConditionControllerRemove(params: PartConditionControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartConditionDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartConditionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartConditionService>;
}
