import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsSiteDto } from '../models/amims-site-dto';
import { SiteControllerCreate$Params } from '../fn/site/site-controller-create';
import { SiteControllerFindAll$Params } from '../fn/site/site-controller-find-all';
import { SiteControllerFindOne$Params } from '../fn/site/site-controller-find-one';
import { SiteControllerRemove$Params } from '../fn/site/site-controller-remove';
import { SiteControllerUpdate$Params } from '../fn/site/site-controller-update';
import * as i0 from "@angular/core";
export declare class SiteService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `siteControllerFindAll()` */
    static readonly SiteControllerFindAllPath = "/amims/site/site";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `siteControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    siteControllerFindAll$Response(params?: SiteControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsSiteDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `siteControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    siteControllerFindAll(params?: SiteControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsSiteDto>;
        'total'?: number;
    }>;
    /** Path part for operation `siteControllerCreate()` */
    static readonly SiteControllerCreatePath = "/amims/site/site";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `siteControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    siteControllerCreate$Response(params: SiteControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsSiteDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `siteControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    siteControllerCreate(params: SiteControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsSiteDto;
    }>;
    /** Path part for operation `siteControllerFindOne()` */
    static readonly SiteControllerFindOnePath = "/amims/site/site/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `siteControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    siteControllerFindOne$Response(params: SiteControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsSiteDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `siteControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    siteControllerFindOne(params: SiteControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsSiteDto;
    }>;
    /** Path part for operation `siteControllerUpdate()` */
    static readonly SiteControllerUpdatePath = "/amims/site/site/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `siteControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    siteControllerUpdate$Response(params: SiteControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsSiteDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `siteControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    siteControllerUpdate(params: SiteControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsSiteDto;
    }>;
    /** Path part for operation `siteControllerRemove()` */
    static readonly SiteControllerRemovePath = "/amims/site/site/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `siteControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    siteControllerRemove$Response(params: SiteControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsSiteDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `siteControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    siteControllerRemove(params: SiteControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsSiteDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SiteService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SiteService>;
}
