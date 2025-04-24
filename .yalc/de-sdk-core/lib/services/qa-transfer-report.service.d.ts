import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsQaTransferReportDto } from '../models/amims-qa-transfer-report-dto';
import { QaTransferReportControllerFindAll$Params } from '../fn/qa-transfer-report/qa-transfer-report-controller-find-all';
import { QaTransferReportControllerFindOne$Params } from '../fn/qa-transfer-report/qa-transfer-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class QaTransferReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `qaTransferReportControllerFindAll()` */
    static readonly QaTransferReportControllerFindAllPath = "/amims/qa_transfer/qa_transfer_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaTransferReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaTransferReportControllerFindAll$Response(params: QaTransferReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsQaTransferReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaTransferReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaTransferReportControllerFindAll(params: QaTransferReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsQaTransferReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `qaTransferReportControllerFindOne()` */
    static readonly QaTransferReportControllerFindOnePath = "/amims/qa_transfer/qa_transfer_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaTransferReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaTransferReportControllerFindOne$Response(params: QaTransferReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaTransferReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaTransferReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaTransferReportControllerFindOne(params: QaTransferReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaTransferReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<QaTransferReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<QaTransferReportService>;
}
