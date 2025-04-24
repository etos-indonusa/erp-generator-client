import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsQaRpdWidgetDto } from '../models/amims-qa-rpd-widget-dto';
import { QaRpdWidgetControllerFindAll$Params } from '../fn/qa-rpd-widget/qa-rpd-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class QaRpdWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `qaRpdWidgetControllerFindAll()` */
    static readonly QaRpdWidgetControllerFindAllPath = "/amims/qa_rpd/qa_rpd_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaRpdWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaRpdWidgetControllerFindAll$Response(params: QaRpdWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsQaRpdWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaRpdWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaRpdWidgetControllerFindAll(params: QaRpdWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsQaRpdWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<QaRpdWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<QaRpdWidgetService>;
}
