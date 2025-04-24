import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMpartReportDto } from '../models/amims-mpart-report-dto';
import { MpartReportControllerFindAll$Params } from '../fn/mpart-report/mpart-report-controller-find-all';
import { MpartReportControllerFindOne$Params } from '../fn/mpart-report/mpart-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class MpartReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `mpartReportControllerFindAll()` */
    static readonly MpartReportControllerFindAllPath = "/amims/mpart/mpart_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpartReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpartReportControllerFindAll$Response(params: MpartReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpartReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpartReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpartReportControllerFindAll(params: MpartReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpartReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `mpartReportControllerFindOne()` */
    static readonly MpartReportControllerFindOnePath = "/amims/mpart/mpart_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpartReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpartReportControllerFindOne$Response(params: MpartReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpartReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpartReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpartReportControllerFindOne(params: MpartReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpartReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MpartReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MpartReportService>;
}
