import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurVendorWidgetDto } from '../models/amims-pur-vendor-widget-dto';
import { PurVendorWidgetControllerFindAll$Params } from '../fn/pur-vendor-widget/pur-vendor-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class PurVendorWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purVendorWidgetControllerFindAll()` */
    static readonly PurVendorWidgetControllerFindAllPath = "/amims/pur_vendor/pur_vendor_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purVendorWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purVendorWidgetControllerFindAll$Response(params: PurVendorWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurVendorWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purVendorWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purVendorWidgetControllerFindAll(params: PurVendorWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurVendorWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurVendorWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurVendorWidgetService>;
}
