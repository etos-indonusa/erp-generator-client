import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsStoreDestroyWidgetDto } from '../models/amims-store-destroy-widget-dto';
import { StoreDestroyWidgetControllerFindAll$Params } from '../fn/store-destroy-widget/store-destroy-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class StoreDestroyWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `storeDestroyWidgetControllerFindAll()` */
    static readonly StoreDestroyWidgetControllerFindAllPath = "/amims/store_destroy/store_destroy_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `storeDestroyWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    storeDestroyWidgetControllerFindAll$Response(params: StoreDestroyWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsStoreDestroyWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `storeDestroyWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    storeDestroyWidgetControllerFindAll(params: StoreDestroyWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsStoreDestroyWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StoreDestroyWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StoreDestroyWidgetService>;
}
