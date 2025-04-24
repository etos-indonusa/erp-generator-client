import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsRotaryFactorWidgetDto } from '../models/amims-rotary-factor-widget-dto';
import { RotaryFactorWidgetControllerFindAll$Params } from '../fn/rotary-factor-widget/rotary-factor-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class RotaryFactorWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `rotaryFactorWidgetControllerFindAll()` */
    static readonly RotaryFactorWidgetControllerFindAllPath = "/amims/rotary_factor/rotary_factor_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `rotaryFactorWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    rotaryFactorWidgetControllerFindAll$Response(params: RotaryFactorWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsRotaryFactorWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `rotaryFactorWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    rotaryFactorWidgetControllerFindAll(params: RotaryFactorWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsRotaryFactorWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RotaryFactorWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RotaryFactorWidgetService>;
}
