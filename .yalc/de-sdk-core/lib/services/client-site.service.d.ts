import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ClientSiteControllerCreate$Params } from '../fn/client-site/client-site-controller-create';
import { ClientSiteControllerFindAll$Params } from '../fn/client-site/client-site-controller-find-all';
import { ClientSiteControllerFindOne$Params } from '../fn/client-site/client-site-controller-find-one';
import { ClientSiteControllerRemove$Params } from '../fn/client-site/client-site-controller-remove';
import { ClientSiteControllerUpdate$Params } from '../fn/client-site/client-site-controller-update';
import { PelangganClientSiteDto } from '../models/pelanggan-client-site-dto';
import * as i0 from "@angular/core";
export declare class ClientSiteService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `clientSiteControllerFindAll()` */
    static readonly ClientSiteControllerFindAllPath = "/auth/client_site/client_site";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `clientSiteControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    clientSiteControllerFindAll$Response(params?: ClientSiteControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganClientSiteDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `clientSiteControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    clientSiteControllerFindAll(params?: ClientSiteControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganClientSiteDto>;
        'total'?: number;
    }>;
    /** Path part for operation `clientSiteControllerCreate()` */
    static readonly ClientSiteControllerCreatePath = "/auth/client_site/client_site";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `clientSiteControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    clientSiteControllerCreate$Response(params: ClientSiteControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientSiteDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `clientSiteControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    clientSiteControllerCreate(params: ClientSiteControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientSiteDto;
    }>;
    /** Path part for operation `clientSiteControllerFindOne()` */
    static readonly ClientSiteControllerFindOnePath = "/auth/client_site/client_site/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `clientSiteControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    clientSiteControllerFindOne$Response(params: ClientSiteControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientSiteDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `clientSiteControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    clientSiteControllerFindOne(params: ClientSiteControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientSiteDto;
    }>;
    /** Path part for operation `clientSiteControllerUpdate()` */
    static readonly ClientSiteControllerUpdatePath = "/auth/client_site/client_site/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `clientSiteControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    clientSiteControllerUpdate$Response(params: ClientSiteControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientSiteDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `clientSiteControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    clientSiteControllerUpdate(params: ClientSiteControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientSiteDto;
    }>;
    /** Path part for operation `clientSiteControllerRemove()` */
    static readonly ClientSiteControllerRemovePath = "/auth/client_site/client_site/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `clientSiteControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    clientSiteControllerRemove$Response(params: ClientSiteControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientSiteDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `clientSiteControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    clientSiteControllerRemove(params: ClientSiteControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientSiteDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ClientSiteService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ClientSiteService>;
}
