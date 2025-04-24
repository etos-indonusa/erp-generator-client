import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurPrWidgetDto } from '../models/amims-pur-pr-widget-dto';
import { PurPrWidgetControllerFindAll$Params } from '../fn/pur-pr-widget/pur-pr-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class PurPrWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purPrWidgetControllerFindAll()` */
    static readonly PurPrWidgetControllerFindAllPath = "/amims/pur_pr/pur_pr_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purPrWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPrWidgetControllerFindAll$Response(params: PurPrWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPrWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purPrWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purPrWidgetControllerFindAll(params: PurPrWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurPrWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurPrWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurPrWidgetService>;
}
