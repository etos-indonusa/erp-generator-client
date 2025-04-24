import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurVendorItemWidgetDto } from '../models/amims-pur-vendor-item-widget-dto';
import { PurVendorItemWidgetControllerFindAll$Params } from '../fn/pur-vendor-item-widget/pur-vendor-item-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class PurVendorItemWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purVendorItemWidgetControllerFindAll()` */
    static readonly PurVendorItemWidgetControllerFindAllPath = "/amims/pur_vendor_item/pur_vendor_item_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purVendorItemWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purVendorItemWidgetControllerFindAll$Response(params: PurVendorItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurVendorItemWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purVendorItemWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purVendorItemWidgetControllerFindAll(params: PurVendorItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurVendorItemWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurVendorItemWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurVendorItemWidgetService>;
}
