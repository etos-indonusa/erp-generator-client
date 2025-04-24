import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerPmtrDto } from '../models/amims-engineer-pmtr-dto';
import { EngineerPmtrControllerCreate$Params } from '../fn/engineer-pmtr/engineer-pmtr-controller-create';
import { EngineerPmtrControllerFindAll$Params } from '../fn/engineer-pmtr/engineer-pmtr-controller-find-all';
import { EngineerPmtrControllerFindOne$Params } from '../fn/engineer-pmtr/engineer-pmtr-controller-find-one';
import { EngineerPmtrControllerRemove$Params } from '../fn/engineer-pmtr/engineer-pmtr-controller-remove';
import { EngineerPmtrControllerUpdate$Params } from '../fn/engineer-pmtr/engineer-pmtr-controller-update';
import * as i0 from "@angular/core";
export declare class EngineerPmtrService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerPmtrControllerFindAll()` */
    static readonly EngineerPmtrControllerFindAllPath = "/amims/engineer_pmtr/engineer_pmtr";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPmtrControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPmtrControllerFindAll$Response(params?: EngineerPmtrControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPmtrDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPmtrControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPmtrControllerFindAll(params?: EngineerPmtrControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPmtrDto>;
        'total'?: number;
    }>;
    /** Path part for operation `engineerPmtrControllerCreate()` */
    static readonly EngineerPmtrControllerCreatePath = "/amims/engineer_pmtr/engineer_pmtr";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPmtrControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPmtrControllerCreate$Response(params: EngineerPmtrControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPmtrDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPmtrControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPmtrControllerCreate(params: EngineerPmtrControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPmtrDto;
    }>;
    /** Path part for operation `engineerPmtrControllerFindOne()` */
    static readonly EngineerPmtrControllerFindOnePath = "/amims/engineer_pmtr/engineer_pmtr/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPmtrControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPmtrControllerFindOne$Response(params: EngineerPmtrControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPmtrDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPmtrControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPmtrControllerFindOne(params: EngineerPmtrControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPmtrDto;
    }>;
    /** Path part for operation `engineerPmtrControllerUpdate()` */
    static readonly EngineerPmtrControllerUpdatePath = "/amims/engineer_pmtr/engineer_pmtr/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPmtrControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPmtrControllerUpdate$Response(params: EngineerPmtrControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPmtrDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPmtrControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPmtrControllerUpdate(params: EngineerPmtrControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPmtrDto;
    }>;
    /** Path part for operation `engineerPmtrControllerRemove()` */
    static readonly EngineerPmtrControllerRemovePath = "/amims/engineer_pmtr/engineer_pmtr/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPmtrControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPmtrControllerRemove$Response(params: EngineerPmtrControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPmtrDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPmtrControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPmtrControllerRemove(params: EngineerPmtrControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPmtrDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerPmtrService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerPmtrService>;
}
