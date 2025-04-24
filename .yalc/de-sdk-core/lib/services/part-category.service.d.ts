import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartCategoryDto } from '../models/amims-part-category-dto';
import { PartCategoryControllerCreate$Params } from '../fn/part-category/part-category-controller-create';
import { PartCategoryControllerFindAll$Params } from '../fn/part-category/part-category-controller-find-all';
import { PartCategoryControllerFindOne$Params } from '../fn/part-category/part-category-controller-find-one';
import { PartCategoryControllerRemove$Params } from '../fn/part-category/part-category-controller-remove';
import { PartCategoryControllerUpdate$Params } from '../fn/part-category/part-category-controller-update';
import * as i0 from "@angular/core";
export declare class PartCategoryService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partCategoryControllerFindAll()` */
    static readonly PartCategoryControllerFindAllPath = "/amims/part_category/part_category";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partCategoryControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    partCategoryControllerFindAll$Response(params?: PartCategoryControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartCategoryDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partCategoryControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partCategoryControllerFindAll(params?: PartCategoryControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartCategoryDto>;
        'total'?: number;
    }>;
    /** Path part for operation `partCategoryControllerCreate()` */
    static readonly PartCategoryControllerCreatePath = "/amims/part_category/part_category";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partCategoryControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partCategoryControllerCreate$Response(params: PartCategoryControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartCategoryDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partCategoryControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partCategoryControllerCreate(params: PartCategoryControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartCategoryDto;
    }>;
    /** Path part for operation `partCategoryControllerFindOne()` */
    static readonly PartCategoryControllerFindOnePath = "/amims/part_category/part_category/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partCategoryControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    partCategoryControllerFindOne$Response(params: PartCategoryControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartCategoryDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partCategoryControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partCategoryControllerFindOne(params: PartCategoryControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartCategoryDto;
    }>;
    /** Path part for operation `partCategoryControllerUpdate()` */
    static readonly PartCategoryControllerUpdatePath = "/amims/part_category/part_category/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partCategoryControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partCategoryControllerUpdate$Response(params: PartCategoryControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartCategoryDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partCategoryControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partCategoryControllerUpdate(params: PartCategoryControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartCategoryDto;
    }>;
    /** Path part for operation `partCategoryControllerRemove()` */
    static readonly PartCategoryControllerRemovePath = "/amims/part_category/part_category/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partCategoryControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    partCategoryControllerRemove$Response(params: PartCategoryControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartCategoryDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partCategoryControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partCategoryControllerRemove(params: PartCategoryControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartCategoryDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartCategoryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartCategoryService>;
}
