import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsStoreTransferItemWidgetDto } from '../models/amims-store-transfer-item-widget-dto';
import { StoreTransferItemWidgetControllerFindAll$Params } from '../fn/store-transfer-item-widget/store-transfer-item-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class StoreTransferItemWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `storeTransferItemWidgetControllerFindAll()` */
    static readonly StoreTransferItemWidgetControllerFindAllPath = "/amims/store_transfer_item/store_transfer_item_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `storeTransferItemWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    storeTransferItemWidgetControllerFindAll$Response(params: StoreTransferItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsStoreTransferItemWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `storeTransferItemWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    storeTransferItemWidgetControllerFindAll(params: StoreTransferItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsStoreTransferItemWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StoreTransferItemWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StoreTransferItemWidgetService>;
}
