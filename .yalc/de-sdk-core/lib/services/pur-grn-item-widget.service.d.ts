import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurGrnItemWidgetDto } from '../models/amims-pur-grn-item-widget-dto';
import { PurGrnItemWidgetControllerFindAll$Params } from '../fn/pur-grn-item-widget/pur-grn-item-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class PurGrnItemWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purGrnItemWidgetControllerFindAll()` */
    static readonly PurGrnItemWidgetControllerFindAllPath = "/amims/pur_grn_item/pur_grn_item_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purGrnItemWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purGrnItemWidgetControllerFindAll$Response(params: PurGrnItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurGrnItemWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purGrnItemWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purGrnItemWidgetControllerFindAll(params: PurGrnItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurGrnItemWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurGrnItemWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurGrnItemWidgetService>;
}
