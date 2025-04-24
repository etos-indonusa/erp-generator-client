import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { CustomFieldControllerCreate$Params } from '../fn/custom-field/custom-field-controller-create';
import { CustomFieldControllerFindAll$Params } from '../fn/custom-field/custom-field-controller-find-all';
import { CustomFieldControllerFindOne$Params } from '../fn/custom-field/custom-field-controller-find-one';
import { CustomFieldControllerRemove$Params } from '../fn/custom-field/custom-field-controller-remove';
import { CustomFieldControllerUpdate$Params } from '../fn/custom-field/custom-field-controller-update';
import { ToolsCustomFieldDto } from '../models/tools-custom-field-dto';
import * as i0 from "@angular/core";
export declare class CustomFieldService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `customFieldControllerFindAll()` */
    static readonly CustomFieldControllerFindAllPath = "/auth/custom_field/custom_field";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `customFieldControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    customFieldControllerFindAll$Response(params?: CustomFieldControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsCustomFieldDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `customFieldControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    customFieldControllerFindAll(params?: CustomFieldControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<ToolsCustomFieldDto>;
        'total'?: number;
    }>;
    /** Path part for operation `customFieldControllerCreate()` */
    static readonly CustomFieldControllerCreatePath = "/auth/custom_field/custom_field";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `customFieldControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    customFieldControllerCreate$Response(params: CustomFieldControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `customFieldControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    customFieldControllerCreate(params: CustomFieldControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldDto;
    }>;
    /** Path part for operation `customFieldControllerFindOne()` */
    static readonly CustomFieldControllerFindOnePath = "/auth/custom_field/custom_field/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `customFieldControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    customFieldControllerFindOne$Response(params: CustomFieldControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `customFieldControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    customFieldControllerFindOne(params: CustomFieldControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldDto;
    }>;
    /** Path part for operation `customFieldControllerUpdate()` */
    static readonly CustomFieldControllerUpdatePath = "/auth/custom_field/custom_field/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `customFieldControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    customFieldControllerUpdate$Response(params: CustomFieldControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `customFieldControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    customFieldControllerUpdate(params: CustomFieldControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldDto;
    }>;
    /** Path part for operation `customFieldControllerRemove()` */
    static readonly CustomFieldControllerRemovePath = "/auth/custom_field/custom_field/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `customFieldControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    customFieldControllerRemove$Response(params: CustomFieldControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `customFieldControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    customFieldControllerRemove(params: CustomFieldControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: ToolsCustomFieldDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomFieldService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomFieldService>;
}
