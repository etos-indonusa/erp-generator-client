import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsQaRpdDispotitionDto } from '../models/amims-qa-rpd-dispotition-dto';
import { QaRpdDispotitionControllerCreate$Params } from '../fn/qa-rpd-dispotition/qa-rpd-dispotition-controller-create';
import { QaRpdDispotitionControllerFindAll$Params } from '../fn/qa-rpd-dispotition/qa-rpd-dispotition-controller-find-all';
import { QaRpdDispotitionControllerFindOne$Params } from '../fn/qa-rpd-dispotition/qa-rpd-dispotition-controller-find-one';
import { QaRpdDispotitionControllerRemove$Params } from '../fn/qa-rpd-dispotition/qa-rpd-dispotition-controller-remove';
import { QaRpdDispotitionControllerUpdate$Params } from '../fn/qa-rpd-dispotition/qa-rpd-dispotition-controller-update';
import * as i0 from "@angular/core";
export declare class QaRpdDispotitionService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `qaRpdDispotitionControllerFindAll()` */
    static readonly QaRpdDispotitionControllerFindAllPath = "/amims/qa_rpd_dispotition/qa_rpd_dispotition";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaRpdDispotitionControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaRpdDispotitionControllerFindAll$Response(params?: QaRpdDispotitionControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsQaRpdDispotitionDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaRpdDispotitionControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaRpdDispotitionControllerFindAll(params?: QaRpdDispotitionControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsQaRpdDispotitionDto>;
        'total'?: number;
    }>;
    /** Path part for operation `qaRpdDispotitionControllerCreate()` */
    static readonly QaRpdDispotitionControllerCreatePath = "/amims/qa_rpd_dispotition/qa_rpd_dispotition";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaRpdDispotitionControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaRpdDispotitionControllerCreate$Response(params: QaRpdDispotitionControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaRpdDispotitionDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaRpdDispotitionControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaRpdDispotitionControllerCreate(params: QaRpdDispotitionControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaRpdDispotitionDto;
    }>;
    /** Path part for operation `qaRpdDispotitionControllerFindOne()` */
    static readonly QaRpdDispotitionControllerFindOnePath = "/amims/qa_rpd_dispotition/qa_rpd_dispotition/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaRpdDispotitionControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaRpdDispotitionControllerFindOne$Response(params: QaRpdDispotitionControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaRpdDispotitionDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaRpdDispotitionControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaRpdDispotitionControllerFindOne(params: QaRpdDispotitionControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaRpdDispotitionDto;
    }>;
    /** Path part for operation `qaRpdDispotitionControllerUpdate()` */
    static readonly QaRpdDispotitionControllerUpdatePath = "/amims/qa_rpd_dispotition/qa_rpd_dispotition/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaRpdDispotitionControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaRpdDispotitionControllerUpdate$Response(params: QaRpdDispotitionControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaRpdDispotitionDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaRpdDispotitionControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaRpdDispotitionControllerUpdate(params: QaRpdDispotitionControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaRpdDispotitionDto;
    }>;
    /** Path part for operation `qaRpdDispotitionControllerRemove()` */
    static readonly QaRpdDispotitionControllerRemovePath = "/amims/qa_rpd_dispotition/qa_rpd_dispotition/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaRpdDispotitionControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaRpdDispotitionControllerRemove$Response(params: QaRpdDispotitionControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaRpdDispotitionDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaRpdDispotitionControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaRpdDispotitionControllerRemove(params: QaRpdDispotitionControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaRpdDispotitionDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<QaRpdDispotitionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<QaRpdDispotitionService>;
}
