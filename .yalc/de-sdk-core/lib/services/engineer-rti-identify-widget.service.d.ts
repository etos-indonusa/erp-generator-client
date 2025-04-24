import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerRtiIdentifyWidgetDto } from '../models/amims-engineer-rti-identify-widget-dto';
import { EngineerRtiIdentifyWidgetControllerFindAll$Params } from '../fn/engineer-rti-identify-widget/engineer-rti-identify-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class EngineerRtiIdentifyWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerRtiIdentifyWidgetControllerFindAll()` */
    static readonly EngineerRtiIdentifyWidgetControllerFindAllPath = "/amims/engineer_rti_identify/engineer_rti_identify_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerRtiIdentifyWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerRtiIdentifyWidgetControllerFindAll$Response(params: EngineerRtiIdentifyWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerRtiIdentifyWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerRtiIdentifyWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerRtiIdentifyWidgetControllerFindAll(params: EngineerRtiIdentifyWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerRtiIdentifyWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerRtiIdentifyWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerRtiIdentifyWidgetService>;
}
