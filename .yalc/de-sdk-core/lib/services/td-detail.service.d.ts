import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTdDetailDto } from '../models/amims-td-detail-dto';
import { TdDetailControllerCreate$Params } from '../fn/td-detail/td-detail-controller-create';
import { TdDetailControllerFindAll$Params } from '../fn/td-detail/td-detail-controller-find-all';
import { TdDetailControllerFindOne$Params } from '../fn/td-detail/td-detail-controller-find-one';
import { TdDetailControllerRemove$Params } from '../fn/td-detail/td-detail-controller-remove';
import { TdDetailControllerUpdate$Params } from '../fn/td-detail/td-detail-controller-update';
import * as i0 from "@angular/core";
export declare class TdDetailService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `tdDetailControllerFindAll()` */
    static readonly TdDetailControllerFindAllPath = "/amims/td_detail/td_detail";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdDetailControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdDetailControllerFindAll$Response(params?: TdDetailControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTdDetailDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdDetailControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdDetailControllerFindAll(params?: TdDetailControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTdDetailDto>;
        'total'?: number;
    }>;
    /** Path part for operation `tdDetailControllerCreate()` */
    static readonly TdDetailControllerCreatePath = "/amims/td_detail/td_detail";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdDetailControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdDetailControllerCreate$Response(params: TdDetailControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdDetailDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdDetailControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdDetailControllerCreate(params: TdDetailControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdDetailDto;
    }>;
    /** Path part for operation `tdDetailControllerFindOne()` */
    static readonly TdDetailControllerFindOnePath = "/amims/td_detail/td_detail/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdDetailControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdDetailControllerFindOne$Response(params: TdDetailControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdDetailDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdDetailControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdDetailControllerFindOne(params: TdDetailControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdDetailDto;
    }>;
    /** Path part for operation `tdDetailControllerUpdate()` */
    static readonly TdDetailControllerUpdatePath = "/amims/td_detail/td_detail/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdDetailControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdDetailControllerUpdate$Response(params: TdDetailControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdDetailDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdDetailControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdDetailControllerUpdate(params: TdDetailControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdDetailDto;
    }>;
    /** Path part for operation `tdDetailControllerRemove()` */
    static readonly TdDetailControllerRemovePath = "/amims/td_detail/td_detail/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdDetailControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdDetailControllerRemove$Response(params: TdDetailControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdDetailDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdDetailControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdDetailControllerRemove(params: TdDetailControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdDetailDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TdDetailService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TdDetailService>;
}
