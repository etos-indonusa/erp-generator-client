import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTechLogDto } from '../models/amims-tech-log-dto';
import { TechLogControllerCreate$Params } from '../fn/tech-log/tech-log-controller-create';
import { TechLogControllerFindAll$Params } from '../fn/tech-log/tech-log-controller-find-all';
import { TechLogControllerFindOne$Params } from '../fn/tech-log/tech-log-controller-find-one';
import { TechLogControllerRemove$Params } from '../fn/tech-log/tech-log-controller-remove';
import { TechLogControllerUpdate$Params } from '../fn/tech-log/tech-log-controller-update';
import * as i0 from "@angular/core";
export declare class TechLogService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `techLogControllerFindAll()` */
    static readonly TechLogControllerFindAllPath = "/amims/tech_log/tech_log";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogControllerFindAll$Response(params?: TechLogControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogControllerFindAll(params?: TechLogControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogDto>;
        'total'?: number;
    }>;
    /** Path part for operation `techLogControllerCreate()` */
    static readonly TechLogControllerCreatePath = "/amims/tech_log/tech_log";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogControllerCreate$Response(params: TechLogControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogControllerCreate(params: TechLogControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogDto;
    }>;
    /** Path part for operation `techLogControllerFindOne()` */
    static readonly TechLogControllerFindOnePath = "/amims/tech_log/tech_log/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogControllerFindOne$Response(params: TechLogControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogControllerFindOne(params: TechLogControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogDto;
    }>;
    /** Path part for operation `techLogControllerUpdate()` */
    static readonly TechLogControllerUpdatePath = "/amims/tech_log/tech_log/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogControllerUpdate$Response(params: TechLogControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogControllerUpdate(params: TechLogControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogDto;
    }>;
    /** Path part for operation `techLogControllerRemove()` */
    static readonly TechLogControllerRemovePath = "/amims/tech_log/tech_log/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogControllerRemove$Response(params: TechLogControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogControllerRemove(params: TechLogControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TechLogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TechLogService>;
}
