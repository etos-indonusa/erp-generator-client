import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartConditionWidgetDto } from '../models/amims-part-condition-widget-dto';
import { PartConditionWidgetControllerFindAll$Params } from '../fn/part-condition-widget/part-condition-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class PartConditionWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partConditionWidgetControllerFindAll()` */
    static readonly PartConditionWidgetControllerFindAllPath = "/amims/part_condition/part_condition_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partConditionWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partConditionWidgetControllerFindAll$Response(params: PartConditionWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartConditionWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partConditionWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partConditionWidgetControllerFindAll(params: PartConditionWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartConditionWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartConditionWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartConditionWidgetService>;
}
