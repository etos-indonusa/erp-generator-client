import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsDueListOutputWidgetDto } from '../models/amims-due-list-output-widget-dto';
import { DueListOutputWidgetControllerFindAll$Params } from '../fn/due-list-output-widget/due-list-output-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class DueListOutputWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `dueListOutputWidgetControllerFindAll()` */
    static readonly DueListOutputWidgetControllerFindAllPath = "/amims/due_list_output/due_list_output_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `dueListOutputWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    dueListOutputWidgetControllerFindAll$Response(params: DueListOutputWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsDueListOutputWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `dueListOutputWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    dueListOutputWidgetControllerFindAll(params: DueListOutputWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsDueListOutputWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DueListOutputWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DueListOutputWidgetService>;
}
