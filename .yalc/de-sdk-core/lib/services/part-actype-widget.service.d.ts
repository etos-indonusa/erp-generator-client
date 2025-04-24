import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartActypeWidgetDto } from '../models/amims-part-actype-widget-dto';
import { PartActypeWidgetControllerFindAll$Params } from '../fn/part-actype-widget/part-actype-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class PartActypeWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partActypeWidgetControllerFindAll()` */
    static readonly PartActypeWidgetControllerFindAllPath = "/amims/part_actype/part_actype_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partActypeWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partActypeWidgetControllerFindAll$Response(params: PartActypeWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartActypeWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partActypeWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partActypeWidgetControllerFindAll(params: PartActypeWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartActypeWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartActypeWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartActypeWidgetService>;
}
