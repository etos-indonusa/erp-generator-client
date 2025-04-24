import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { DocumentNumberingControllerCreate$Params } from '../fn/document-numbering/document-numbering-controller-create';
import { DocumentNumberingControllerFindAll$Params } from '../fn/document-numbering/document-numbering-controller-find-all';
import { DocumentNumberingControllerFindOne$Params } from '../fn/document-numbering/document-numbering-controller-find-one';
import { DocumentNumberingControllerRemove$Params } from '../fn/document-numbering/document-numbering-controller-remove';
import { DocumentNumberingControllerUpdate$Params } from '../fn/document-numbering/document-numbering-controller-update';
import { ToolsDocumentNumberingDto } from '../models/tools-document-numbering-dto';
import * as i0 from "@angular/core";
export declare class DocumentNumberingService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `documentNumberingControllerFindAll()` */
    static readonly DocumentNumberingControllerFindAllPath = "/auth/document_numbering/document_numbering";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `documentNumberingControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    documentNumberingControllerFindAll$Response(params?: DocumentNumberingControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsDocumentNumberingDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `documentNumberingControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    documentNumberingControllerFindAll(params?: DocumentNumberingControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsDocumentNumberingDto>;
        'total'?: number;
    }>;
    /** Path part for operation `documentNumberingControllerCreate()` */
    static readonly DocumentNumberingControllerCreatePath = "/auth/document_numbering/document_numbering";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `documentNumberingControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    documentNumberingControllerCreate$Response(params: DocumentNumberingControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsDocumentNumberingDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `documentNumberingControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    documentNumberingControllerCreate(params: DocumentNumberingControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsDocumentNumberingDto;
    }>;
    /** Path part for operation `documentNumberingControllerFindOne()` */
    static readonly DocumentNumberingControllerFindOnePath = "/auth/document_numbering/document_numbering/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `documentNumberingControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    documentNumberingControllerFindOne$Response(params: DocumentNumberingControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsDocumentNumberingDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `documentNumberingControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    documentNumberingControllerFindOne(params: DocumentNumberingControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsDocumentNumberingDto;
    }>;
    /** Path part for operation `documentNumberingControllerUpdate()` */
    static readonly DocumentNumberingControllerUpdatePath = "/auth/document_numbering/document_numbering/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `documentNumberingControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    documentNumberingControllerUpdate$Response(params: DocumentNumberingControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsDocumentNumberingDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `documentNumberingControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    documentNumberingControllerUpdate(params: DocumentNumberingControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsDocumentNumberingDto;
    }>;
    /** Path part for operation `documentNumberingControllerRemove()` */
    static readonly DocumentNumberingControllerRemovePath = "/auth/document_numbering/document_numbering/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `documentNumberingControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    documentNumberingControllerRemove$Response(params: DocumentNumberingControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsDocumentNumberingDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `documentNumberingControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    documentNumberingControllerRemove(params: DocumentNumberingControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsDocumentNumberingDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DocumentNumberingService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DocumentNumberingService>;
}
