import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsWarrantyDto } from '../models/amims-warranty-dto';
import { WarrantyControllerCreate$Params } from '../fn/warranty/warranty-controller-create';
import { WarrantyControllerFindAll$Params } from '../fn/warranty/warranty-controller-find-all';
import { WarrantyControllerFindOne$Params } from '../fn/warranty/warranty-controller-find-one';
import { WarrantyControllerRemove$Params } from '../fn/warranty/warranty-controller-remove';
import { WarrantyControllerUpdate$Params } from '../fn/warranty/warranty-controller-update';
import * as i0 from "@angular/core";
export declare class WarrantyService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `warrantyControllerFindAll()` */
    static readonly WarrantyControllerFindAllPath = "/amims/warranty/warranty";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `warrantyControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    warrantyControllerFindAll$Response(params?: WarrantyControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsWarrantyDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `warrantyControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    warrantyControllerFindAll(params?: WarrantyControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsWarrantyDto>;
        'total'?: number;
    }>;
    /** Path part for operation `warrantyControllerCreate()` */
    static readonly WarrantyControllerCreatePath = "/amims/warranty/warranty";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `warrantyControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    warrantyControllerCreate$Response(params: WarrantyControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsWarrantyDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `warrantyControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    warrantyControllerCreate(params: WarrantyControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsWarrantyDto;
    }>;
    /** Path part for operation `warrantyControllerFindOne()` */
    static readonly WarrantyControllerFindOnePath = "/amims/warranty/warranty/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `warrantyControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    warrantyControllerFindOne$Response(params: WarrantyControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsWarrantyDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `warrantyControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    warrantyControllerFindOne(params: WarrantyControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsWarrantyDto;
    }>;
    /** Path part for operation `warrantyControllerUpdate()` */
    static readonly WarrantyControllerUpdatePath = "/amims/warranty/warranty/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `warrantyControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    warrantyControllerUpdate$Response(params: WarrantyControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsWarrantyDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `warrantyControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    warrantyControllerUpdate(params: WarrantyControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsWarrantyDto;
    }>;
    /** Path part for operation `warrantyControllerRemove()` */
    static readonly WarrantyControllerRemovePath = "/amims/warranty/warranty/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `warrantyControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    warrantyControllerRemove$Response(params: WarrantyControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsWarrantyDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `warrantyControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    warrantyControllerRemove(params: WarrantyControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsWarrantyDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<WarrantyService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WarrantyService>;
}
