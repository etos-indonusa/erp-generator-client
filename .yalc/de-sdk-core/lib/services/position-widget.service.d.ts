import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPositionWidgetDto } from '../models/amims-position-widget-dto';
import { PositionWidgetControllerFindAll$Params } from '../fn/position-widget/position-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class PositionWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `positionWidgetControllerFindAll()` */
    static readonly PositionWidgetControllerFindAllPath = "/amims/position/position_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `positionWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    positionWidgetControllerFindAll$Response(params: PositionWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPositionWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `positionWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    positionWidgetControllerFindAll(params: PositionWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPositionWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PositionWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PositionWidgetService>;
}
