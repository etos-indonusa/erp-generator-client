import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsBinReportDto } from '../models/amims-bin-report-dto';
import { BinReportControllerFindAll$Params } from '../fn/bin-report/bin-report-controller-find-all';
import { BinReportControllerFindOne$Params } from '../fn/bin-report/bin-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class BinReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `binReportControllerFindAll()` */
    static readonly BinReportControllerFindAllPath = "/amims/bin/bin_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `binReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    binReportControllerFindAll$Response(params: BinReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsBinReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `binReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    binReportControllerFindAll(params: BinReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsBinReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `binReportControllerFindOne()` */
    static readonly BinReportControllerFindOnePath = "/amims/bin/bin_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `binReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    binReportControllerFindOne$Response(params: BinReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsBinReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `binReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    binReportControllerFindOne(params: BinReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsBinReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BinReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BinReportService>;
}
