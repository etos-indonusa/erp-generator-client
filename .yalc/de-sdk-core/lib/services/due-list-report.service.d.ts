import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsDueListReportDto } from '../models/amims-due-list-report-dto';
import { DueListReportControllerFindAll$Params } from '../fn/due-list-report/due-list-report-controller-find-all';
import { DueListReportControllerFindOne$Params } from '../fn/due-list-report/due-list-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class DueListReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `dueListReportControllerFindAll()` */
    static readonly DueListReportControllerFindAllPath = "/amims/due_list/due_list_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `dueListReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    dueListReportControllerFindAll$Response(params: DueListReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsDueListReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `dueListReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    dueListReportControllerFindAll(params: DueListReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsDueListReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `dueListReportControllerFindOne()` */
    static readonly DueListReportControllerFindOnePath = "/amims/due_list/due_list_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `dueListReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    dueListReportControllerFindOne$Response(params: DueListReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsDueListReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `dueListReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    dueListReportControllerFindOne(params: DueListReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsDueListReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DueListReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DueListReportService>;
}
