import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsQaTransferItemWidgetDto } from '../models/amims-qa-transfer-item-widget-dto';
import { QaTransferItemWidgetControllerFindAll$Params } from '../fn/qa-transfer-item-widget/qa-transfer-item-widget-controller-find-all';
import * as i0 from "@angular/core";
export declare class QaTransferItemWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `qaTransferItemWidgetControllerFindAll()` */
    static readonly QaTransferItemWidgetControllerFindAllPath = "/amims/qa_transfer_item/qa_transfer_item_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `qaTransferItemWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaTransferItemWidgetControllerFindAll$Response(params: QaTransferItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsQaTransferItemWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `qaTransferItemWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    qaTransferItemWidgetControllerFindAll(params: QaTransferItemWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsQaTransferItemWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<QaTransferItemWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<QaTransferItemWidgetService>;
}
