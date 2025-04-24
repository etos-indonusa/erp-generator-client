import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsShippingDto } from '../models/amims-shipping-dto';
import { ShippingControllerCreate$Params } from '../fn/shipping/shipping-controller-create';
import { ShippingControllerFindAll$Params } from '../fn/shipping/shipping-controller-find-all';
import { ShippingControllerFindOne$Params } from '../fn/shipping/shipping-controller-find-one';
import { ShippingControllerRemove$Params } from '../fn/shipping/shipping-controller-remove';
import { ShippingControllerUpdate$Params } from '../fn/shipping/shipping-controller-update';
import * as i0 from "@angular/core";
export declare class ShippingService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `shippingControllerFindAll()` */
    static readonly ShippingControllerFindAllPath = "/amims/shipping/shipping";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `shippingControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    shippingControllerFindAll$Response(params?: ShippingControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsShippingDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `shippingControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    shippingControllerFindAll(params?: ShippingControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsShippingDto>;
        'total'?: number;
    }>;
    /** Path part for operation `shippingControllerCreate()` */
    static readonly ShippingControllerCreatePath = "/amims/shipping/shipping";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `shippingControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    shippingControllerCreate$Response(params: ShippingControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsShippingDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `shippingControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    shippingControllerCreate(params: ShippingControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsShippingDto;
    }>;
    /** Path part for operation `shippingControllerFindOne()` */
    static readonly ShippingControllerFindOnePath = "/amims/shipping/shipping/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `shippingControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    shippingControllerFindOne$Response(params: ShippingControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsShippingDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `shippingControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    shippingControllerFindOne(params: ShippingControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsShippingDto;
    }>;
    /** Path part for operation `shippingControllerUpdate()` */
    static readonly ShippingControllerUpdatePath = "/amims/shipping/shipping/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `shippingControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    shippingControllerUpdate$Response(params: ShippingControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsShippingDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `shippingControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    shippingControllerUpdate(params: ShippingControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsShippingDto;
    }>;
    /** Path part for operation `shippingControllerRemove()` */
    static readonly ShippingControllerRemovePath = "/amims/shipping/shipping/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `shippingControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    shippingControllerRemove$Response(params: ShippingControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsShippingDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `shippingControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    shippingControllerRemove(params: ShippingControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsShippingDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShippingService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ShippingService>;
}
