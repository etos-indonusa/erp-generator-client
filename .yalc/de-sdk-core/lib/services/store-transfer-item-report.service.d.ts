import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsStoreTransferItemReportDto } from '../models/amims-store-transfer-item-report-dto';
import { StoreTransferItemReportControllerFindAll$Params } from '../fn/store-transfer-item-report/store-transfer-item-report-controller-find-all';
import { StoreTransferItemReportControllerFindOne$Params } from '../fn/store-transfer-item-report/store-transfer-item-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class StoreTransferItemReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `storeTransferItemReportControllerFindAll()` */
    static readonly StoreTransferItemReportControllerFindAllPath = "/amims/store_transfer_item/store_transfer_item_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `storeTransferItemReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    storeTransferItemReportControllerFindAll$Response(params: StoreTransferItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsStoreTransferItemReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `storeTransferItemReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    storeTransferItemReportControllerFindAll(params: StoreTransferItemReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsStoreTransferItemReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `storeTransferItemReportControllerFindOne()` */
    static readonly StoreTransferItemReportControllerFindOnePath = "/amims/store_transfer_item/store_transfer_item_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `storeTransferItemReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    storeTransferItemReportControllerFindOne$Response(params: StoreTransferItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreTransferItemReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `storeTransferItemReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    storeTransferItemReportControllerFindOne(params: StoreTransferItemReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsStoreTransferItemReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StoreTransferItemReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StoreTransferItemReportService>;
}
