import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsQaRpdReportDto } from '../models/amims-qa-rpd-report-dto';
import { QaRpdReportControllerFindAll$Params } from '../fn/qa-rpd-report/qa-rpd-report-controller-find-all';
import { QaRpdReportControllerFindOne$Params } from '../fn/qa-rpd-report/qa-rpd-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class QaRpdReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `qaRpdReportControllerFindAll()` */
    static readonly QaRpdReportControllerFindAllPath = "/amims/qa_rpd/qa_rpd_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaRpdReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaRpdReportControllerFindAll$Response(params: QaRpdReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsQaRpdReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaRpdReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaRpdReportControllerFindAll(params: QaRpdReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsQaRpdReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `qaRpdReportControllerFindOne()` */
    static readonly QaRpdReportControllerFindOnePath = "/amims/qa_rpd/qa_rpd_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaRpdReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaRpdReportControllerFindOne$Response(params: QaRpdReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaRpdReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaRpdReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaRpdReportControllerFindOne(params: QaRpdReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaRpdReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<QaRpdReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<QaRpdReportService>;
}
