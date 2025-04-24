import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { CustomFieldGroupReportControllerFindAll$Params } from '../fn/custom-field-group-report/custom-field-group-report-controller-find-all';
import { CustomFieldGroupReportControllerFindOne$Params } from '../fn/custom-field-group-report/custom-field-group-report-controller-find-one';
import { ToolsCustomFieldGroupReportDto } from '../models/tools-custom-field-group-report-dto';
import * as i0 from "@angular/core";
export declare class CustomFieldGroupReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `customFieldGroupReportControllerFindAll()` */
    static readonly CustomFieldGroupReportControllerFindAllPath = "/auth/custom_field_group/custom_field_group_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `customFieldGroupReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    customFieldGroupReportControllerFindAll$Response(params: CustomFieldGroupReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsCustomFieldGroupReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `customFieldGroupReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    customFieldGroupReportControllerFindAll(params: CustomFieldGroupReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsCustomFieldGroupReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `customFieldGroupReportControllerFindOne()` */
    static readonly CustomFieldGroupReportControllerFindOnePath = "/auth/custom_field_group/custom_field_group_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `customFieldGroupReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    customFieldGroupReportControllerFindOne$Response(params: CustomFieldGroupReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldGroupReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `customFieldGroupReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    customFieldGroupReportControllerFindOne(params: CustomFieldGroupReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldGroupReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomFieldGroupReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomFieldGroupReportService>;
}
