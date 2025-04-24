import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurReturnWidgetDto } from '../models/amims-pur-return-widget-dto';
import { PurReturnWidgetControllerFindAll$Params } from '../fn/pur-return-widget/pur-return-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class PurReturnWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purReturnWidgetControllerFindAll()` */
    static readonly PurReturnWidgetControllerFindAllPath = "/amims/pur_return/pur_return_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purReturnWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purReturnWidgetControllerFindAll$Response(params: PurReturnWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurReturnWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purReturnWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purReturnWidgetControllerFindAll(params: PurReturnWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurReturnWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurReturnWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurReturnWidgetService>;
}
