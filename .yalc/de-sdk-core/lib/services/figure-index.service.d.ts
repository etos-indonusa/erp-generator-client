import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsFigureIndexDto } from '../models/amims-figure-index-dto';
import { FigureIndexControllerCreate$Params } from '../fn/figure-index/figure-index-controller-create';
import { FigureIndexControllerFindAll$Params } from '../fn/figure-index/figure-index-controller-find-all';
import { FigureIndexControllerFindOne$Params } from '../fn/figure-index/figure-index-controller-find-one';
import { FigureIndexControllerRemove$Params } from '../fn/figure-index/figure-index-controller-remove';
import { FigureIndexControllerUpdate$Params } from '../fn/figure-index/figure-index-controller-update';
import * as i0 from "@angular/core";
export declare class FigureIndexService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `figureIndexControllerFindAll()` */
    static readonly FigureIndexControllerFindAllPath = "/amims/figure_index/figure_index";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `figureIndexControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    figureIndexControllerFindAll$Response(params?: FigureIndexControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsFigureIndexDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `figureIndexControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    figureIndexControllerFindAll(params?: FigureIndexControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsFigureIndexDto>;
        'total'?: number;
    }>;
    /** Path part for operation `figureIndexControllerCreate()` */
    static readonly FigureIndexControllerCreatePath = "/amims/figure_index/figure_index";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `figureIndexControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    figureIndexControllerCreate$Response(params: FigureIndexControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsFigureIndexDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `figureIndexControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    figureIndexControllerCreate(params: FigureIndexControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsFigureIndexDto;
    }>;
    /** Path part for operation `figureIndexControllerFindOne()` */
    static readonly FigureIndexControllerFindOnePath = "/amims/figure_index/figure_index/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `figureIndexControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    figureIndexControllerFindOne$Response(params: FigureIndexControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsFigureIndexDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `figureIndexControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    figureIndexControllerFindOne(params: FigureIndexControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsFigureIndexDto;
    }>;
    /** Path part for operation `figureIndexControllerUpdate()` */
    static readonly FigureIndexControllerUpdatePath = "/amims/figure_index/figure_index/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `figureIndexControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    figureIndexControllerUpdate$Response(params: FigureIndexControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsFigureIndexDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `figureIndexControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    figureIndexControllerUpdate(params: FigureIndexControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsFigureIndexDto;
    }>;
    /** Path part for operation `figureIndexControllerRemove()` */
    static readonly FigureIndexControllerRemovePath = "/amims/figure_index/figure_index/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `figureIndexControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    figureIndexControllerRemove$Response(params: FigureIndexControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsFigureIndexDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `figureIndexControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    figureIndexControllerRemove(params: FigureIndexControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsFigureIndexDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FigureIndexService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FigureIndexService>;
}
