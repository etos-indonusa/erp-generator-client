import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsSiteReportDto } from '../models/amims-site-report-dto';
import { SiteReportControllerFindAll$Params } from '../fn/site-report/site-report-controller-find-all';
import { SiteReportControllerFindOne$Params } from '../fn/site-report/site-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class SiteReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `siteReportControllerFindAll()` */
    static readonly SiteReportControllerFindAllPath = "/amims/site/site_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `siteReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    siteReportControllerFindAll$Response(params: SiteReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsSiteReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `siteReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    siteReportControllerFindAll(params: SiteReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsSiteReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `siteReportControllerFindOne()` */
    static readonly SiteReportControllerFindOnePath = "/amims/site/site_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `siteReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    siteReportControllerFindOne$Response(params: SiteReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsSiteReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `siteReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    siteReportControllerFindOne(params: SiteReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsSiteReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SiteReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SiteReportService>;
}
