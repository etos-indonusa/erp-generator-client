import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsStoreDestroyReportDto } from '../models/amims-store-destroy-report-dto';
import { StoreDestroyReportControllerFindAll$Params } from '../fn/store-destroy-report/store-destroy-report-controller-find-all';
import { StoreDestroyReportControllerFindOne$Params } from '../fn/store-destroy-report/store-destroy-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class StoreDestroyReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `storeDestroyReportControllerFindAll()` */
    static readonly StoreDestroyReportControllerFindAllPath = "/amims/store_destroy/store_destroy_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `storeDestroyReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    storeDestroyReportControllerFindAll$Response(params: StoreDestroyReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsStoreDestroyReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `storeDestroyReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    storeDestroyReportControllerFindAll(params: StoreDestroyReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsStoreDestroyReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `storeDestroyReportControllerFindOne()` */
    static readonly StoreDestroyReportControllerFindOnePath = "/amims/store_destroy/store_destroy_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `storeDestroyReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    storeDestroyReportControllerFindOne$Response(params: StoreDestroyReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreDestroyReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `storeDestroyReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    storeDestroyReportControllerFindOne(params: StoreDestroyReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreDestroyReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StoreDestroyReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StoreDestroyReportService>;
}
