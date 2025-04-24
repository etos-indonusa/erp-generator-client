import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerPrisDto } from '../models/amims-engineer-pris-dto';
import { EngineerPrisControllerCreate$Params } from '../fn/engineer-pris/engineer-pris-controller-create';
import { EngineerPrisControllerFindAll$Params } from '../fn/engineer-pris/engineer-pris-controller-find-all';
import { EngineerPrisControllerFindOne$Params } from '../fn/engineer-pris/engineer-pris-controller-find-one';
import { EngineerPrisControllerRemove$Params } from '../fn/engineer-pris/engineer-pris-controller-remove';
import { EngineerPrisControllerUpdate$Params } from '../fn/engineer-pris/engineer-pris-controller-update';
import * as i0 from "@angular/core";
export declare class EngineerPrisService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerPrisControllerFindAll()` */
    static readonly EngineerPrisControllerFindAllPath = "/amims/engineer_pris/engineer_pris";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisControllerFindAll$Response(params?: EngineerPrisControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPrisDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisControllerFindAll(params?: EngineerPrisControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPrisDto>;
        'total'?: number;
    }>;
    /** Path part for operation `engineerPrisControllerCreate()` */
    static readonly EngineerPrisControllerCreatePath = "/amims/engineer_pris/engineer_pris";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisControllerCreate$Response(params: EngineerPrisControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisControllerCreate(params: EngineerPrisControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisDto;
    }>;
    /** Path part for operation `engineerPrisControllerFindOne()` */
    static readonly EngineerPrisControllerFindOnePath = "/amims/engineer_pris/engineer_pris/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisControllerFindOne$Response(params: EngineerPrisControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisControllerFindOne(params: EngineerPrisControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisDto;
    }>;
    /** Path part for operation `engineerPrisControllerUpdate()` */
    static readonly EngineerPrisControllerUpdatePath = "/amims/engineer_pris/engineer_pris/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisControllerUpdate$Response(params: EngineerPrisControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisControllerUpdate(params: EngineerPrisControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisDto;
    }>;
    /** Path part for operation `engineerPrisControllerRemove()` */
    static readonly EngineerPrisControllerRemovePath = "/amims/engineer_pris/engineer_pris/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisControllerRemove$Response(params: EngineerPrisControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisControllerRemove(params: EngineerPrisControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerPrisService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerPrisService>;
}
