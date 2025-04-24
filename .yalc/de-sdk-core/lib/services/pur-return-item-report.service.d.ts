import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurReturnItemReportDto } from '../models/amims-pur-return-item-report-dto';
import { PurReturnItemReportControllerFindAll$Params } from '../fn/pur-return-item-report/pur-return-item-report-controller-find-all';
import { PurReturnItemReportControllerFindOne$Params } from '../fn/pur-return-item-report/pur-return-item-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PurReturnItemReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purReturnItemReportControllerFindAll()` */
    static readonly PurReturnItemReportControllerFindAllPath = "/amims/pur_return_item/pur_return_item_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purReturnItemReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purReturnItemReportControllerFindAll$Response(params: PurReturnItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurReturnItemReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purReturnItemReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purReturnItemReportControllerFindAll(params: PurReturnItemReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurReturnItemReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `purReturnItemReportControllerFindOne()` */
    static readonly PurReturnItemReportControllerFindOnePath = "/amims/pur_return_item/pur_return_item_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purReturnItemReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    purReturnItemReportControllerFindOne$Response(params: PurReturnItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurReturnItemReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purReturnItemReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purReturnItemReportControllerFindOne(params: PurReturnItemReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurReturnItemReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurReturnItemReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurReturnItemReportService>;
}
