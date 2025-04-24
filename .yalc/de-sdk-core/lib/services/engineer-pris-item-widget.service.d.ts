import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerPrisItemWidgetDto } from '../models/amims-engineer-pris-item-widget-dto';
import { EngineerPrisItemWidgetControllerFindAll$Params } from '../fn/engineer-pris-item-widget/engineer-pris-item-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class EngineerPrisItemWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerPrisItemWidgetControllerFindAll()` */
    static readonly EngineerPrisItemWidgetControllerFindAllPath = "/amims/engineer_pris_item/engineer_pris_item_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisItemWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisItemWidgetControllerFindAll$Response(params: EngineerPrisItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPrisItemWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisItemWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisItemWidgetControllerFindAll(params: EngineerPrisItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPrisItemWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerPrisItemWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerPrisItemWidgetService>;
}
