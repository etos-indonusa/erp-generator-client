import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartAtaDto } from '../models/amims-part-ata-dto';
import { PartAtaControllerCreate$Params } from '../fn/part-ata/part-ata-controller-create';
import { PartAtaControllerFindAll$Params } from '../fn/part-ata/part-ata-controller-find-all';
import { PartAtaControllerFindOne$Params } from '../fn/part-ata/part-ata-controller-find-one';
import { PartAtaControllerRemove$Params } from '../fn/part-ata/part-ata-controller-remove';
import { PartAtaControllerUpdate$Params } from '../fn/part-ata/part-ata-controller-update';
import * as i0 from "@angular/core";
export declare class PartAtaService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partAtaControllerFindAll()` */
    static readonly PartAtaControllerFindAllPath = "/amims/part_ata/part_ata";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partAtaControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    partAtaControllerFindAll$Response(params?: PartAtaControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartAtaDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partAtaControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partAtaControllerFindAll(params?: PartAtaControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartAtaDto>;
        'total'?: number;
    }>;
    /** Path part for operation `partAtaControllerCreate()` */
    static readonly PartAtaControllerCreatePath = "/amims/part_ata/part_ata";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partAtaControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partAtaControllerCreate$Response(params: PartAtaControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartAtaDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partAtaControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partAtaControllerCreate(params: PartAtaControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartAtaDto;
    }>;
    /** Path part for operation `partAtaControllerFindOne()` */
    static readonly PartAtaControllerFindOnePath = "/amims/part_ata/part_ata/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partAtaControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    partAtaControllerFindOne$Response(params: PartAtaControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartAtaDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partAtaControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partAtaControllerFindOne(params: PartAtaControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartAtaDto;
    }>;
    /** Path part for operation `partAtaControllerUpdate()` */
    static readonly PartAtaControllerUpdatePath = "/amims/part_ata/part_ata/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partAtaControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partAtaControllerUpdate$Response(params: PartAtaControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartAtaDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partAtaControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partAtaControllerUpdate(params: PartAtaControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartAtaDto;
    }>;
    /** Path part for operation `partAtaControllerRemove()` */
    static readonly PartAtaControllerRemovePath = "/amims/part_ata/part_ata/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partAtaControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    partAtaControllerRemove$Response(params: PartAtaControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartAtaDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partAtaControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partAtaControllerRemove(params: PartAtaControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartAtaDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartAtaService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartAtaService>;
}
