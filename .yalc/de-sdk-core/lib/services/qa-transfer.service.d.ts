import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsQaTransferDto } from '../models/amims-qa-transfer-dto';
import { QaTransferControllerCreate$Params } from '../fn/qa-transfer/qa-transfer-controller-create';
import { QaTransferControllerFindAll$Params } from '../fn/qa-transfer/qa-transfer-controller-find-all';
import { QaTransferControllerFindOne$Params } from '../fn/qa-transfer/qa-transfer-controller-find-one';
import { QaTransferControllerRemove$Params } from '../fn/qa-transfer/qa-transfer-controller-remove';
import { QaTransferControllerUpdate$Params } from '../fn/qa-transfer/qa-transfer-controller-update';
import * as i0 from "@angular/core";
export declare class QaTransferService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `qaTransferControllerFindAll()` */
    static readonly QaTransferControllerFindAllPath = "/amims/qa_transfer/qa_transfer";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaTransferControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaTransferControllerFindAll$Response(params?: QaTransferControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsQaTransferDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaTransferControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaTransferControllerFindAll(params?: QaTransferControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsQaTransferDto>;
        'total'?: number;
    }>;
    /** Path part for operation `qaTransferControllerCreate()` */
    static readonly QaTransferControllerCreatePath = "/amims/qa_transfer/qa_transfer";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaTransferControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaTransferControllerCreate$Response(params: QaTransferControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaTransferDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaTransferControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaTransferControllerCreate(params: QaTransferControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaTransferDto;
    }>;
    /** Path part for operation `qaTransferControllerFindOne()` */
    static readonly QaTransferControllerFindOnePath = "/amims/qa_transfer/qa_transfer/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaTransferControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaTransferControllerFindOne$Response(params: QaTransferControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaTransferDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaTransferControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaTransferControllerFindOne(params: QaTransferControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaTransferDto;
    }>;
    /** Path part for operation `qaTransferControllerUpdate()` */
    static readonly QaTransferControllerUpdatePath = "/amims/qa_transfer/qa_transfer/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaTransferControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaTransferControllerUpdate$Response(params: QaTransferControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaTransferDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaTransferControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaTransferControllerUpdate(params: QaTransferControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaTransferDto;
    }>;
    /** Path part for operation `qaTransferControllerRemove()` */
    static readonly QaTransferControllerRemovePath = "/amims/qa_transfer/qa_transfer/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaTransferControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaTransferControllerRemove$Response(params: QaTransferControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaTransferDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaTransferControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaTransferControllerRemove(params: QaTransferControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaTransferDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<QaTransferService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<QaTransferService>;
}
