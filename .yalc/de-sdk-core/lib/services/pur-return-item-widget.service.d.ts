import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurReturnItemWidgetDto } from '../models/amims-pur-return-item-widget-dto';
import { PurReturnItemWidgetControllerFindAll$Params } from '../fn/pur-return-item-widget/pur-return-item-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class PurReturnItemWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purReturnItemWidgetControllerFindAll()` */
    static readonly PurReturnItemWidgetControllerFindAllPath = "/amims/pur_return_item/pur_return_item_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purReturnItemWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purReturnItemWidgetControllerFindAll$Response(params: PurReturnItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurReturnItemWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purReturnItemWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purReturnItemWidgetControllerFindAll(params: PurReturnItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurReturnItemWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurReturnItemWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurReturnItemWidgetService>;
}
