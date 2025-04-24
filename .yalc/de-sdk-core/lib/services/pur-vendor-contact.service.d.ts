import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurVendorContactDto } from '../models/amims-pur-vendor-contact-dto';
import { PurVendorContactControllerCreate$Params } from '../fn/pur-vendor-contact/pur-vendor-contact-controller-create';
import { PurVendorContactControllerFindAll$Params } from '../fn/pur-vendor-contact/pur-vendor-contact-controller-find-all';
import { PurVendorContactControllerFindOne$Params } from '../fn/pur-vendor-contact/pur-vendor-contact-controller-find-one';
import { PurVendorContactControllerRemove$Params } from '../fn/pur-vendor-contact/pur-vendor-contact-controller-remove';
import { PurVendorContactControllerUpdate$Params } from '../fn/pur-vendor-contact/pur-vendor-contact-controller-update';
import * as i0 from "@angular/core";
export declare class PurVendorContactService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purVendorContactControllerFindAll()` */
    static readonly PurVendorContactControllerFindAllPath = "/amims/pur_vendor_contact/pur_vendor_contact";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purVendorContactControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    purVendorContactControllerFindAll$Response(params?: PurVendorContactControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurVendorContactDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purVendorContactControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purVendorContactControllerFindAll(params?: PurVendorContactControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurVendorContactDto>;
        'total'?: number;
    }>;
    /** Path part for operation `purVendorContactControllerCreate()` */
    static readonly PurVendorContactControllerCreatePath = "/amims/pur_vendor_contact/pur_vendor_contact";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purVendorContactControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purVendorContactControllerCreate$Response(params: PurVendorContactControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorContactDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purVendorContactControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purVendorContactControllerCreate(params: PurVendorContactControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorContactDto;
    }>;
    /** Path part for operation `purVendorContactControllerFindOne()` */
    static readonly PurVendorContactControllerFindOnePath = "/amims/pur_vendor_contact/pur_vendor_contact/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purVendorContactControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    purVendorContactControllerFindOne$Response(params: PurVendorContactControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorContactDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purVendorContactControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purVendorContactControllerFindOne(params: PurVendorContactControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorContactDto;
    }>;
    /** Path part for operation `purVendorContactControllerUpdate()` */
    static readonly PurVendorContactControllerUpdatePath = "/amims/pur_vendor_contact/pur_vendor_contact/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purVendorContactControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purVendorContactControllerUpdate$Response(params: PurVendorContactControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorContactDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purVendorContactControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purVendorContactControllerUpdate(params: PurVendorContactControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorContactDto;
    }>;
    /** Path part for operation `purVendorContactControllerRemove()` */
    static readonly PurVendorContactControllerRemovePath = "/amims/pur_vendor_contact/pur_vendor_contact/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purVendorContactControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    purVendorContactControllerRemove$Response(params: PurVendorContactControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorContactDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purVendorContactControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purVendorContactControllerRemove(params: PurVendorContactControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurVendorContactDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurVendorContactService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurVendorContactService>;
}
