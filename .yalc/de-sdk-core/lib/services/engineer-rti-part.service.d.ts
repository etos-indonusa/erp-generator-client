import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerRtiPartDto } from '../models/amims-engineer-rti-part-dto';
import { EngineerRtiPartControllerCreate$Params } from '../fn/engineer-rti-part/engineer-rti-part-controller-create';
import { EngineerRtiPartControllerFindAll$Params } from '../fn/engineer-rti-part/engineer-rti-part-controller-find-all';
import { EngineerRtiPartControllerFindOne$Params } from '../fn/engineer-rti-part/engineer-rti-part-controller-find-one';
import { EngineerRtiPartControllerRemove$Params } from '../fn/engineer-rti-part/engineer-rti-part-controller-remove';
import { EngineerRtiPartControllerUpdate$Params } from '../fn/engineer-rti-part/engineer-rti-part-controller-update';
import * as i0 from "@angular/core";
export declare class EngineerRtiPartService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerRtiPartControllerFindAll()` */
    static readonly EngineerRtiPartControllerFindAllPath = "/amims/engineer_rti_part/engineer_rti_part";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerRtiPartControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerRtiPartControllerFindAll$Response(params?: EngineerRtiPartControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerRtiPartDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerRtiPartControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerRtiPartControllerFindAll(params?: EngineerRtiPartControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerRtiPartDto>;
        'total'?: number;
    }>;
    /** Path part for operation `engineerRtiPartControllerCreate()` */
    static readonly EngineerRtiPartControllerCreatePath = "/amims/engineer_rti_part/engineer_rti_part";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerRtiPartControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerRtiPartControllerCreate$Response(params: EngineerRtiPartControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiPartDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerRtiPartControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerRtiPartControllerCreate(params: EngineerRtiPartControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiPartDto;
    }>;
    /** Path part for operation `engineerRtiPartControllerFindOne()` */
    static readonly EngineerRtiPartControllerFindOnePath = "/amims/engineer_rti_part/engineer_rti_part/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerRtiPartControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerRtiPartControllerFindOne$Response(params: EngineerRtiPartControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiPartDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerRtiPartControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerRtiPartControllerFindOne(params: EngineerRtiPartControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiPartDto;
    }>;
    /** Path part for operation `engineerRtiPartControllerUpdate()` */
    static readonly EngineerRtiPartControllerUpdatePath = "/amims/engineer_rti_part/engineer_rti_part/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerRtiPartControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerRtiPartControllerUpdate$Response(params: EngineerRtiPartControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiPartDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerRtiPartControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerRtiPartControllerUpdate(params: EngineerRtiPartControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiPartDto;
    }>;
    /** Path part for operation `engineerRtiPartControllerRemove()` */
    static readonly EngineerRtiPartControllerRemovePath = "/amims/engineer_rti_part/engineer_rti_part/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerRtiPartControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerRtiPartControllerRemove$Response(params: EngineerRtiPartControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiPartDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerRtiPartControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerRtiPartControllerRemove(params: EngineerRtiPartControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiPartDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerRtiPartService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerRtiPartService>;
}
