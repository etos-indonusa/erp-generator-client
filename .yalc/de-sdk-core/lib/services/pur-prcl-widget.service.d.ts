import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurPrclWidgetDto } from '../models/amims-pur-prcl-widget-dto';
import { PurPrclWidgetControllerFindAll$Params } from '../fn/pur-prcl-widget/pur-prcl-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class PurPrclWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purPrclWidgetControllerFindAll()` */
    static readonly PurPrclWidgetControllerFindAllPath = "/amims/pur_prcl/pur_prcl_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPrclWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPrclWidgetControllerFindAll$Response(params: PurPrclWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPrclWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPrclWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPrclWidgetControllerFindAll(params: PurPrclWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPrclWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurPrclWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurPrclWidgetService>;
}
