import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerPrisReturnDto } from '../models/amims-engineer-pris-return-dto';
import { EngineerPrisReturnControllerCreate$Params } from '../fn/engineer-pris-return/engineer-pris-return-controller-create';
import { EngineerPrisReturnControllerFindAll$Params } from '../fn/engineer-pris-return/engineer-pris-return-controller-find-all';
import { EngineerPrisReturnControllerFindOne$Params } from '../fn/engineer-pris-return/engineer-pris-return-controller-find-one';
import { EngineerPrisReturnControllerRemove$Params } from '../fn/engineer-pris-return/engineer-pris-return-controller-remove';
import { EngineerPrisReturnControllerUpdate$Params } from '../fn/engineer-pris-return/engineer-pris-return-controller-update';
import * as i0 from "@angular/core";
export declare class EngineerPrisReturnService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerPrisReturnControllerFindAll()` */
    static readonly EngineerPrisReturnControllerFindAllPath = "/amims/engineer_pris_return/engineer_pris_return";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisReturnControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisReturnControllerFindAll$Response(params?: EngineerPrisReturnControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPrisReturnDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisReturnControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisReturnControllerFindAll(params?: EngineerPrisReturnControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPrisReturnDto>;
        'total'?: number;
    }>;
    /** Path part for operation `engineerPrisReturnControllerCreate()` */
    static readonly EngineerPrisReturnControllerCreatePath = "/amims/engineer_pris_return/engineer_pris_return";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisReturnControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisReturnControllerCreate$Response(params: EngineerPrisReturnControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisReturnDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisReturnControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisReturnControllerCreate(params: EngineerPrisReturnControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisReturnDto;
    }>;
    /** Path part for operation `engineerPrisReturnControllerFindOne()` */
    static readonly EngineerPrisReturnControllerFindOnePath = "/amims/engineer_pris_return/engineer_pris_return/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisReturnControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisReturnControllerFindOne$Response(params: EngineerPrisReturnControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisReturnDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisReturnControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisReturnControllerFindOne(params: EngineerPrisReturnControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisReturnDto;
    }>;
    /** Path part for operation `engineerPrisReturnControllerUpdate()` */
    static readonly EngineerPrisReturnControllerUpdatePath = "/amims/engineer_pris_return/engineer_pris_return/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisReturnControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisReturnControllerUpdate$Response(params: EngineerPrisReturnControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisReturnDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisReturnControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisReturnControllerUpdate(params: EngineerPrisReturnControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisReturnDto;
    }>;
    /** Path part for operation `engineerPrisReturnControllerRemove()` */
    static readonly EngineerPrisReturnControllerRemovePath = "/amims/engineer_pris_return/engineer_pris_return/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisReturnControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisReturnControllerRemove$Response(params: EngineerPrisReturnControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisReturnDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisReturnControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisReturnControllerRemove(params: EngineerPrisReturnControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisReturnDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerPrisReturnService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerPrisReturnService>;
}
