import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTechDefectDto } from '../models/amims-tech-defect-dto';
import { TechDefectControllerCreate$Params } from '../fn/tech-defect/tech-defect-controller-create';
import { TechDefectControllerFindAll$Params } from '../fn/tech-defect/tech-defect-controller-find-all';
import { TechDefectControllerFindOne$Params } from '../fn/tech-defect/tech-defect-controller-find-one';
import { TechDefectControllerRemove$Params } from '../fn/tech-defect/tech-defect-controller-remove';
import { TechDefectControllerUpdate$Params } from '../fn/tech-defect/tech-defect-controller-update';
import * as i0 from "@angular/core";
export declare class TechDefectService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `techDefectControllerFindAll()` */
    static readonly TechDefectControllerFindAllPath = "/amims/tech_defect/tech_defect";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techDefectControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    techDefectControllerFindAll$Response(params?: TechDefectControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechDefectDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techDefectControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techDefectControllerFindAll(params?: TechDefectControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechDefectDto>;
        'total'?: number;
    }>;
    /** Path part for operation `techDefectControllerCreate()` */
    static readonly TechDefectControllerCreatePath = "/amims/tech_defect/tech_defect";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techDefectControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techDefectControllerCreate$Response(params: TechDefectControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechDefectDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techDefectControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techDefectControllerCreate(params: TechDefectControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechDefectDto;
    }>;
    /** Path part for operation `techDefectControllerFindOne()` */
    static readonly TechDefectControllerFindOnePath = "/amims/tech_defect/tech_defect/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techDefectControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    techDefectControllerFindOne$Response(params: TechDefectControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechDefectDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techDefectControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techDefectControllerFindOne(params: TechDefectControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechDefectDto;
    }>;
    /** Path part for operation `techDefectControllerUpdate()` */
    static readonly TechDefectControllerUpdatePath = "/amims/tech_defect/tech_defect/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techDefectControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techDefectControllerUpdate$Response(params: TechDefectControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechDefectDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techDefectControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techDefectControllerUpdate(params: TechDefectControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechDefectDto;
    }>;
    /** Path part for operation `techDefectControllerRemove()` */
    static readonly TechDefectControllerRemovePath = "/amims/tech_defect/tech_defect/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techDefectControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    techDefectControllerRemove$Response(params: TechDefectControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechDefectDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techDefectControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techDefectControllerRemove(params: TechDefectControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechDefectDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TechDefectService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TechDefectService>;
}
