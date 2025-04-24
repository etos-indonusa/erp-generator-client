import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsInternalGrnWidgetDto } from '../models/amims-internal-grn-widget-dto';
import { InternalGrnWidgetControllerFindAll$Params } from '../fn/internal-grn-widget/internal-grn-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class InternalGrnWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `internalGrnWidgetControllerFindAll()` */
    static readonly InternalGrnWidgetControllerFindAllPath = "/amims/internal_grn/internal_grn_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `internalGrnWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    internalGrnWidgetControllerFindAll$Response(params: InternalGrnWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsInternalGrnWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `internalGrnWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    internalGrnWidgetControllerFindAll(params: InternalGrnWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsInternalGrnWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<InternalGrnWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InternalGrnWidgetService>;
}
