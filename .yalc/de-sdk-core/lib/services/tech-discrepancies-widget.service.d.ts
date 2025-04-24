import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTechDiscrepanciesWidgetDto } from '../models/amims-tech-discrepancies-widget-dto';
import { TechDiscrepanciesWidgetControllerFindAll$Params } from '../fn/tech-discrepancies-widget/tech-discrepancies-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class TechDiscrepanciesWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `techDiscrepanciesWidgetControllerFindAll()` */
    static readonly TechDiscrepanciesWidgetControllerFindAllPath = "/amims/tech_discrepancies/tech_discrepancies_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techDiscrepanciesWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techDiscrepanciesWidgetControllerFindAll$Response(params: TechDiscrepanciesWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechDiscrepanciesWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techDiscrepanciesWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techDiscrepanciesWidgetControllerFindAll(params: TechDiscrepanciesWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechDiscrepanciesWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TechDiscrepanciesWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TechDiscrepanciesWidgetService>;
}
