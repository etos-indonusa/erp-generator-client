import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { CustomFieldGroupControllerCreate$Params } from '../fn/custom-field-group/custom-field-group-controller-create';
import { CustomFieldGroupControllerFindAll$Params } from '../fn/custom-field-group/custom-field-group-controller-find-all';
import { CustomFieldGroupControllerFindOne$Params } from '../fn/custom-field-group/custom-field-group-controller-find-one';
import { CustomFieldGroupControllerRemove$Params } from '../fn/custom-field-group/custom-field-group-controller-remove';
import { CustomFieldGroupControllerUpdate$Params } from '../fn/custom-field-group/custom-field-group-controller-update';
import { ToolsCustomFieldGroupDto } from '../models/tools-custom-field-group-dto';
import * as i0 from "@angular/core";
export declare class CustomFieldGroupService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `customFieldGroupControllerFindAll()` */
    static readonly CustomFieldGroupControllerFindAllPath = "/auth/custom_field_group/custom_field_group";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `customFieldGroupControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    customFieldGroupControllerFindAll$Response(params?: CustomFieldGroupControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsCustomFieldGroupDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `customFieldGroupControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    customFieldGroupControllerFindAll(params?: CustomFieldGroupControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsCustomFieldGroupDto>;
        'total'?: number;
    }>;
    /** Path part for operation `customFieldGroupControllerCreate()` */
    static readonly CustomFieldGroupControllerCreatePath = "/auth/custom_field_group/custom_field_group";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `customFieldGroupControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    customFieldGroupControllerCreate$Response(params: CustomFieldGroupControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldGroupDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `customFieldGroupControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    customFieldGroupControllerCreate(params: CustomFieldGroupControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldGroupDto;
    }>;
    /** Path part for operation `customFieldGroupControllerFindOne()` */
    static readonly CustomFieldGroupControllerFindOnePath = "/auth/custom_field_group/custom_field_group/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `customFieldGroupControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    customFieldGroupControllerFindOne$Response(params: CustomFieldGroupControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldGroupDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `customFieldGroupControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    customFieldGroupControllerFindOne(params: CustomFieldGroupControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldGroupDto;
    }>;
    /** Path part for operation `customFieldGroupControllerUpdate()` */
    static readonly CustomFieldGroupControllerUpdatePath = "/auth/custom_field_group/custom_field_group/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `customFieldGroupControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    customFieldGroupControllerUpdate$Response(params: CustomFieldGroupControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldGroupDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `customFieldGroupControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    customFieldGroupControllerUpdate(params: CustomFieldGroupControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldGroupDto;
    }>;
    /** Path part for operation `customFieldGroupControllerRemove()` */
    static readonly CustomFieldGroupControllerRemovePath = "/auth/custom_field_group/custom_field_group/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `customFieldGroupControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    customFieldGroupControllerRemove$Response(params: CustomFieldGroupControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldGroupDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `customFieldGroupControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    customFieldGroupControllerRemove(params: CustomFieldGroupControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldGroupDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomFieldGroupService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomFieldGroupService>;
}
