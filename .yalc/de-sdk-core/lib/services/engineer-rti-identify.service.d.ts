import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerRtiIdentifyDto } from '../models/amims-engineer-rti-identify-dto';
import { EngineerRtiIdentifyControllerCreate$Params } from '../fn/engineer-rti-identify/engineer-rti-identify-controller-create';
import { EngineerRtiIdentifyControllerFindAll$Params } from '../fn/engineer-rti-identify/engineer-rti-identify-controller-find-all';
import { EngineerRtiIdentifyControllerFindOne$Params } from '../fn/engineer-rti-identify/engineer-rti-identify-controller-find-one';
import { EngineerRtiIdentifyControllerRemove$Params } from '../fn/engineer-rti-identify/engineer-rti-identify-controller-remove';
import { EngineerRtiIdentifyControllerUpdate$Params } from '../fn/engineer-rti-identify/engineer-rti-identify-controller-update';
import * as i0 from "@angular/core";
export declare class EngineerRtiIdentifyService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerRtiIdentifyControllerFindAll()` */
    static readonly EngineerRtiIdentifyControllerFindAllPath = "/amims/engineer_rti_identify/engineer_rti_identify";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerRtiIdentifyControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerRtiIdentifyControllerFindAll$Response(params?: EngineerRtiIdentifyControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerRtiIdentifyDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerRtiIdentifyControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerRtiIdentifyControllerFindAll(params?: EngineerRtiIdentifyControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerRtiIdentifyDto>;
        'total'?: number;
    }>;
    /** Path part for operation `engineerRtiIdentifyControllerCreate()` */
    static readonly EngineerRtiIdentifyControllerCreatePath = "/amims/engineer_rti_identify/engineer_rti_identify";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerRtiIdentifyControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerRtiIdentifyControllerCreate$Response(params: EngineerRtiIdentifyControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiIdentifyDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerRtiIdentifyControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerRtiIdentifyControllerCreate(params: EngineerRtiIdentifyControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiIdentifyDto;
    }>;
    /** Path part for operation `engineerRtiIdentifyControllerFindOne()` */
    static readonly EngineerRtiIdentifyControllerFindOnePath = "/amims/engineer_rti_identify/engineer_rti_identify/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerRtiIdentifyControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerRtiIdentifyControllerFindOne$Response(params: EngineerRtiIdentifyControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiIdentifyDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerRtiIdentifyControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerRtiIdentifyControllerFindOne(params: EngineerRtiIdentifyControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiIdentifyDto;
    }>;
    /** Path part for operation `engineerRtiIdentifyControllerUpdate()` */
    static readonly EngineerRtiIdentifyControllerUpdatePath = "/amims/engineer_rti_identify/engineer_rti_identify/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerRtiIdentifyControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerRtiIdentifyControllerUpdate$Response(params: EngineerRtiIdentifyControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiIdentifyDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerRtiIdentifyControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerRtiIdentifyControllerUpdate(params: EngineerRtiIdentifyControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiIdentifyDto;
    }>;
    /** Path part for operation `engineerRtiIdentifyControllerRemove()` */
    static readonly EngineerRtiIdentifyControllerRemovePath = "/amims/engineer_rti_identify/engineer_rti_identify/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerRtiIdentifyControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerRtiIdentifyControllerRemove$Response(params: EngineerRtiIdentifyControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiIdentifyDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerRtiIdentifyControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerRtiIdentifyControllerRemove(params: EngineerRtiIdentifyControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiIdentifyDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerRtiIdentifyService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerRtiIdentifyService>;
}
