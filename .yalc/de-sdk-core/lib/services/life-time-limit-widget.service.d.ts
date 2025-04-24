import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLifeTimeLimitWidgetDto } from '../models/amims-life-time-limit-widget-dto';
import { LifeTimeLimitWidgetControllerFindAll$Params } from '../fn/life-time-limit-widget/life-time-limit-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class LifeTimeLimitWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `lifeTimeLimitWidgetControllerFindAll()` */
    static readonly LifeTimeLimitWidgetControllerFindAllPath = "/amims/life_time_limit/life_time_limit_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `lifeTimeLimitWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    lifeTimeLimitWidgetControllerFindAll$Response(params: LifeTimeLimitWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLifeTimeLimitWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `lifeTimeLimitWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    lifeTimeLimitWidgetControllerFindAll(params: LifeTimeLimitWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLifeTimeLimitWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LifeTimeLimitWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LifeTimeLimitWidgetService>;
}
