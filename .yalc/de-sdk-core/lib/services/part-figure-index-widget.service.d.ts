import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartFigureIndexWidgetDto } from '../models/amims-part-figure-index-widget-dto';
import { PartFigureIndexWidgetControllerFindAll$Params } from '../fn/part-figure-index-widget/part-figure-index-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class PartFigureIndexWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partFigureIndexWidgetControllerFindAll()` */
    static readonly PartFigureIndexWidgetControllerFindAllPath = "/amims/part_figure_index/part_figure_index_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partFigureIndexWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partFigureIndexWidgetControllerFindAll$Response(params: PartFigureIndexWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartFigureIndexWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partFigureIndexWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partFigureIndexWidgetControllerFindAll(params: PartFigureIndexWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartFigureIndexWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartFigureIndexWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartFigureIndexWidgetService>;
}
