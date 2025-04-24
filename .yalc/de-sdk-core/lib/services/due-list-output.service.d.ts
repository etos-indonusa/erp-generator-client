import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsDueListOutputDto } from '../models/amims-due-list-output-dto';
import { DueListOutputControllerCreate$Params } from '../fn/due-list-output/due-list-output-controller-create';
import { DueListOutputControllerFindAll$Params } from '../fn/due-list-output/due-list-output-controller-find-all';
import { DueListOutputControllerFindOne$Params } from '../fn/due-list-output/due-list-output-controller-find-one';
import { DueListOutputControllerRemove$Params } from '../fn/due-list-output/due-list-output-controller-remove';
import { DueListOutputControllerUpdate$Params } from '../fn/due-list-output/due-list-output-controller-update';
import * as i0 from "@angular/core";
export declare class DueListOutputService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `dueListOutputControllerFindAll()` */
    static readonly DueListOutputControllerFindAllPath = "/amims/due_list_output/due_list_output";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `dueListOutputControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    dueListOutputControllerFindAll$Response(params?: DueListOutputControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsDueListOutputDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `dueListOutputControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    dueListOutputControllerFindAll(params?: DueListOutputControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsDueListOutputDto>;
        'total'?: number;
    }>;
    /** Path part for operation `dueListOutputControllerCreate()` */
    static readonly DueListOutputControllerCreatePath = "/amims/due_list_output/due_list_output";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `dueListOutputControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    dueListOutputControllerCreate$Response(params: DueListOutputControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsDueListOutputDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `dueListOutputControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    dueListOutputControllerCreate(params: DueListOutputControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsDueListOutputDto;
    }>;
    /** Path part for operation `dueListOutputControllerFindOne()` */
    static readonly DueListOutputControllerFindOnePath = "/amims/due_list_output/due_list_output/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `dueListOutputControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    dueListOutputControllerFindOne$Response(params: DueListOutputControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsDueListOutputDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `dueListOutputControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    dueListOutputControllerFindOne(params: DueListOutputControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsDueListOutputDto;
    }>;
    /** Path part for operation `dueListOutputControllerUpdate()` */
    static readonly DueListOutputControllerUpdatePath = "/amims/due_list_output/due_list_output/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `dueListOutputControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    dueListOutputControllerUpdate$Response(params: DueListOutputControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsDueListOutputDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `dueListOutputControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    dueListOutputControllerUpdate(params: DueListOutputControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsDueListOutputDto;
    }>;
    /** Path part for operation `dueListOutputControllerRemove()` */
    static readonly DueListOutputControllerRemovePath = "/amims/due_list_output/due_list_output/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `dueListOutputControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    dueListOutputControllerRemove$Response(params: DueListOutputControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsDueListOutputDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `dueListOutputControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    dueListOutputControllerRemove(params: DueListOutputControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsDueListOutputDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DueListOutputService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DueListOutputService>;
}
