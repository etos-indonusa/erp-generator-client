import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTdDetailAcReportDto } from '../models/amims-td-detail-ac-report-dto';
import { TdDetailAcReportControllerFindAll$Params } from '../fn/td-detail-ac-report/td-detail-ac-report-controller-find-all';
import { TdDetailAcReportControllerFindOne$Params } from '../fn/td-detail-ac-report/td-detail-ac-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class TdDetailAcReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `tdDetailAcReportControllerFindAll()` */
    static readonly TdDetailAcReportControllerFindAllPath = "/amims/td_detail_ac/td_detail_ac_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdDetailAcReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdDetailAcReportControllerFindAll$Response(params: TdDetailAcReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTdDetailAcReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdDetailAcReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdDetailAcReportControllerFindAll(params: TdDetailAcReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTdDetailAcReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `tdDetailAcReportControllerFindOne()` */
    static readonly TdDetailAcReportControllerFindOnePath = "/amims/td_detail_ac/td_detail_ac_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdDetailAcReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdDetailAcReportControllerFindOne$Response(params: TdDetailAcReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdDetailAcReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdDetailAcReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdDetailAcReportControllerFindOne(params: TdDetailAcReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdDetailAcReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TdDetailAcReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TdDetailAcReportService>;
}
