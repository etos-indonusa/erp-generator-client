import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { CustomFieldValueControllerCreate$Params } from '../fn/custom-field-value/custom-field-value-controller-create';
import { CustomFieldValueControllerFindAll$Params } from '../fn/custom-field-value/custom-field-value-controller-find-all';
import { CustomFieldValueControllerFindOne$Params } from '../fn/custom-field-value/custom-field-value-controller-find-one';
import { CustomFieldValueControllerRemove$Params } from '../fn/custom-field-value/custom-field-value-controller-remove';
import { CustomFieldValueControllerUpdate$Params } from '../fn/custom-field-value/custom-field-value-controller-update';
import { ToolsCustomFieldValueDto } from '../models/tools-custom-field-value-dto';
import * as i0 from "@angular/core";
export declare class CustomFieldValueService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `customFieldValueControllerFindAll()` */
    static readonly CustomFieldValueControllerFindAllPath = "/auth/custom_field_value/custom_field_value";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `customFieldValueControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    customFieldValueControllerFindAll$Response(params?: CustomFieldValueControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsCustomFieldValueDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `customFieldValueControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    customFieldValueControllerFindAll(params?: CustomFieldValueControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsCustomFieldValueDto>;
        'total'?: number;
    }>;
    /** Path part for operation `customFieldValueControllerCreate()` */
    static readonly CustomFieldValueControllerCreatePath = "/auth/custom_field_value/custom_field_value";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `customFieldValueControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    customFieldValueControllerCreate$Response(params: CustomFieldValueControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldValueDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `customFieldValueControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    customFieldValueControllerCreate(params: CustomFieldValueControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldValueDto;
    }>;
    /** Path part for operation `customFieldValueControllerFindOne()` */
    static readonly CustomFieldValueControllerFindOnePath = "/auth/custom_field_value/custom_field_value/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `customFieldValueControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    customFieldValueControllerFindOne$Response(params: CustomFieldValueControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldValueDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `customFieldValueControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    customFieldValueControllerFindOne(params: CustomFieldValueControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldValueDto;
    }>;
    /** Path part for operation `customFieldValueControllerUpdate()` */
    static readonly CustomFieldValueControllerUpdatePath = "/auth/custom_field_value/custom_field_value/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `customFieldValueControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    customFieldValueControllerUpdate$Response(params: CustomFieldValueControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldValueDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `customFieldValueControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    customFieldValueControllerUpdate(params: CustomFieldValueControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldValueDto;
    }>;
    /** Path part for operation `customFieldValueControllerRemove()` */
    static readonly CustomFieldValueControllerRemovePath = "/auth/custom_field_value/custom_field_value/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `customFieldValueControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    customFieldValueControllerRemove$Response(params: CustomFieldValueControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldValueDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `customFieldValueControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    customFieldValueControllerRemove(params: CustomFieldValueControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldValueDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomFieldValueService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomFieldValueService>;
}
