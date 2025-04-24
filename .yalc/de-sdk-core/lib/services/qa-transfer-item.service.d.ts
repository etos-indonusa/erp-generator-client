import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsQaTransferItemDto } from '../models/amims-qa-transfer-item-dto';
import { QaTransferItemControllerCreate$Params } from '../fn/qa-transfer-item/qa-transfer-item-controller-create';
import { QaTransferItemControllerFindAll$Params } from '../fn/qa-transfer-item/qa-transfer-item-controller-find-all';
import { QaTransferItemControllerFindOne$Params } from '../fn/qa-transfer-item/qa-transfer-item-controller-find-one';
import { QaTransferItemControllerRemove$Params } from '../fn/qa-transfer-item/qa-transfer-item-controller-remove';
import { QaTransferItemControllerUpdate$Params } from '../fn/qa-transfer-item/qa-transfer-item-controller-update';
import * as i0 from "@angular/core";
export declare class QaTransferItemService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `qaTransferItemControllerFindAll()` */
    static readonly QaTransferItemControllerFindAllPath = "/amims/qa_transfer_item/qa_transfer_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaTransferItemControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaTransferItemControllerFindAll$Response(params?: QaTransferItemControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsQaTransferItemDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaTransferItemControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaTransferItemControllerFindAll(params?: QaTransferItemControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsQaTransferItemDto>;
        'total'?: number;
    }>;
    /** Path part for operation `qaTransferItemControllerCreate()` */
    static readonly QaTransferItemControllerCreatePath = "/amims/qa_transfer_item/qa_transfer_item";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaTransferItemControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaTransferItemControllerCreate$Response(params: QaTransferItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaTransferItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaTransferItemControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaTransferItemControllerCreate(params: QaTransferItemControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaTransferItemDto;
    }>;
    /** Path part for operation `qaTransferItemControllerFindOne()` */
    static readonly QaTransferItemControllerFindOnePath = "/amims/qa_transfer_item/qa_transfer_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaTransferItemControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaTransferItemControllerFindOne$Response(params: QaTransferItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaTransferItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaTransferItemControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaTransferItemControllerFindOne(params: QaTransferItemControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaTransferItemDto;
    }>;
    /** Path part for operation `qaTransferItemControllerUpdate()` */
    static readonly QaTransferItemControllerUpdatePath = "/amims/qa_transfer_item/qa_transfer_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaTransferItemControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaTransferItemControllerUpdate$Response(params: QaTransferItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaTransferItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaTransferItemControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaTransferItemControllerUpdate(params: QaTransferItemControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaTransferItemDto;
    }>;
    /** Path part for operation `qaTransferItemControllerRemove()` */
    static readonly QaTransferItemControllerRemovePath = "/amims/qa_transfer_item/qa_transfer_item/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaTransferItemControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaTransferItemControllerRemove$Response(params: QaTransferItemControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaTransferItemDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaTransferItemControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaTransferItemControllerRemove(params: QaTransferItemControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaTransferItemDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<QaTransferItemService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<QaTransferItemService>;
}
