import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurPoWidgetDto } from '../models/amims-pur-po-widget-dto';
import { PurPoWidgetControllerFindAll$Params } from '../fn/pur-po-widget/pur-po-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class PurPoWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purPoWidgetControllerFindAll()` */
    static readonly PurPoWidgetControllerFindAllPath = "/amims/pur_po/pur_po_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPoWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPoWidgetControllerFindAll$Response(params: PurPoWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPoWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPoWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPoWidgetControllerFindAll(params: PurPoWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPoWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurPoWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurPoWidgetService>;
}
