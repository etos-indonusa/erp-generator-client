import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTdDetailAcWidgetDto } from '../models/amims-td-detail-ac-widget-dto';
import { TdDetailAcWidgetControllerFindAll$Params } from '../fn/td-detail-ac-widget/td-detail-ac-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class TdDetailAcWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `tdDetailAcWidgetControllerFindAll()` */
    static readonly TdDetailAcWidgetControllerFindAllPath = "/amims/td_detail_ac/td_detail_ac_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdDetailAcWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdDetailAcWidgetControllerFindAll$Response(params: TdDetailAcWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTdDetailAcWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdDetailAcWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdDetailAcWidgetControllerFindAll(params: TdDetailAcWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTdDetailAcWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TdDetailAcWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TdDetailAcWidgetService>;
}
