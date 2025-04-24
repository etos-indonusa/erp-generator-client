import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartInstallDto } from '../models/amims-part-install-dto';
import { PartInstallControllerCreate$Params } from '../fn/part-install/part-install-controller-create';
import { PartInstallControllerFindAll$Params } from '../fn/part-install/part-install-controller-find-all';
import { PartInstallControllerFindOne$Params } from '../fn/part-install/part-install-controller-find-one';
import { PartInstallControllerRemove$Params } from '../fn/part-install/part-install-controller-remove';
import { PartInstallControllerUpdate$Params } from '../fn/part-install/part-install-controller-update';
import * as i0 from "@angular/core";
export declare class PartInstallService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partInstallControllerFindAll()` */
    static readonly PartInstallControllerFindAllPath = "/amims/part_install/part_install";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partInstallControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    partInstallControllerFindAll$Response(params?: PartInstallControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartInstallDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partInstallControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partInstallControllerFindAll(params?: PartInstallControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartInstallDto>;
        'total'?: number;
    }>;
    /** Path part for operation `partInstallControllerCreate()` */
    static readonly PartInstallControllerCreatePath = "/amims/part_install/part_install";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partInstallControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partInstallControllerCreate$Response(params: PartInstallControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartInstallDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partInstallControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partInstallControllerCreate(params: PartInstallControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartInstallDto;
    }>;
    /** Path part for operation `partInstallControllerFindOne()` */
    static readonly PartInstallControllerFindOnePath = "/amims/part_install/part_install/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partInstallControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    partInstallControllerFindOne$Response(params: PartInstallControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartInstallDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partInstallControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partInstallControllerFindOne(params: PartInstallControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartInstallDto;
    }>;
    /** Path part for operation `partInstallControllerUpdate()` */
    static readonly PartInstallControllerUpdatePath = "/amims/part_install/part_install/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partInstallControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partInstallControllerUpdate$Response(params: PartInstallControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartInstallDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partInstallControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partInstallControllerUpdate(params: PartInstallControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartInstallDto;
    }>;
    /** Path part for operation `partInstallControllerRemove()` */
    static readonly PartInstallControllerRemovePath = "/amims/part_install/part_install/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partInstallControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    partInstallControllerRemove$Response(params: PartInstallControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartInstallDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partInstallControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partInstallControllerRemove(params: PartInstallControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartInstallDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartInstallService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartInstallService>;
}
