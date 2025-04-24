import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsDueListOutputReportDto } from '../models/amims-due-list-output-report-dto';
import { DueListOutputReportControllerFindAll$Params } from '../fn/due-list-output-report/due-list-output-report-controller-find-all';
import { DueListOutputReportControllerFindOne$Params } from '../fn/due-list-output-report/due-list-output-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class DueListOutputReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `dueListOutputReportControllerFindAll()` */
    static readonly DueListOutputReportControllerFindAllPath = "/amims/due_list_output/due_list_output_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `dueListOutputReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    dueListOutputReportControllerFindAll$Response(params: DueListOutputReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsDueListOutputReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `dueListOutputReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    dueListOutputReportControllerFindAll(params: DueListOutputReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsDueListOutputReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `dueListOutputReportControllerFindOne()` */
    static readonly DueListOutputReportControllerFindOnePath = "/amims/due_list_output/due_list_output_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `dueListOutputReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    dueListOutputReportControllerFindOne$Response(params: DueListOutputReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsDueListOutputReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `dueListOutputReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    dueListOutputReportControllerFindOne(params: DueListOutputReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsDueListOutputReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DueListOutputReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DueListOutputReportService>;
}
