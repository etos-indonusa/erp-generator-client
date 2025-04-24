import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsInternalGrnItemWidgetDto } from '../models/amims-internal-grn-item-widget-dto';
import { InternalGrnItemWidgetControllerFindAll$Params } from '../fn/internal-grn-item-widget/internal-grn-item-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class InternalGrnItemWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `internalGrnItemWidgetControllerFindAll()` */
    static readonly InternalGrnItemWidgetControllerFindAllPath = "/amims/internal_grn_item/internal_grn_item_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `internalGrnItemWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    internalGrnItemWidgetControllerFindAll$Response(params: InternalGrnItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsInternalGrnItemWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `internalGrnItemWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    internalGrnItemWidgetControllerFindAll(params: InternalGrnItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsInternalGrnItemWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<InternalGrnItemWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InternalGrnItemWidgetService>;
}
