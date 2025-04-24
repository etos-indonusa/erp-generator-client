import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartLogWidgetDto } from '../models/amims-part-log-widget-dto';
import { PartLogWidgetControllerFindAll$Params } from '../fn/part-log-widget/part-log-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class PartLogWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partLogWidgetControllerFindAll()` */
    static readonly PartLogWidgetControllerFindAllPath = "/amims/part_log/part_log_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partLogWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partLogWidgetControllerFindAll$Response(params: PartLogWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartLogWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partLogWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partLogWidgetControllerFindAll(params: PartLogWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartLogWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartLogWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartLogWidgetService>;
}
