import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsShippingWidgetDto } from '../models/amims-shipping-widget-dto';
import { ShippingWidgetControllerFindAll$Params } from '../fn/shipping-widget/shipping-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class ShippingWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `shippingWidgetControllerFindAll()` */
    static readonly ShippingWidgetControllerFindAllPath = "/amims/shipping/shipping_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `shippingWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    shippingWidgetControllerFindAll$Response(params: ShippingWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsShippingWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `shippingWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    shippingWidgetControllerFindAll(params: ShippingWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsShippingWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShippingWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ShippingWidgetService>;
}
