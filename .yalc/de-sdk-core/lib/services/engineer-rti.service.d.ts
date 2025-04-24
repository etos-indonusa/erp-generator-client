import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerRtiDto } from '../models/amims-engineer-rti-dto';
import { EngineerRtiControllerCreate$Params } from '../fn/engineer-rti/engineer-rti-controller-create';
import { EngineerRtiControllerFindAll$Params } from '../fn/engineer-rti/engineer-rti-controller-find-all';
import { EngineerRtiControllerFindOne$Params } from '../fn/engineer-rti/engineer-rti-controller-find-one';
import { EngineerRtiControllerRemove$Params } from '../fn/engineer-rti/engineer-rti-controller-remove';
import { EngineerRtiControllerUpdate$Params } from '../fn/engineer-rti/engineer-rti-controller-update';
import * as i0 from "@angular/core";
export declare class EngineerRtiService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerRtiControllerFindAll()` */
    static readonly EngineerRtiControllerFindAllPath = "/amims/engineer_rti/engineer_rti";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerRtiControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerRtiControllerFindAll$Response(params?: EngineerRtiControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerRtiDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerRtiControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerRtiControllerFindAll(params?: EngineerRtiControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerRtiDto>;
        'total'?: number;
    }>;
    /** Path part for operation `engineerRtiControllerCreate()` */
    static readonly EngineerRtiControllerCreatePath = "/amims/engineer_rti/engineer_rti";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerRtiControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerRtiControllerCreate$Response(params: EngineerRtiControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerRtiControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerRtiControllerCreate(params: EngineerRtiControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiDto;
    }>;
    /** Path part for operation `engineerRtiControllerFindOne()` */
    static readonly EngineerRtiControllerFindOnePath = "/amims/engineer_rti/engineer_rti/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerRtiControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerRtiControllerFindOne$Response(params: EngineerRtiControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerRtiControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerRtiControllerFindOne(params: EngineerRtiControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiDto;
    }>;
    /** Path part for operation `engineerRtiControllerUpdate()` */
    static readonly EngineerRtiControllerUpdatePath = "/amims/engineer_rti/engineer_rti/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerRtiControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerRtiControllerUpdate$Response(params: EngineerRtiControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerRtiControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerRtiControllerUpdate(params: EngineerRtiControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiDto;
    }>;
    /** Path part for operation `engineerRtiControllerRemove()` */
    static readonly EngineerRtiControllerRemovePath = "/amims/engineer_rti/engineer_rti/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerRtiControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerRtiControllerRemove$Response(params: EngineerRtiControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerRtiControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerRtiControllerRemove(params: EngineerRtiControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerRtiService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerRtiService>;
}
