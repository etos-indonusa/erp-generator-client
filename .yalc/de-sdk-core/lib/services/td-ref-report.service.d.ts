import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTdRefReportDto } from '../models/amims-td-ref-report-dto';
import { TdRefReportControllerFindAll$Params } from '../fn/td-ref-report/td-ref-report-controller-find-all';
import { TdRefReportControllerFindOne$Params } from '../fn/td-ref-report/td-ref-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class TdRefReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `tdRefReportControllerFindAll()` */
    static readonly TdRefReportControllerFindAllPath = "/amims/td_ref/td_ref_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdRefReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdRefReportControllerFindAll$Response(params: TdRefReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTdRefReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdRefReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdRefReportControllerFindAll(params: TdRefReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTdRefReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `tdRefReportControllerFindOne()` */
    static readonly TdRefReportControllerFindOnePath = "/amims/td_ref/td_ref_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdRefReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdRefReportControllerFindOne$Response(params: TdRefReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdRefReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdRefReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdRefReportControllerFindOne(params: TdRefReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdRefReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TdRefReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TdRefReportService>;
}
