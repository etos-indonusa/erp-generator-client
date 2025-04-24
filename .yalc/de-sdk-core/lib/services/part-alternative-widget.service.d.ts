import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartAlternativeWidgetDto } from '../models/amims-part-alternative-widget-dto';
import { PartAlternativeWidgetControllerFindAll$Params } from '../fn/part-alternative-widget/part-alternative-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class PartAlternativeWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partAlternativeWidgetControllerFindAll()` */
    static readonly PartAlternativeWidgetControllerFindAllPath = "/amims/part_alternative/part_alternative_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partAlternativeWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partAlternativeWidgetControllerFindAll$Response(params: PartAlternativeWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartAlternativeWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partAlternativeWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partAlternativeWidgetControllerFindAll(params: PartAlternativeWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartAlternativeWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartAlternativeWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartAlternativeWidgetService>;
}
