import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsQaTransferItemReportDto } from '../models/amims-qa-transfer-item-report-dto';
import { QaTransferItemReportControllerFindAll$Params } from '../fn/qa-transfer-item-report/qa-transfer-item-report-controller-find-all';
import { QaTransferItemReportControllerFindOne$Params } from '../fn/qa-transfer-item-report/qa-transfer-item-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class QaTransferItemReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `qaTransferItemReportControllerFindAll()` */
    static readonly QaTransferItemReportControllerFindAllPath = "/amims/qa_transfer_item/qa_transfer_item_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaTransferItemReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaTransferItemReportControllerFindAll$Response(params: QaTransferItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsQaTransferItemReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaTransferItemReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaTransferItemReportControllerFindAll(params: QaTransferItemReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsQaTransferItemReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `qaTransferItemReportControllerFindOne()` */
    static readonly QaTransferItemReportControllerFindOnePath = "/amims/qa_transfer_item/qa_transfer_item_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaTransferItemReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaTransferItemReportControllerFindOne$Response(params: QaTransferItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaTransferItemReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaTransferItemReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    qaTransferItemReportControllerFindOne(params: QaTransferItemReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsQaTransferItemReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<QaTransferItemReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<QaTransferItemReportService>;
}
