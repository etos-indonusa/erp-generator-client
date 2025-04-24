import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerPrisReturnItemWidgetDto } from '../models/amims-engineer-pris-return-item-widget-dto';
import { EngineerPrisReturnItemWidgetControllerFindAll$Params } from '../fn/engineer-pris-return-item-widget/engineer-pris-return-item-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class EngineerPrisReturnItemWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerPrisReturnItemWidgetControllerFindAll()` */
    static readonly EngineerPrisReturnItemWidgetControllerFindAllPath = "/amims/engineer_pris_return_item/engineer_pris_return_item_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisReturnItemWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisReturnItemWidgetControllerFindAll$Response(params: EngineerPrisReturnItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPrisReturnItemWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisReturnItemWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisReturnItemWidgetControllerFindAll(params: EngineerPrisReturnItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPrisReturnItemWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerPrisReturnItemWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerPrisReturnItemWidgetService>;
}
