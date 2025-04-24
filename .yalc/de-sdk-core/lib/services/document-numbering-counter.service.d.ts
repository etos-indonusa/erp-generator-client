import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { DocumentNumberingCounterControllerCreate$Params } from '../fn/document-numbering-counter/document-numbering-counter-controller-create';
import { DocumentNumberingCounterControllerFindAll$Params } from '../fn/document-numbering-counter/document-numbering-counter-controller-find-all';
import { DocumentNumberingCounterControllerFindOne$Params } from '../fn/document-numbering-counter/document-numbering-counter-controller-find-one';
import { DocumentNumberingCounterControllerRemove$Params } from '../fn/document-numbering-counter/document-numbering-counter-controller-remove';
import { DocumentNumberingCounterControllerUpdate$Params } from '../fn/document-numbering-counter/document-numbering-counter-controller-update';
import { ToolsDocumentNumberingCounterDto } from '../models/tools-document-numbering-counter-dto';
import * as i0 from "@angular/core";
export declare class DocumentNumberingCounterService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `documentNumberingCounterControllerFindAll()` */
    static readonly DocumentNumberingCounterControllerFindAllPath = "/auth/document_numbering_counter/document_numbering_counter";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `documentNumberingCounterControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    documentNumberingCounterControllerFindAll$Response(params?: DocumentNumberingCounterControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsDocumentNumberingCounterDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `documentNumberingCounterControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    documentNumberingCounterControllerFindAll(params?: DocumentNumberingCounterControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsDocumentNumberingCounterDto>;
        'total'?: number;
    }>;
    /** Path part for operation `documentNumberingCounterControllerCreate()` */
    static readonly DocumentNumberingCounterControllerCreatePath = "/auth/document_numbering_counter/document_numbering_counter";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `documentNumberingCounterControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    documentNumberingCounterControllerCreate$Response(params: DocumentNumberingCounterControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsDocumentNumberingCounterDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `documentNumberingCounterControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    documentNumberingCounterControllerCreate(params: DocumentNumberingCounterControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsDocumentNumberingCounterDto;
    }>;
    /** Path part for operation `documentNumberingCounterControllerFindOne()` */
    static readonly DocumentNumberingCounterControllerFindOnePath = "/auth/document_numbering_counter/document_numbering_counter/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `documentNumberingCounterControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    documentNumberingCounterControllerFindOne$Response(params: DocumentNumberingCounterControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsDocumentNumberingCounterDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `documentNumberingCounterControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    documentNumberingCounterControllerFindOne(params: DocumentNumberingCounterControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsDocumentNumberingCounterDto;
    }>;
    /** Path part for operation `documentNumberingCounterControllerUpdate()` */
    static readonly DocumentNumberingCounterControllerUpdatePath = "/auth/document_numbering_counter/document_numbering_counter/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `documentNumberingCounterControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    documentNumberingCounterControllerUpdate$Response(params: DocumentNumberingCounterControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsDocumentNumberingCounterDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `documentNumberingCounterControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    documentNumberingCounterControllerUpdate(params: DocumentNumberingCounterControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsDocumentNumberingCounterDto;
    }>;
    /** Path part for operation `documentNumberingCounterControllerRemove()` */
    static readonly DocumentNumberingCounterControllerRemovePath = "/auth/document_numbering_counter/document_numbering_counter/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `documentNumberingCounterControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    documentNumberingCounterControllerRemove$Response(params: DocumentNumberingCounterControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsDocumentNumberingCounterDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `documentNumberingCounterControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    documentNumberingCounterControllerRemove(params: DocumentNumberingCounterControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsDocumentNumberingCounterDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DocumentNumberingCounterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DocumentNumberingCounterService>;
}
