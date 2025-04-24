import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerPrisItemDto } from '../models/amims-engineer-pris-item-dto';
import { EngineerPrisItemControllerCreate$Params } from '../fn/engineer-pris-item/engineer-pris-item-controller-create';
import { EngineerPrisItemControllerFindAll$Params } from '../fn/engineer-pris-item/engineer-pris-item-controller-find-all';
import { EngineerPrisItemControllerFindOne$Params } from '../fn/engineer-pris-item/engineer-pris-item-controller-find-one';
import { EngineerPrisItemControllerRemove$Params } from '../fn/engineer-pris-item/engineer-pris-item-controller-remove';
import { EngineerPrisItemControllerUpdate$Params } from '../fn/engineer-pris-item/engineer-pris-item-controller-update';
import * as i0 from "@angular/core";
export declare class EngineerPrisItemService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerPrisItemControllerFindAll()` */
    static readonly EngineerPrisItemControllerFindAllPath = "/amims/engineer_pris_item/engineer_pris_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisItemControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisItemControllerFindAll$Response(params?: EngineerPrisItemControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPrisItemDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisItemControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisItemControllerFindAll(params?: EngineerPrisItemControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPrisItemDto>;
        'total'?: number;
    }>;
    /** Path part for operation `engineerPrisItemControllerCreate()` */
    static readonly EngineerPrisItemControllerCreatePath = "/amims/engineer_pris_item/engineer_pris_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisItemControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisItemControllerCreate$Response(params: EngineerPrisItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisItemControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisItemControllerCreate(params: EngineerPrisItemControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisItemDto;
    }>;
    /** Path part for operation `engineerPrisItemControllerFindOne()` */
    static readonly EngineerPrisItemControllerFindOnePath = "/amims/engineer_pris_item/engineer_pris_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisItemControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisItemControllerFindOne$Response(params: EngineerPrisItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisItemControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisItemControllerFindOne(params: EngineerPrisItemControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisItemDto;
    }>;
    /** Path part for operation `engineerPrisItemControllerUpdate()` */
    static readonly EngineerPrisItemControllerUpdatePath = "/amims/engineer_pris_item/engineer_pris_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisItemControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisItemControllerUpdate$Response(params: EngineerPrisItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisItemControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisItemControllerUpdate(params: EngineerPrisItemControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisItemDto;
    }>;
    /** Path part for operation `engineerPrisItemControllerRemove()` */
    static readonly EngineerPrisItemControllerRemovePath = "/amims/engineer_pris_item/engineer_pris_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisItemControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisItemControllerRemove$Response(params: EngineerPrisItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisItemControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisItemControllerRemove(params: EngineerPrisItemControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisItemDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerPrisItemService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerPrisItemService>;
}
