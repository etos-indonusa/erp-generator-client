import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTdDetailWidgetDto } from '../models/amims-td-detail-widget-dto';
import { TdDetailWidgetControllerFindAll$Params } from '../fn/td-detail-widget/td-detail-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class TdDetailWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `tdDetailWidgetControllerFindAll()` */
    static readonly TdDetailWidgetControllerFindAllPath = "/amims/td_detail/td_detail_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdDetailWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdDetailWidgetControllerFindAll$Response(params: TdDetailWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTdDetailWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdDetailWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdDetailWidgetControllerFindAll(params: TdDetailWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTdDetailWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TdDetailWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TdDetailWidgetService>;
}
