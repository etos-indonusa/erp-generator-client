import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsInternalGrnReportDto } from '../models/amims-internal-grn-report-dto';
import { InternalGrnReportControllerFindAll$Params } from '../fn/internal-grn-report/internal-grn-report-controller-find-all';
import { InternalGrnReportControllerFindOne$Params } from '../fn/internal-grn-report/internal-grn-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class InternalGrnReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `internalGrnReportControllerFindAll()` */
    static readonly InternalGrnReportControllerFindAllPath = "/amims/internal_grn/internal_grn_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `internalGrnReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    internalGrnReportControllerFindAll$Response(params: InternalGrnReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsInternalGrnReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `internalGrnReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    internalGrnReportControllerFindAll(params: InternalGrnReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsInternalGrnReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `internalGrnReportControllerFindOne()` */
    static readonly InternalGrnReportControllerFindOnePath = "/amims/internal_grn/internal_grn_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `internalGrnReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    internalGrnReportControllerFindOne$Response(params: InternalGrnReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsInternalGrnReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `internalGrnReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    internalGrnReportControllerFindOne(params: InternalGrnReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsInternalGrnReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<InternalGrnReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InternalGrnReportService>;
}
