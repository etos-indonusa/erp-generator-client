import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMpcWpReportDto } from '../models/amims-mpc-wp-report-dto';
import { MpcWpReportControllerFindAll$Params } from '../fn/mpc-wp-report/mpc-wp-report-controller-find-all';
import { MpcWpReportControllerFindOne$Params } from '../fn/mpc-wp-report/mpc-wp-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class MpcWpReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `mpcWpReportControllerFindAll()` */
    static readonly MpcWpReportControllerFindAllPath = "/amims/mpc_wp/mpc_wp_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcWpReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcWpReportControllerFindAll$Response(params: MpcWpReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcWpReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcWpReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcWpReportControllerFindAll(params: MpcWpReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcWpReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `mpcWpReportControllerFindOne()` */
    static readonly MpcWpReportControllerFindOnePath = "/amims/mpc_wp/mpc_wp_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcWpReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcWpReportControllerFindOne$Response(params: MpcWpReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcWpReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcWpReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcWpReportControllerFindOne(params: MpcWpReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcWpReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MpcWpReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MpcWpReportService>;
}
