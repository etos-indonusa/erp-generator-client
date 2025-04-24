import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ClientControllerCreate$Params } from '../fn/client/client-controller-create';
import { ClientControllerFindAll$Params } from '../fn/client/client-controller-find-all';
import { ClientControllerFindOne$Params } from '../fn/client/client-controller-find-one';
import { ClientControllerRemove$Params } from '../fn/client/client-controller-remove';
import { ClientControllerUpdate$Params } from '../fn/client/client-controller-update';
import { PelangganClientDto } from '../models/pelanggan-client-dto';
import * as i0 from "@angular/core";
export declare class ClientService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `clientControllerFindAll()` */
    static readonly ClientControllerFindAllPath = "/client";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `clientControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    clientControllerFindAll$Response(params?: ClientControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganClientDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `clientControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    clientControllerFindAll(params?: ClientControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganClientDto>;
        'total'?: number;
    }>;
    /** Path part for operation `clientControllerCreate()` */
    static readonly ClientControllerCreatePath = "/client";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `clientControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    clientControllerCreate$Response(params: ClientControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `clientControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    clientControllerCreate(params: ClientControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientDto;
    }>;
    /** Path part for operation `clientControllerFindOne()` */
    static readonly ClientControllerFindOnePath = "/client/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `clientControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    clientControllerFindOne$Response(params: ClientControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `clientControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    clientControllerFindOne(params: ClientControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientDto;
    }>;
    /** Path part for operation `clientControllerUpdate()` */
    static readonly ClientControllerUpdatePath = "/client/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `clientControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    clientControllerUpdate$Response(params: ClientControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `clientControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    clientControllerUpdate(params: ClientControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientDto;
    }>;
    /** Path part for operation `clientControllerRemove()` */
    static readonly ClientControllerRemovePath = "/client/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `clientControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    clientControllerRemove$Response(params: ClientControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `clientControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    clientControllerRemove(params: ClientControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ClientService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ClientService>;
}
