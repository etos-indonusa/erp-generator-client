import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPilotWidgetDto } from '../models/amims-pilot-widget-dto';
import { PilotWidgetControllerFindAll$Params } from '../fn/pilot-widget/pilot-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class PilotWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `pilotWidgetControllerFindAll()` */
    static readonly PilotWidgetControllerFindAllPath = "/amims/pilot/pilot_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `pilotWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    pilotWidgetControllerFindAll$Response(params: PilotWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPilotWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `pilotWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    pilotWidgetControllerFindAll(params: PilotWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPilotWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PilotWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PilotWidgetService>;
}
