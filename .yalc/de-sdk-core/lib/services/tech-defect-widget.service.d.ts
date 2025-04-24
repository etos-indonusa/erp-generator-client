import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTechDefectWidgetDto } from '../models/amims-tech-defect-widget-dto';
import { TechDefectWidgetControllerFindAll$Params } from '../fn/tech-defect-widget/tech-defect-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class TechDefectWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `techDefectWidgetControllerFindAll()` */
    static readonly TechDefectWidgetControllerFindAllPath = "/amims/tech_defect/tech_defect_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techDefectWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techDefectWidgetControllerFindAll$Response(params: TechDefectWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechDefectWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techDefectWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techDefectWidgetControllerFindAll(params: TechDefectWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechDefectWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TechDefectWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TechDefectWidgetService>;
}
