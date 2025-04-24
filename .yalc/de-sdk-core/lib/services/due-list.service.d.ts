import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsDueListDto } from '../models/amims-due-list-dto';
import { DueListControllerCreate$Params } from '../fn/due-list/due-list-controller-create';
import { DueListControllerFindAll$Params } from '../fn/due-list/due-list-controller-find-all';
import { DueListControllerFindOne$Params } from '../fn/due-list/due-list-controller-find-one';
import { DueListControllerRemove$Params } from '../fn/due-list/due-list-controller-remove';
import { DueListControllerUpdate$Params } from '../fn/due-list/due-list-controller-update';
import * as i0 from "@angular/core";
export declare class DueListService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `dueListControllerFindAll()` */
    static readonly DueListControllerFindAllPath = "/amims/due_list/due_list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `dueListControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    dueListControllerFindAll$Response(params?: DueListControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsDueListDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `dueListControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    dueListControllerFindAll(params?: DueListControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsDueListDto>;
        'total'?: number;
    }>;
    /** Path part for operation `dueListControllerCreate()` */
    static readonly DueListControllerCreatePath = "/amims/due_list/due_list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `dueListControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    dueListControllerCreate$Response(params: DueListControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsDueListDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `dueListControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    dueListControllerCreate(params: DueListControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsDueListDto;
    }>;
    /** Path part for operation `dueListControllerFindOne()` */
    static readonly DueListControllerFindOnePath = "/amims/due_list/due_list/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `dueListControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    dueListControllerFindOne$Response(params: DueListControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsDueListDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `dueListControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    dueListControllerFindOne(params: DueListControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsDueListDto;
    }>;
    /** Path part for operation `dueListControllerUpdate()` */
    static readonly DueListControllerUpdatePath = "/amims/due_list/due_list/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `dueListControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    dueListControllerUpdate$Response(params: DueListControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsDueListDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `dueListControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    dueListControllerUpdate(params: DueListControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsDueListDto;
    }>;
    /** Path part for operation `dueListControllerRemove()` */
    static readonly DueListControllerRemovePath = "/amims/due_list/due_list/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `dueListControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    dueListControllerRemove$Response(params: DueListControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsDueListDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `dueListControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    dueListControllerRemove(params: DueListControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsDueListDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DueListService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DueListService>;
}
