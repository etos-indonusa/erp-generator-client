import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTdReportDto } from '../models/amims-td-report-dto';
import { TdReportControllerFindAll$Params } from '../fn/td-report/td-report-controller-find-all';
import { TdReportControllerFindOne$Params } from '../fn/td-report/td-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class TdReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `tdReportControllerFindAll()` */
    static readonly TdReportControllerFindAllPath = "/amims/td/td_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdReportControllerFindAll$Response(params: TdReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTdReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdReportControllerFindAll(params: TdReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTdReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `tdReportControllerFindOne()` */
    static readonly TdReportControllerFindOnePath = "/amims/td/td_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdReportControllerFindOne$Response(params: TdReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdReportControllerFindOne(params: TdReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TdReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TdReportService>;
}
