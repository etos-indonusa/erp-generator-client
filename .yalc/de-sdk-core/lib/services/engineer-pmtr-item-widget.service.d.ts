import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerPmtrItemWidgetDto } from '../models/amims-engineer-pmtr-item-widget-dto';
import { EngineerPmtrItemWidgetControllerFindAll$Params } from '../fn/engineer-pmtr-item-widget/engineer-pmtr-item-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class EngineerPmtrItemWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerPmtrItemWidgetControllerFindAll()` */
    static readonly EngineerPmtrItemWidgetControllerFindAllPath = "/amims/engineer_pmtr_item/engineer_pmtr_item_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPmtrItemWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPmtrItemWidgetControllerFindAll$Response(params: EngineerPmtrItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPmtrItemWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPmtrItemWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPmtrItemWidgetControllerFindAll(params: EngineerPmtrItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPmtrItemWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerPmtrItemWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerPmtrItemWidgetService>;
}
