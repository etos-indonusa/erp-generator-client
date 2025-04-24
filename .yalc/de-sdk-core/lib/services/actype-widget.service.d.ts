import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ActypeWidgetControllerFindAll$Params } from '../fn/actype-widget/actype-widget-controller-find-all';
import { AmimsActypeWidgetDto } from '../models/amims-actype-widget-dto';
import * as i0 from "@angular/core";
export declare class ActypeWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `actypeWidgetControllerFindAll()` */
    static readonly ActypeWidgetControllerFindAllPath = "/amims/actype/actype_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `actypeWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    actypeWidgetControllerFindAll$Response(params: ActypeWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsActypeWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `actypeWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    actypeWidgetControllerFindAll(params: ActypeWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsActypeWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActypeWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ActypeWidgetService>;
}
