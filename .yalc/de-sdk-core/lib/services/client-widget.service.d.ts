import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ClientWidgetControllerFindAll$Params } from '../fn/client-widget/client-widget-controller-find-all';
import { PelangganClientWidgetDto } from '../models/pelanggan-client-widget-dto';
import * as i0 from "@angular/core";
export declare class ClientWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `clientWidgetControllerFindAll()` */
    static readonly ClientWidgetControllerFindAllPath = "/client_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `clientWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    clientWidgetControllerFindAll$Response(params: ClientWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganClientWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `clientWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    clientWidgetControllerFindAll(params: ClientWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganClientWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ClientWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ClientWidgetService>;
}
