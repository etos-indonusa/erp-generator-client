import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsQaRpdDispotitionWidgetDto } from '../models/amims-qa-rpd-dispotition-widget-dto';
import { QaRpdDispotitionWidgetControllerFindAll$Params } from '../fn/qa-rpd-dispotition-widget/qa-rpd-dispotition-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class QaRpdDispotitionWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `qaRpdDispotitionWidgetControllerFindAll()` */
    static readonly QaRpdDispotitionWidgetControllerFindAllPath = "/amims/qa_rpd_dispotition/qa_rpd_dispotition_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaRpdDispotitionWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaRpdDispotitionWidgetControllerFindAll$Response(params: QaRpdDispotitionWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsQaRpdDispotitionWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaRpdDispotitionWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaRpdDispotitionWidgetControllerFindAll(params: QaRpdDispotitionWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsQaRpdDispotitionWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<QaRpdDispotitionWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<QaRpdDispotitionWidgetService>;
}
