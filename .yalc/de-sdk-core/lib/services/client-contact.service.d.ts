import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ClientContactControllerCreate$Params } from '../fn/client-contact/client-contact-controller-create';
import { ClientContactControllerFindAll$Params } from '../fn/client-contact/client-contact-controller-find-all';
import { ClientContactControllerFindOne$Params } from '../fn/client-contact/client-contact-controller-find-one';
import { ClientContactControllerRemove$Params } from '../fn/client-contact/client-contact-controller-remove';
import { ClientContactControllerUpdate$Params } from '../fn/client-contact/client-contact-controller-update';
import { PelangganClientContactDto } from '../models/pelanggan-client-contact-dto';
import * as i0 from "@angular/core";
export declare class ClientContactService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `clientContactControllerFindAll()` */
    static readonly ClientContactControllerFindAllPath = "/pelanggan/client_contact/client_contact";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `clientContactControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    clientContactControllerFindAll$Response(params?: ClientContactControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganClientContactDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `clientContactControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    clientContactControllerFindAll(params?: ClientContactControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganClientContactDto>;
        'total'?: number;
    }>;
    /** Path part for operation `clientContactControllerCreate()` */
    static readonly ClientContactControllerCreatePath = "/pelanggan/client_contact/client_contact";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `clientContactControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    clientContactControllerCreate$Response(params: ClientContactControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientContactDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `clientContactControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    clientContactControllerCreate(params: ClientContactControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientContactDto;
    }>;
    /** Path part for operation `clientContactControllerFindOne()` */
    static readonly ClientContactControllerFindOnePath = "/pelanggan/client_contact/client_contact/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `clientContactControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    clientContactControllerFindOne$Response(params: ClientContactControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientContactDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `clientContactControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    clientContactControllerFindOne(params: ClientContactControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientContactDto;
    }>;
    /** Path part for operation `clientContactControllerUpdate()` */
    static readonly ClientContactControllerUpdatePath = "/pelanggan/client_contact/client_contact/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `clientContactControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    clientContactControllerUpdate$Response(params: ClientContactControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientContactDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `clientContactControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    clientContactControllerUpdate(params: ClientContactControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientContactDto;
    }>;
    /** Path part for operation `clientContactControllerRemove()` */
    static readonly ClientContactControllerRemovePath = "/pelanggan/client_contact/client_contact/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `clientContactControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    clientContactControllerRemove$Response(params: ClientContactControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientContactDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `clientContactControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    clientContactControllerRemove(params: ClientContactControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientContactDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ClientContactService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ClientContactService>;
}
