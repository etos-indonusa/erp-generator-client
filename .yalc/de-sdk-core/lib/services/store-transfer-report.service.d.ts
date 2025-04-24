import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsStoreTransferReportDto } from '../models/amims-store-transfer-report-dto';
import { StoreTransferReportControllerFindAll$Params } from '../fn/store-transfer-report/store-transfer-report-controller-find-all';
import { StoreTransferReportControllerFindOne$Params } from '../fn/store-transfer-report/store-transfer-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class StoreTransferReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `storeTransferReportControllerFindAll()` */
    static readonly StoreTransferReportControllerFindAllPath = "/amims/store_transfer/store_transfer_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `storeTransferReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    storeTransferReportControllerFindAll$Response(params: StoreTransferReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsStoreTransferReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `storeTransferReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    storeTransferReportControllerFindAll(params: StoreTransferReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsStoreTransferReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `storeTransferReportControllerFindOne()` */
    static readonly StoreTransferReportControllerFindOnePath = "/amims/store_transfer/store_transfer_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `storeTransferReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    storeTransferReportControllerFindOne$Response(params: StoreTransferReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreTransferReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `storeTransferReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    storeTransferReportControllerFindOne(params: StoreTransferReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreTransferReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StoreTransferReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StoreTransferReportService>;
}
