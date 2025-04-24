import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsQaRpdDispotitionReportDto } from '../models/amims-qa-rpd-dispotition-report-dto';
import { QaRpdDispotitionReportControllerFindAll$Params } from '../fn/qa-rpd-dispotition-report/qa-rpd-dispotition-report-controller-find-all';
import { QaRpdDispotitionReportControllerFindOne$Params } from '../fn/qa-rpd-dispotition-report/qa-rpd-dispotition-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class QaRpdDispotitionReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `qaRpdDispotitionReportControllerFindAll()` */
    static readonly QaRpdDispotitionReportControllerFindAllPath = "/amims/qa_rpd_dispotition/qa_rpd_dispotition_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaRpdDispotitionReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaRpdDispotitionReportControllerFindAll$Response(params: QaRpdDispotitionReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsQaRpdDispotitionReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaRpdDispotitionReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaRpdDispotitionReportControllerFindAll(params: QaRpdDispotitionReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsQaRpdDispotitionReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `qaRpdDispotitionReportControllerFindOne()` */
    static readonly QaRpdDispotitionReportControllerFindOnePath = "/amims/qa_rpd_dispotition/qa_rpd_dispotition_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaRpdDispotitionReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaRpdDispotitionReportControllerFindOne$Response(params: QaRpdDispotitionReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaRpdDispotitionReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaRpdDispotitionReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaRpdDispotitionReportControllerFindOne(params: QaRpdDispotitionReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaRpdDispotitionReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<QaRpdDispotitionReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<QaRpdDispotitionReportService>;
}
