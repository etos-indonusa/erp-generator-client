import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerPmtrItemDto } from '../models/amims-engineer-pmtr-item-dto';
import { EngineerPmtrItemControllerCreate$Params } from '../fn/engineer-pmtr-item/engineer-pmtr-item-controller-create';
import { EngineerPmtrItemControllerFindAll$Params } from '../fn/engineer-pmtr-item/engineer-pmtr-item-controller-find-all';
import { EngineerPmtrItemControllerFindOne$Params } from '../fn/engineer-pmtr-item/engineer-pmtr-item-controller-find-one';
import { EngineerPmtrItemControllerRemove$Params } from '../fn/engineer-pmtr-item/engineer-pmtr-item-controller-remove';
import { EngineerPmtrItemControllerUpdate$Params } from '../fn/engineer-pmtr-item/engineer-pmtr-item-controller-update';
import * as i0 from "@angular/core";
export declare class EngineerPmtrItemService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerPmtrItemControllerFindAll()` */
    static readonly EngineerPmtrItemControllerFindAllPath = "/amims/engineer_pmtr_item/engineer_pmtr_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPmtrItemControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPmtrItemControllerFindAll$Response(params?: EngineerPmtrItemControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPmtrItemDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPmtrItemControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPmtrItemControllerFindAll(params?: EngineerPmtrItemControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPmtrItemDto>;
        'total'?: number;
    }>;
    /** Path part for operation `engineerPmtrItemControllerCreate()` */
    static readonly EngineerPmtrItemControllerCreatePath = "/amims/engineer_pmtr_item/engineer_pmtr_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPmtrItemControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPmtrItemControllerCreate$Response(params: EngineerPmtrItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPmtrItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPmtrItemControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPmtrItemControllerCreate(params: EngineerPmtrItemControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPmtrItemDto;
    }>;
    /** Path part for operation `engineerPmtrItemControllerFindOne()` */
    static readonly EngineerPmtrItemControllerFindOnePath = "/amims/engineer_pmtr_item/engineer_pmtr_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPmtrItemControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPmtrItemControllerFindOne$Response(params: EngineerPmtrItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPmtrItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPmtrItemControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPmtrItemControllerFindOne(params: EngineerPmtrItemControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPmtrItemDto;
    }>;
    /** Path part for operation `engineerPmtrItemControllerUpdate()` */
    static readonly EngineerPmtrItemControllerUpdatePath = "/amims/engineer_pmtr_item/engineer_pmtr_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPmtrItemControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPmtrItemControllerUpdate$Response(params: EngineerPmtrItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPmtrItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPmtrItemControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPmtrItemControllerUpdate(params: EngineerPmtrItemControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPmtrItemDto;
    }>;
    /** Path part for operation `engineerPmtrItemControllerRemove()` */
    static readonly EngineerPmtrItemControllerRemovePath = "/amims/engineer_pmtr_item/engineer_pmtr_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPmtrItemControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPmtrItemControllerRemove$Response(params: EngineerPmtrItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPmtrItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPmtrItemControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPmtrItemControllerRemove(params: EngineerPmtrItemControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPmtrItemDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerPmtrItemService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerPmtrItemService>;
}
