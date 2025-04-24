import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMaintenanceCodeFormIssuedDto } from '../models/amims-maintenance-code-form-issued-dto';
import { MaintenanceCodeFormIssuedControllerCreate$Params } from '../fn/maintenance-code-form-issued/maintenance-code-form-issued-controller-create';
import { MaintenanceCodeFormIssuedControllerFindAll$Params } from '../fn/maintenance-code-form-issued/maintenance-code-form-issued-controller-find-all';
import { MaintenanceCodeFormIssuedControllerFindOne$Params } from '../fn/maintenance-code-form-issued/maintenance-code-form-issued-controller-find-one';
import { MaintenanceCodeFormIssuedControllerRemove$Params } from '../fn/maintenance-code-form-issued/maintenance-code-form-issued-controller-remove';
import { MaintenanceCodeFormIssuedControllerUpdate$Params } from '../fn/maintenance-code-form-issued/maintenance-code-form-issued-controller-update';
import * as i0 from "@angular/core";
export declare class MaintenanceCodeFormIssuedService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `maintenanceCodeFormIssuedControllerFindAll()` */
    static readonly MaintenanceCodeFormIssuedControllerFindAllPath = "/amims/maintenance_code_form_issued/maintenance_code_form_issued";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `maintenanceCodeFormIssuedControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceCodeFormIssuedControllerFindAll$Response(params?: MaintenanceCodeFormIssuedControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMaintenanceCodeFormIssuedDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `maintenanceCodeFormIssuedControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceCodeFormIssuedControllerFindAll(params?: MaintenanceCodeFormIssuedControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMaintenanceCodeFormIssuedDto>;
        'total'?: number;
    }>;
    /** Path part for operation `maintenanceCodeFormIssuedControllerCreate()` */
    static readonly MaintenanceCodeFormIssuedControllerCreatePath = "/amims/maintenance_code_form_issued/maintenance_code_form_issued";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `maintenanceCodeFormIssuedControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    maintenanceCodeFormIssuedControllerCreate$Response(params: MaintenanceCodeFormIssuedControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceCodeFormIssuedDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `maintenanceCodeFormIssuedControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    maintenanceCodeFormIssuedControllerCreate(params: MaintenanceCodeFormIssuedControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceCodeFormIssuedDto;
    }>;
    /** Path part for operation `maintenanceCodeFormIssuedControllerFindOne()` */
    static readonly MaintenanceCodeFormIssuedControllerFindOnePath = "/amims/maintenance_code_form_issued/maintenance_code_form_issued/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `maintenanceCodeFormIssuedControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceCodeFormIssuedControllerFindOne$Response(params: MaintenanceCodeFormIssuedControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceCodeFormIssuedDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `maintenanceCodeFormIssuedControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceCodeFormIssuedControllerFindOne(params: MaintenanceCodeFormIssuedControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceCodeFormIssuedDto;
    }>;
    /** Path part for operation `maintenanceCodeFormIssuedControllerUpdate()` */
    static readonly MaintenanceCodeFormIssuedControllerUpdatePath = "/amims/maintenance_code_form_issued/maintenance_code_form_issued/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `maintenanceCodeFormIssuedControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    maintenanceCodeFormIssuedControllerUpdate$Response(params: MaintenanceCodeFormIssuedControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceCodeFormIssuedDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `maintenanceCodeFormIssuedControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    maintenanceCodeFormIssuedControllerUpdate(params: MaintenanceCodeFormIssuedControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceCodeFormIssuedDto;
    }>;
    /** Path part for operation `maintenanceCodeFormIssuedControllerRemove()` */
    static readonly MaintenanceCodeFormIssuedControllerRemovePath = "/amims/maintenance_code_form_issued/maintenance_code_form_issued/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `maintenanceCodeFormIssuedControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceCodeFormIssuedControllerRemove$Response(params: MaintenanceCodeFormIssuedControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceCodeFormIssuedDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `maintenanceCodeFormIssuedControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    maintenanceCodeFormIssuedControllerRemove(params: MaintenanceCodeFormIssuedControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMaintenanceCodeFormIssuedDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaintenanceCodeFormIssuedService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MaintenanceCodeFormIssuedService>;
}
