import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurGrnWidgetDto } from '../models/amims-pur-grn-widget-dto';
import { PurGrnWidgetControllerFindAll$Params } from '../fn/pur-grn-widget/pur-grn-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class PurGrnWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purGrnWidgetControllerFindAll()` */
    static readonly PurGrnWidgetControllerFindAllPath = "/amims/pur_grn/pur_grn_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purGrnWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purGrnWidgetControllerFindAll$Response(params: PurGrnWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurGrnWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purGrnWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purGrnWidgetControllerFindAll(params: PurGrnWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurGrnWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurGrnWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurGrnWidgetService>;
}
