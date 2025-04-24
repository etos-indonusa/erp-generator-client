import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurPoItemWidgetDto } from '../models/amims-pur-po-item-widget-dto';
import { PurPoItemWidgetControllerFindAll$Params } from '../fn/pur-po-item-widget/pur-po-item-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class PurPoItemWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purPoItemWidgetControllerFindAll()` */
    static readonly PurPoItemWidgetControllerFindAllPath = "/amims/pur_po_item/pur_po_item_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPoItemWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPoItemWidgetControllerFindAll$Response(params: PurPoItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPoItemWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPoItemWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPoItemWidgetControllerFindAll(params: PurPoItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPoItemWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurPoItemWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurPoItemWidgetService>;
}
