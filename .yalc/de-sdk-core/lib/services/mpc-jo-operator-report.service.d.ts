import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMpcJoOperatorReportDto } from '../models/amims-mpc-jo-operator-report-dto';
import { MpcJoOperatorReportControllerFindAll$Params } from '../fn/mpc-jo-operator-report/mpc-jo-operator-report-controller-find-all';
import { MpcJoOperatorReportControllerFindOne$Params } from '../fn/mpc-jo-operator-report/mpc-jo-operator-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class MpcJoOperatorReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `mpcJoOperatorReportControllerFindAll()` */
    static readonly MpcJoOperatorReportControllerFindAllPath = "/amims/mpc_jo_operator/mpc_jo_operator_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcJoOperatorReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcJoOperatorReportControllerFindAll$Response(params: MpcJoOperatorReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcJoOperatorReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcJoOperatorReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcJoOperatorReportControllerFindAll(params: MpcJoOperatorReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcJoOperatorReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `mpcJoOperatorReportControllerFindOne()` */
    static readonly MpcJoOperatorReportControllerFindOnePath = "/amims/mpc_jo_operator/mpc_jo_operator_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcJoOperatorReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcJoOperatorReportControllerFindOne$Response(params: MpcJoOperatorReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcJoOperatorReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcJoOperatorReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcJoOperatorReportControllerFindOne(params: MpcJoOperatorReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcJoOperatorReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MpcJoOperatorReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MpcJoOperatorReportService>;
}
