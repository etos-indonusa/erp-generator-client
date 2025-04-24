import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartInstallOldDto } from '../models/amims-part-install-old-dto';
import { PartInstallOldControllerCreate$Params } from '../fn/part-install-old/part-install-old-controller-create';
import { PartInstallOldControllerFindAll$Params } from '../fn/part-install-old/part-install-old-controller-find-all';
import { PartInstallOldControllerFindOne$Params } from '../fn/part-install-old/part-install-old-controller-find-one';
import { PartInstallOldControllerRemove$Params } from '../fn/part-install-old/part-install-old-controller-remove';
import { PartInstallOldControllerUpdate$Params } from '../fn/part-install-old/part-install-old-controller-update';
import * as i0 from "@angular/core";
export declare class PartInstallOldService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partInstallOldControllerFindAll()` */
    static readonly PartInstallOldControllerFindAllPath = "/amims/part_install_old/part_install_old";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partInstallOldControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    partInstallOldControllerFindAll$Response(params?: PartInstallOldControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartInstallOldDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partInstallOldControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partInstallOldControllerFindAll(params?: PartInstallOldControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartInstallOldDto>;
        'total'?: number;
    }>;
    /** Path part for operation `partInstallOldControllerCreate()` */
    static readonly PartInstallOldControllerCreatePath = "/amims/part_install_old/part_install_old";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partInstallOldControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partInstallOldControllerCreate$Response(params: PartInstallOldControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartInstallOldDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partInstallOldControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partInstallOldControllerCreate(params: PartInstallOldControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartInstallOldDto;
    }>;
    /** Path part for operation `partInstallOldControllerFindOne()` */
    static readonly PartInstallOldControllerFindOnePath = "/amims/part_install_old/part_install_old/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partInstallOldControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    partInstallOldControllerFindOne$Response(params: PartInstallOldControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartInstallOldDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partInstallOldControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partInstallOldControllerFindOne(params: PartInstallOldControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartInstallOldDto;
    }>;
    /** Path part for operation `partInstallOldControllerUpdate()` */
    static readonly PartInstallOldControllerUpdatePath = "/amims/part_install_old/part_install_old/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partInstallOldControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partInstallOldControllerUpdate$Response(params: PartInstallOldControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartInstallOldDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partInstallOldControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partInstallOldControllerUpdate(params: PartInstallOldControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartInstallOldDto;
    }>;
    /** Path part for operation `partInstallOldControllerRemove()` */
    static readonly PartInstallOldControllerRemovePath = "/amims/part_install_old/part_install_old/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partInstallOldControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    partInstallOldControllerRemove$Response(params: PartInstallOldControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartInstallOldDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partInstallOldControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partInstallOldControllerRemove(params: PartInstallOldControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartInstallOldDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartInstallOldService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartInstallOldService>;
}
