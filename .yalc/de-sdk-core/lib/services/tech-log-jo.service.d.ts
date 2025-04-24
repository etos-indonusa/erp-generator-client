import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTechLogJoDto } from '../models/amims-tech-log-jo-dto';
import { TechLogJoControllerCreate$Params } from '../fn/tech-log-jo/tech-log-jo-controller-create';
import { TechLogJoControllerFindAll$Params } from '../fn/tech-log-jo/tech-log-jo-controller-find-all';
import { TechLogJoControllerFindOne$Params } from '../fn/tech-log-jo/tech-log-jo-controller-find-one';
import { TechLogJoControllerRemove$Params } from '../fn/tech-log-jo/tech-log-jo-controller-remove';
import { TechLogJoControllerUpdate$Params } from '../fn/tech-log-jo/tech-log-jo-controller-update';
import * as i0 from "@angular/core";
export declare class TechLogJoService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `techLogJoControllerFindAll()` */
    static readonly TechLogJoControllerFindAllPath = "/amims/tech_log_jo/tech_log_jo";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogJoControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogJoControllerFindAll$Response(params?: TechLogJoControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogJoDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogJoControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogJoControllerFindAll(params?: TechLogJoControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogJoDto>;
        'total'?: number;
    }>;
    /** Path part for operation `techLogJoControllerCreate()` */
    static readonly TechLogJoControllerCreatePath = "/amims/tech_log_jo/tech_log_jo";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogJoControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogJoControllerCreate$Response(params: TechLogJoControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogJoDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogJoControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogJoControllerCreate(params: TechLogJoControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogJoDto;
    }>;
    /** Path part for operation `techLogJoControllerFindOne()` */
    static readonly TechLogJoControllerFindOnePath = "/amims/tech_log_jo/tech_log_jo/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogJoControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogJoControllerFindOne$Response(params: TechLogJoControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogJoDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogJoControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogJoControllerFindOne(params: TechLogJoControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogJoDto;
    }>;
    /** Path part for operation `techLogJoControllerUpdate()` */
    static readonly TechLogJoControllerUpdatePath = "/amims/tech_log_jo/tech_log_jo/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogJoControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogJoControllerUpdate$Response(params: TechLogJoControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogJoDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogJoControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogJoControllerUpdate(params: TechLogJoControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogJoDto;
    }>;
    /** Path part for operation `techLogJoControllerRemove()` */
    static readonly TechLogJoControllerRemovePath = "/amims/tech_log_jo/tech_log_jo/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogJoControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogJoControllerRemove$Response(params: TechLogJoControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogJoDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogJoControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogJoControllerRemove(params: TechLogJoControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogJoDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TechLogJoService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TechLogJoService>;
}
