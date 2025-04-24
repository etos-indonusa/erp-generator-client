import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { CustomFieldValueReportControllerFindAll$Params } from '../fn/custom-field-value-report/custom-field-value-report-controller-find-all';
import { CustomFieldValueReportControllerFindOne$Params } from '../fn/custom-field-value-report/custom-field-value-report-controller-find-one';
import { ToolsCustomFieldValueReportDto } from '../models/tools-custom-field-value-report-dto';
import * as i0 from "@angular/core";
export declare class CustomFieldValueReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `customFieldValueReportControllerFindAll()` */
    static readonly CustomFieldValueReportControllerFindAllPath = "/auth/custom_field_value/custom_field_value_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `customFieldValueReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    customFieldValueReportControllerFindAll$Response(params: CustomFieldValueReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsCustomFieldValueReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `customFieldValueReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    customFieldValueReportControllerFindAll(params: CustomFieldValueReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsCustomFieldValueReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `customFieldValueReportControllerFindOne()` */
    static readonly CustomFieldValueReportControllerFindOnePath = "/auth/custom_field_value/custom_field_value_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `customFieldValueReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    customFieldValueReportControllerFindOne$Response(params: CustomFieldValueReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldValueReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `customFieldValueReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    customFieldValueReportControllerFindOne(params: CustomFieldValueReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldValueReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomFieldValueReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomFieldValueReportService>;
}
