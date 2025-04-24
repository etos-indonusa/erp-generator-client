import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTechLogItemDto } from '../models/amims-tech-log-item-dto';
import { TechLogItemControllerCreate$Params } from '../fn/tech-log-item/tech-log-item-controller-create';
import { TechLogItemControllerFindAll$Params } from '../fn/tech-log-item/tech-log-item-controller-find-all';
import { TechLogItemControllerFindOne$Params } from '../fn/tech-log-item/tech-log-item-controller-find-one';
import { TechLogItemControllerRemove$Params } from '../fn/tech-log-item/tech-log-item-controller-remove';
import { TechLogItemControllerUpdate$Params } from '../fn/tech-log-item/tech-log-item-controller-update';
import * as i0 from "@angular/core";
export declare class TechLogItemService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `techLogItemControllerFindAll()` */
    static readonly TechLogItemControllerFindAllPath = "/amims/tech_log_item/tech_log_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogItemControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogItemControllerFindAll$Response(params?: TechLogItemControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogItemDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogItemControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogItemControllerFindAll(params?: TechLogItemControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogItemDto>;
        'total'?: number;
    }>;
    /** Path part for operation `techLogItemControllerCreate()` */
    static readonly TechLogItemControllerCreatePath = "/amims/tech_log_item/tech_log_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogItemControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogItemControllerCreate$Response(params: TechLogItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogItemControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogItemControllerCreate(params: TechLogItemControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogItemDto;
    }>;
    /** Path part for operation `techLogItemControllerFindOne()` */
    static readonly TechLogItemControllerFindOnePath = "/amims/tech_log_item/tech_log_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogItemControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogItemControllerFindOne$Response(params: TechLogItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogItemControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogItemControllerFindOne(params: TechLogItemControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogItemDto;
    }>;
    /** Path part for operation `techLogItemControllerUpdate()` */
    static readonly TechLogItemControllerUpdatePath = "/amims/tech_log_item/tech_log_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogItemControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogItemControllerUpdate$Response(params: TechLogItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogItemControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogItemControllerUpdate(params: TechLogItemControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogItemDto;
    }>;
    /** Path part for operation `techLogItemControllerRemove()` */
    static readonly TechLogItemControllerRemovePath = "/amims/tech_log_item/tech_log_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogItemControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogItemControllerRemove$Response(params: TechLogItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogItemControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogItemControllerRemove(params: TechLogItemControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogItemDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TechLogItemService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TechLogItemService>;
}
