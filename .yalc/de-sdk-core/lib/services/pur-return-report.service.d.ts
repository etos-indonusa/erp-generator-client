import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPurReturnReportDto } from '../models/amims-pur-return-report-dto';
import { PurReturnReportControllerFindAll$Params } from '../fn/pur-return-report/pur-return-report-controller-find-all';
import { PurReturnReportControllerFindOne$Params } from '../fn/pur-return-report/pur-return-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PurReturnReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `purReturnReportControllerFindAll()` */
    static readonly PurReturnReportControllerFindAllPath = "/amims/pur_return/pur_return_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purReturnReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purReturnReportControllerFindAll$Response(params: PurReturnReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurReturnReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purReturnReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    purReturnReportControllerFindAll(params: PurReturnReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPurReturnReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `purReturnReportControllerFindOne()` */
    static readonly PurReturnReportControllerFindOnePath = "/amims/pur_return/pur_return_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `purReturnReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    purReturnReportControllerFindOne$Response(params: PurReturnReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurReturnReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `purReturnReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    purReturnReportControllerFindOne(params: PurReturnReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPurReturnReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PurReturnReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PurReturnReportService>;
}
