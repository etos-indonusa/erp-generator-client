import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsAtaDto } from '../models/amims-ata-dto';
import { AtaControllerCreate$Params } from '../fn/ata/ata-controller-create';
import { AtaControllerFindAll$Params } from '../fn/ata/ata-controller-find-all';
import { AtaControllerFindOne$Params } from '../fn/ata/ata-controller-find-one';
import { AtaControllerRemove$Params } from '../fn/ata/ata-controller-remove';
import { AtaControllerUpdate$Params } from '../fn/ata/ata-controller-update';
import * as i0 from "@angular/core";
export declare class AtaService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `ataControllerFindAll()` */
    static readonly AtaControllerFindAllPath = "/amims/ata/ata";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `ataControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    ataControllerFindAll$Response(params?: AtaControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsAtaDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `ataControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    ataControllerFindAll(params?: AtaControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsAtaDto>;
        'total'?: number;
    }>;
    /** Path part for operation `ataControllerCreate()` */
    static readonly AtaControllerCreatePath = "/amims/ata/ata";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `ataControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    ataControllerCreate$Response(params: AtaControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAtaDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `ataControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    ataControllerCreate(params: AtaControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAtaDto;
    }>;
    /** Path part for operation `ataControllerFindOne()` */
    static readonly AtaControllerFindOnePath = "/amims/ata/ata/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `ataControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    ataControllerFindOne$Response(params: AtaControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAtaDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `ataControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    ataControllerFindOne(params: AtaControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAtaDto;
    }>;
    /** Path part for operation `ataControllerUpdate()` */
    static readonly AtaControllerUpdatePath = "/amims/ata/ata/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `ataControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    ataControllerUpdate$Response(params: AtaControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAtaDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `ataControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    ataControllerUpdate(params: AtaControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAtaDto;
    }>;
    /** Path part for operation `ataControllerRemove()` */
    static readonly AtaControllerRemovePath = "/amims/ata/ata/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `ataControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    ataControllerRemove$Response(params: AtaControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAtaDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `ataControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    ataControllerRemove(params: AtaControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsAtaDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AtaService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AtaService>;
}
