import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerPrisReturnItemDto } from '../models/amims-engineer-pris-return-item-dto';
import { EngineerPrisReturnItemControllerCreate$Params } from '../fn/engineer-pris-return-item/engineer-pris-return-item-controller-create';
import { EngineerPrisReturnItemControllerFindAll$Params } from '../fn/engineer-pris-return-item/engineer-pris-return-item-controller-find-all';
import { EngineerPrisReturnItemControllerFindOne$Params } from '../fn/engineer-pris-return-item/engineer-pris-return-item-controller-find-one';
import { EngineerPrisReturnItemControllerRemove$Params } from '../fn/engineer-pris-return-item/engineer-pris-return-item-controller-remove';
import { EngineerPrisReturnItemControllerUpdate$Params } from '../fn/engineer-pris-return-item/engineer-pris-return-item-controller-update';
import * as i0 from "@angular/core";
export declare class EngineerPrisReturnItemService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerPrisReturnItemControllerFindAll()` */
    static readonly EngineerPrisReturnItemControllerFindAllPath = "/amims/engineer_pris_return_item/engineer_pris_return_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisReturnItemControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisReturnItemControllerFindAll$Response(params?: EngineerPrisReturnItemControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPrisReturnItemDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisReturnItemControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisReturnItemControllerFindAll(params?: EngineerPrisReturnItemControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPrisReturnItemDto>;
        'total'?: number;
    }>;
    /** Path part for operation `engineerPrisReturnItemControllerCreate()` */
    static readonly EngineerPrisReturnItemControllerCreatePath = "/amims/engineer_pris_return_item/engineer_pris_return_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisReturnItemControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisReturnItemControllerCreate$Response(params: EngineerPrisReturnItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisReturnItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisReturnItemControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisReturnItemControllerCreate(params: EngineerPrisReturnItemControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisReturnItemDto;
    }>;
    /** Path part for operation `engineerPrisReturnItemControllerFindOne()` */
    static readonly EngineerPrisReturnItemControllerFindOnePath = "/amims/engineer_pris_return_item/engineer_pris_return_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisReturnItemControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisReturnItemControllerFindOne$Response(params: EngineerPrisReturnItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisReturnItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisReturnItemControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisReturnItemControllerFindOne(params: EngineerPrisReturnItemControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisReturnItemDto;
    }>;
    /** Path part for operation `engineerPrisReturnItemControllerUpdate()` */
    static readonly EngineerPrisReturnItemControllerUpdatePath = "/amims/engineer_pris_return_item/engineer_pris_return_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisReturnItemControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisReturnItemControllerUpdate$Response(params: EngineerPrisReturnItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisReturnItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisReturnItemControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisReturnItemControllerUpdate(params: EngineerPrisReturnItemControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisReturnItemDto;
    }>;
    /** Path part for operation `engineerPrisReturnItemControllerRemove()` */
    static readonly EngineerPrisReturnItemControllerRemovePath = "/amims/engineer_pris_return_item/engineer_pris_return_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisReturnItemControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisReturnItemControllerRemove$Response(params: EngineerPrisReturnItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisReturnItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisReturnItemControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisReturnItemControllerRemove(params: EngineerPrisReturnItemControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisReturnItemDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerPrisReturnItemService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerPrisReturnItemService>;
}
