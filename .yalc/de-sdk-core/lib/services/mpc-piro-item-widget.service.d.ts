import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMpcPiroItemWidgetDto } from '../models/amims-mpc-piro-item-widget-dto';
import { MpcPiroItemWidgetControllerFindAll$Params } from '../fn/mpc-piro-item-widget/mpc-piro-item-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class MpcPiroItemWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `mpcPiroItemWidgetControllerFindAll()` */
    static readonly MpcPiroItemWidgetControllerFindAllPath = "/amims/mpc_piro_item/mpc_piro_item_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcPiroItemWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcPiroItemWidgetControllerFindAll$Response(params: MpcPiroItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcPiroItemWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcPiroItemWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcPiroItemWidgetControllerFindAll(params: MpcPiroItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcPiroItemWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MpcPiroItemWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MpcPiroItemWidgetService>;
}
