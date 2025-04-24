import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsQaRpdDto } from '../models/amims-qa-rpd-dto';
import { QaRpdControllerCreate$Params } from '../fn/qa-rpd/qa-rpd-controller-create';
import { QaRpdControllerFindAll$Params } from '../fn/qa-rpd/qa-rpd-controller-find-all';
import { QaRpdControllerFindOne$Params } from '../fn/qa-rpd/qa-rpd-controller-find-one';
import { QaRpdControllerRemove$Params } from '../fn/qa-rpd/qa-rpd-controller-remove';
import { QaRpdControllerUpdate$Params } from '../fn/qa-rpd/qa-rpd-controller-update';
import * as i0 from "@angular/core";
export declare class QaRpdService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `qaRpdControllerFindAll()` */
    static readonly QaRpdControllerFindAllPath = "/amims/qa_rpd/qa_rpd";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaRpdControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaRpdControllerFindAll$Response(params?: QaRpdControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsQaRpdDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaRpdControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaRpdControllerFindAll(params?: QaRpdControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsQaRpdDto>;
        'total'?: number;
    }>;
    /** Path part for operation `qaRpdControllerCreate()` */
    static readonly QaRpdControllerCreatePath = "/amims/qa_rpd/qa_rpd";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaRpdControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaRpdControllerCreate$Response(params: QaRpdControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaRpdDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaRpdControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaRpdControllerCreate(params: QaRpdControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaRpdDto;
    }>;
    /** Path part for operation `qaRpdControllerFindOne()` */
    static readonly QaRpdControllerFindOnePath = "/amims/qa_rpd/qa_rpd/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaRpdControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaRpdControllerFindOne$Response(params: QaRpdControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaRpdDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaRpdControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaRpdControllerFindOne(params: QaRpdControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaRpdDto;
    }>;
    /** Path part for operation `qaRpdControllerUpdate()` */
    static readonly QaRpdControllerUpdatePath = "/amims/qa_rpd/qa_rpd/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaRpdControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaRpdControllerUpdate$Response(params: QaRpdControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaRpdDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaRpdControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaRpdControllerUpdate(params: QaRpdControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaRpdDto;
    }>;
    /** Path part for operation `qaRpdControllerRemove()` */
    static readonly QaRpdControllerRemovePath = "/amims/qa_rpd/qa_rpd/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaRpdControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaRpdControllerRemove$Response(params: QaRpdControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaRpdDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaRpdControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaRpdControllerRemove(params: QaRpdControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaRpdDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<QaRpdService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<QaRpdService>;
}
