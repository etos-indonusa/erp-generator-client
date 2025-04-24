import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsQaTransferWidgetDto } from '../models/amims-qa-transfer-widget-dto';
import { QaTransferWidgetControllerFindAll$Params } from '../fn/qa-transfer-widget/qa-transfer-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class QaTransferWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `qaTransferWidgetControllerFindAll()` */
    static readonly QaTransferWidgetControllerFindAllPath = "/amims/qa_transfer/qa_transfer_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaTransferWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaTransferWidgetControllerFindAll$Response(params: QaTransferWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsQaTransferWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaTransferWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaTransferWidgetControllerFindAll(params: QaTransferWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsQaTransferWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<QaTransferWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<QaTransferWidgetService>;
}
