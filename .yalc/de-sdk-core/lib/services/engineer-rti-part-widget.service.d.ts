import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerRtiPartWidgetDto } from '../models/amims-engineer-rti-part-widget-dto';
import { EngineerRtiPartWidgetControllerFindAll$Params } from '../fn/engineer-rti-part-widget/engineer-rti-part-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class EngineerRtiPartWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerRtiPartWidgetControllerFindAll()` */
    static readonly EngineerRtiPartWidgetControllerFindAllPath = "/amims/engineer_rti_part/engineer_rti_part_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerRtiPartWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerRtiPartWidgetControllerFindAll$Response(params: EngineerRtiPartWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerRtiPartWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerRtiPartWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerRtiPartWidgetControllerFindAll(params: EngineerRtiPartWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerRtiPartWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerRtiPartWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerRtiPartWidgetService>;
}
