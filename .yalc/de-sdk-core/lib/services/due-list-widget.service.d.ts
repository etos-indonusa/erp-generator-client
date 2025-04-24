import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsDueListWidgetDto } from '../models/amims-due-list-widget-dto';
import { DueListWidgetControllerFindAll$Params } from '../fn/due-list-widget/due-list-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class DueListWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `dueListWidgetControllerFindAll()` */
    static readonly DueListWidgetControllerFindAllPath = "/amims/due_list/due_list_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `dueListWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    dueListWidgetControllerFindAll$Response(params: DueListWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsDueListWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `dueListWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    dueListWidgetControllerFindAll(params: DueListWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsDueListWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DueListWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DueListWidgetService>;
}
