import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTdTypeWidgetDto } from '../models/amims-td-type-widget-dto';
import { TdTypeWidgetControllerFindAll$Params } from '../fn/td-type-widget/td-type-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class TdTypeWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `tdTypeWidgetControllerFindAll()` */
    static readonly TdTypeWidgetControllerFindAllPath = "/amims/td_type/td_type_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdTypeWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdTypeWidgetControllerFindAll$Response(params: TdTypeWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTdTypeWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdTypeWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdTypeWidgetControllerFindAll(params: TdTypeWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTdTypeWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TdTypeWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TdTypeWidgetService>;
}
