import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurVendorContactWidgetDto } from '../models/amims-pur-vendor-contact-widget-dto';
import { PurVendorContactWidgetControllerFindAll$Params } from '../fn/pur-vendor-contact-widget/pur-vendor-contact-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class PurVendorContactWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purVendorContactWidgetControllerFindAll()` */
    static readonly PurVendorContactWidgetControllerFindAllPath = "/amims/pur_vendor_contact/pur_vendor_contact_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purVendorContactWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purVendorContactWidgetControllerFindAll$Response(params: PurVendorContactWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurVendorContactWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purVendorContactWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purVendorContactWidgetControllerFindAll(params: PurVendorContactWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurVendorContactWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurVendorContactWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurVendorContactWidgetService>;
}
