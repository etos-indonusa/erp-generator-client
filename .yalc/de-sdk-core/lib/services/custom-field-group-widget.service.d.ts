import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { CustomFieldGroupWidgetControllerFindAll$Params } from '../fn/custom-field-group-widget/custom-field-group-widget-controller-find-all';
import { ToolsCustomFieldGroupWidgetDto } from '../models/tools-custom-field-group-widget-dto';
import * as i0 from "@angular/core";
export declare class CustomFieldGroupWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `customFieldGroupWidgetControllerFindAll()` */
    static readonly CustomFieldGroupWidgetControllerFindAllPath = "/auth/custom_field_group/custom_field_group_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `customFieldGroupWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    customFieldGroupWidgetControllerFindAll$Response(params: CustomFieldGroupWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsCustomFieldGroupWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `customFieldGroupWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    customFieldGroupWidgetControllerFindAll(params: CustomFieldGroupWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsCustomFieldGroupWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomFieldGroupWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomFieldGroupWidgetService>;
}
