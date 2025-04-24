import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMpcJoReportDto } from '../models/amims-mpc-jo-report-dto';
import { MpcJoReportControllerFindAll$Params } from '../fn/mpc-jo-report/mpc-jo-report-controller-find-all';
import { MpcJoReportControllerFindOne$Params } from '../fn/mpc-jo-report/mpc-jo-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class MpcJoReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `mpcJoReportControllerFindAll()` */
    static readonly MpcJoReportControllerFindAllPath = "/amims/mpc_jo/mpc_jo_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcJoReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcJoReportControllerFindAll$Response(params: MpcJoReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcJoReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcJoReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcJoReportControllerFindAll(params: MpcJoReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcJoReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `mpcJoReportControllerFindOne()` */
    static readonly MpcJoReportControllerFindOnePath = "/amims/mpc_jo/mpc_jo_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcJoReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcJoReportControllerFindOne$Response(params: MpcJoReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcJoReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcJoReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcJoReportControllerFindOne(params: MpcJoReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcJoReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MpcJoReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MpcJoReportService>;
}
