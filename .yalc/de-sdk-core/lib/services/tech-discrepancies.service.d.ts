import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTechDiscrepanciesDto } from '../models/amims-tech-discrepancies-dto';
import { TechDiscrepanciesControllerCreate$Params } from '../fn/tech-discrepancies/tech-discrepancies-controller-create';
import { TechDiscrepanciesControllerFindAll$Params } from '../fn/tech-discrepancies/tech-discrepancies-controller-find-all';
import { TechDiscrepanciesControllerFindOne$Params } from '../fn/tech-discrepancies/tech-discrepancies-controller-find-one';
import { TechDiscrepanciesControllerRemove$Params } from '../fn/tech-discrepancies/tech-discrepancies-controller-remove';
import { TechDiscrepanciesControllerUpdate$Params } from '../fn/tech-discrepancies/tech-discrepancies-controller-update';
import * as i0 from "@angular/core";
export declare class TechDiscrepanciesService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `techDiscrepanciesControllerFindAll()` */
    static readonly TechDiscrepanciesControllerFindAllPath = "/amims/tech_discrepancies/tech_discrepancies";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techDiscrepanciesControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    techDiscrepanciesControllerFindAll$Response(params?: TechDiscrepanciesControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechDiscrepanciesDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techDiscrepanciesControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techDiscrepanciesControllerFindAll(params?: TechDiscrepanciesControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechDiscrepanciesDto>;
        'total'?: number;
    }>;
    /** Path part for operation `techDiscrepanciesControllerCreate()` */
    static readonly TechDiscrepanciesControllerCreatePath = "/amims/tech_discrepancies/tech_discrepancies";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techDiscrepanciesControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techDiscrepanciesControllerCreate$Response(params: TechDiscrepanciesControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechDiscrepanciesDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techDiscrepanciesControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techDiscrepanciesControllerCreate(params: TechDiscrepanciesControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechDiscrepanciesDto;
    }>;
    /** Path part for operation `techDiscrepanciesControllerFindOne()` */
    static readonly TechDiscrepanciesControllerFindOnePath = "/amims/tech_discrepancies/tech_discrepancies/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techDiscrepanciesControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    techDiscrepanciesControllerFindOne$Response(params: TechDiscrepanciesControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechDiscrepanciesDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techDiscrepanciesControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techDiscrepanciesControllerFindOne(params: TechDiscrepanciesControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechDiscrepanciesDto;
    }>;
    /** Path part for operation `techDiscrepanciesControllerUpdate()` */
    static readonly TechDiscrepanciesControllerUpdatePath = "/amims/tech_discrepancies/tech_discrepancies/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techDiscrepanciesControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techDiscrepanciesControllerUpdate$Response(params: TechDiscrepanciesControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechDiscrepanciesDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techDiscrepanciesControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techDiscrepanciesControllerUpdate(params: TechDiscrepanciesControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechDiscrepanciesDto;
    }>;
    /** Path part for operation `techDiscrepanciesControllerRemove()` */
    static readonly TechDiscrepanciesControllerRemovePath = "/amims/tech_discrepancies/tech_discrepancies/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techDiscrepanciesControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    techDiscrepanciesControllerRemove$Response(params: TechDiscrepanciesControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechDiscrepanciesDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techDiscrepanciesControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techDiscrepanciesControllerRemove(params: TechDiscrepanciesControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechDiscrepanciesDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TechDiscrepanciesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TechDiscrepanciesService>;
}
