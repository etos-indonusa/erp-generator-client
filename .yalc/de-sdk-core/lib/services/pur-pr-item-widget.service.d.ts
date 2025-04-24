import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurPrItemWidgetDto } from '../models/amims-pur-pr-item-widget-dto';
import { PurPrItemWidgetControllerFindAll$Params } from '../fn/pur-pr-item-widget/pur-pr-item-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class PurPrItemWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purPrItemWidgetControllerFindAll()` */
    static readonly PurPrItemWidgetControllerFindAllPath = "/amims/pur_pr_item/pur_pr_item_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPrItemWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPrItemWidgetControllerFindAll$Response(params: PurPrItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPrItemWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPrItemWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPrItemWidgetControllerFindAll(params: PurPrItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPrItemWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurPrItemWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurPrItemWidgetService>;
}
