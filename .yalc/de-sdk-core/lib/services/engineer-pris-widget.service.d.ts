import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerPrisWidgetDto } from '../models/amims-engineer-pris-widget-dto';
import { EngineerPrisWidgetControllerFindAll$Params } from '../fn/engineer-pris-widget/engineer-pris-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class EngineerPrisWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerPrisWidgetControllerFindAll()` */
    static readonly EngineerPrisWidgetControllerFindAllPath = "/amims/engineer_pris/engineer_pris_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisWidgetControllerFindAll$Response(params: EngineerPrisWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPrisWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisWidgetControllerFindAll(params: EngineerPrisWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPrisWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerPrisWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerPrisWidgetService>;
}
