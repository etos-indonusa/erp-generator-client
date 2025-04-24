import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { CustomFieldValueWidgetControllerFindAll$Params } from '../fn/custom-field-value-widget/custom-field-value-widget-controller-find-all';
import { ToolsCustomFieldValueWidgetDto } from '../models/tools-custom-field-value-widget-dto';
import * as i0 from "@angular/core";
export declare class CustomFieldValueWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `customFieldValueWidgetControllerFindAll()` */
    static readonly CustomFieldValueWidgetControllerFindAllPath = "/auth/custom_field_value/custom_field_value_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `customFieldValueWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    customFieldValueWidgetControllerFindAll$Response(params: CustomFieldValueWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsCustomFieldValueWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `customFieldValueWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    customFieldValueWidgetControllerFindAll(params: CustomFieldValueWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsCustomFieldValueWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomFieldValueWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomFieldValueWidgetService>;
}
