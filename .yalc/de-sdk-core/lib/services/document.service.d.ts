import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { DocumentControllerCreate$Params } from '../fn/document/document-controller-create';
import { DocumentControllerFindAll$Params } from '../fn/document/document-controller-find-all';
import { DocumentControllerFindOne$Params } from '../fn/document/document-controller-find-one';
import { DocumentControllerRemove$Params } from '../fn/document/document-controller-remove';
import { DocumentControllerUpdate$Params } from '../fn/document/document-controller-update';
import { DocumentControllerUploadFile$Params } from '../fn/document/document-controller-upload-file';
import { DocumentDocumentDto } from '../models/document-document-dto';
import * as i0 from "@angular/core";
export declare class DocumentService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `documentControllerFindAll()` */
    static readonly DocumentControllerFindAllPath = "/auth/document/document";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `documentControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    documentControllerFindAll$Response(params?: DocumentControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<DocumentDocumentDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `documentControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    documentControllerFindAll(params?: DocumentControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<DocumentDocumentDto>;
        'total'?: number;
    }>;
    /** Path part for operation `documentControllerCreate()` */
    static readonly DocumentControllerCreatePath = "/auth/document/document";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `documentControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    documentControllerCreate$Response(params: DocumentControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: DocumentDocumentDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `documentControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    documentControllerCreate(params: DocumentControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: DocumentDocumentDto;
    }>;
    /** Path part for operation `documentControllerUploadFile()` */
    static readonly DocumentControllerUploadFilePath = "/auth/document/document/upload";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `documentControllerUploadFile()` instead.
     *
     * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
     */
    documentControllerUploadFile$Response(params: DocumentControllerUploadFile$Params, context?: HttpContext): Observable<StrictHttpResponse<void>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `documentControllerUploadFile$Response()` instead.
     *
     * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
     */
    documentControllerUploadFile(params: DocumentControllerUploadFile$Params, context?: HttpContext): Observable<void>;
    /** Path part for operation `documentControllerFindOne()` */
    static readonly DocumentControllerFindOnePath = "/auth/document/document/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `documentControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    documentControllerFindOne$Response(params: DocumentControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: DocumentDocumentDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `documentControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    documentControllerFindOne(params: DocumentControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: DocumentDocumentDto;
    }>;
    /** Path part for operation `documentControllerUpdate()` */
    static readonly DocumentControllerUpdatePath = "/auth/document/document/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `documentControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    documentControllerUpdate$Response(params: DocumentControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: DocumentDocumentDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `documentControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    documentControllerUpdate(params: DocumentControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: DocumentDocumentDto;
    }>;
    /** Path part for operation `documentControllerRemove()` */
    static readonly DocumentControllerRemovePath = "/auth/document/document/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `documentControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    documentControllerRemove$Response(params: DocumentControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: DocumentDocumentDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `documentControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    documentControllerRemove(params: DocumentControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: DocumentDocumentDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DocumentService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DocumentService>;
}
