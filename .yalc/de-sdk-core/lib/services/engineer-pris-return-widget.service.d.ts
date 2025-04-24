import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerPrisReturnWidgetDto } from '../models/amims-engineer-pris-return-widget-dto';
import { EngineerPrisReturnWidgetControllerFindAll$Params } from '../fn/engineer-pris-return-widget/engineer-pris-return-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class EngineerPrisReturnWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerPrisReturnWidgetControllerFindAll()` */
    static readonly EngineerPrisReturnWidgetControllerFindAllPath = "/amims/engineer_pris_return/engineer_pris_return_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisReturnWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisReturnWidgetControllerFindAll$Response(params: EngineerPrisReturnWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPrisReturnWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisReturnWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisReturnWidgetControllerFindAll(params: EngineerPrisReturnWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPrisReturnWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerPrisReturnWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerPrisReturnWidgetService>;
}
