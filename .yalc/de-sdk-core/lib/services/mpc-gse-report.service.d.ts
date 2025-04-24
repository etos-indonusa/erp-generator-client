import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMpcGseReportDto } from '../models/amims-mpc-gse-report-dto';
import { MpcGseReportControllerFindAll$Params } from '../fn/mpc-gse-report/mpc-gse-report-controller-find-all';
import { MpcGseReportControllerFindOne$Params } from '../fn/mpc-gse-report/mpc-gse-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class MpcGseReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `mpcGseReportControllerFindAll()` */
    static readonly MpcGseReportControllerFindAllPath = "/amims/mpc_gse/mpc_gse_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcGseReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcGseReportControllerFindAll$Response(params: MpcGseReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcGseReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcGseReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcGseReportControllerFindAll(params: MpcGseReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcGseReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `mpcGseReportControllerFindOne()` */
    static readonly MpcGseReportControllerFindOnePath = "/amims/mpc_gse/mpc_gse_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcGseReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcGseReportControllerFindOne$Response(params: MpcGseReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcGseReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcGseReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcGseReportControllerFindOne(params: MpcGseReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcGseReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MpcGseReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MpcGseReportService>;
}
