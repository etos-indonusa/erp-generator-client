import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTdDetailReportDto } from '../models/amims-td-detail-report-dto';
import { TdDetailReportControllerFindAll$Params } from '../fn/td-detail-report/td-detail-report-controller-find-all';
import { TdDetailReportControllerFindOne$Params } from '../fn/td-detail-report/td-detail-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class TdDetailReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `tdDetailReportControllerFindAll()` */
    static readonly TdDetailReportControllerFindAllPath = "/amims/td_detail/td_detail_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdDetailReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdDetailReportControllerFindAll$Response(params: TdDetailReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTdDetailReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdDetailReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdDetailReportControllerFindAll(params: TdDetailReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTdDetailReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `tdDetailReportControllerFindOne()` */
    static readonly TdDetailReportControllerFindOnePath = "/amims/td_detail/td_detail_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdDetailReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdDetailReportControllerFindOne$Response(params: TdDetailReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdDetailReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdDetailReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdDetailReportControllerFindOne(params: TdDetailReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdDetailReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TdDetailReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TdDetailReportService>;
}
