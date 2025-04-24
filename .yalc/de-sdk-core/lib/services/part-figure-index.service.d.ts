import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartFigureIndexDto } from '../models/amims-part-figure-index-dto';
import { PartFigureIndexControllerCreate$Params } from '../fn/part-figure-index/part-figure-index-controller-create';
import { PartFigureIndexControllerFindAll$Params } from '../fn/part-figure-index/part-figure-index-controller-find-all';
import { PartFigureIndexControllerFindOne$Params } from '../fn/part-figure-index/part-figure-index-controller-find-one';
import { PartFigureIndexControllerRemove$Params } from '../fn/part-figure-index/part-figure-index-controller-remove';
import { PartFigureIndexControllerUpdate$Params } from '../fn/part-figure-index/part-figure-index-controller-update';
import * as i0 from "@angular/core";
export declare class PartFigureIndexService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partFigureIndexControllerFindAll()` */
    static readonly PartFigureIndexControllerFindAllPath = "/amims/part_figure_index/part_figure_index";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partFigureIndexControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    partFigureIndexControllerFindAll$Response(params?: PartFigureIndexControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartFigureIndexDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partFigureIndexControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partFigureIndexControllerFindAll(params?: PartFigureIndexControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartFigureIndexDto>;
        'total'?: number;
    }>;
    /** Path part for operation `partFigureIndexControllerCreate()` */
    static readonly PartFigureIndexControllerCreatePath = "/amims/part_figure_index/part_figure_index";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partFigureIndexControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partFigureIndexControllerCreate$Response(params: PartFigureIndexControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartFigureIndexDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partFigureIndexControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partFigureIndexControllerCreate(params: PartFigureIndexControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartFigureIndexDto;
    }>;
    /** Path part for operation `partFigureIndexControllerFindOne()` */
    static readonly PartFigureIndexControllerFindOnePath = "/amims/part_figure_index/part_figure_index/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partFigureIndexControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    partFigureIndexControllerFindOne$Response(params: PartFigureIndexControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartFigureIndexDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partFigureIndexControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partFigureIndexControllerFindOne(params: PartFigureIndexControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartFigureIndexDto;
    }>;
    /** Path part for operation `partFigureIndexControllerUpdate()` */
    static readonly PartFigureIndexControllerUpdatePath = "/amims/part_figure_index/part_figure_index/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partFigureIndexControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partFigureIndexControllerUpdate$Response(params: PartFigureIndexControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartFigureIndexDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partFigureIndexControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partFigureIndexControllerUpdate(params: PartFigureIndexControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartFigureIndexDto;
    }>;
    /** Path part for operation `partFigureIndexControllerRemove()` */
    static readonly PartFigureIndexControllerRemovePath = "/amims/part_figure_index/part_figure_index/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partFigureIndexControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    partFigureIndexControllerRemove$Response(params: PartFigureIndexControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartFigureIndexDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partFigureIndexControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partFigureIndexControllerRemove(params: PartFigureIndexControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartFigureIndexDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartFigureIndexService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartFigureIndexService>;
}
