import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsStoreTransferWidgetDto } from '../models/amims-store-transfer-widget-dto';
import { StoreTransferWidgetControllerFindAll$Params } from '../fn/store-transfer-widget/store-transfer-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class StoreTransferWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `storeTransferWidgetControllerFindAll()` */
    static readonly StoreTransferWidgetControllerFindAllPath = "/amims/store_transfer/store_transfer_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `storeTransferWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    storeTransferWidgetControllerFindAll$Response(params: StoreTransferWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsStoreTransferWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `storeTransferWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    storeTransferWidgetControllerFindAll(params: StoreTransferWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsStoreTransferWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StoreTransferWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StoreTransferWidgetService>;
}
