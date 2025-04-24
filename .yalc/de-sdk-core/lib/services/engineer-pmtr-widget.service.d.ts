import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerPmtrWidgetDto } from '../models/amims-engineer-pmtr-widget-dto';
import { EngineerPmtrWidgetControllerFindAll$Params } from '../fn/engineer-pmtr-widget/engineer-pmtr-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class EngineerPmtrWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerPmtrWidgetControllerFindAll()` */
    static readonly EngineerPmtrWidgetControllerFindAllPath = "/amims/engineer_pmtr/engineer_pmtr_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPmtrWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPmtrWidgetControllerFindAll$Response(params: EngineerPmtrWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPmtrWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPmtrWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPmtrWidgetControllerFindAll(params: EngineerPmtrWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPmtrWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerPmtrWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerPmtrWidgetService>;
}
