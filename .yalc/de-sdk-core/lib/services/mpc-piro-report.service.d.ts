import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsMpcPiroReportDto } from '../models/amims-mpc-piro-report-dto';
import { MpcPiroReportControllerFindAll$Params } from '../fn/mpc-piro-report/mpc-piro-report-controller-find-all';
import { MpcPiroReportControllerFindOne$Params } from '../fn/mpc-piro-report/mpc-piro-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class MpcPiroReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `mpcPiroReportControllerFindAll()` */
    static readonly MpcPiroReportControllerFindAllPath = "/amims/mpc_piro/mpc_piro_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcPiroReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcPiroReportControllerFindAll$Response(params: MpcPiroReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcPiroReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcPiroReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    mpcPiroReportControllerFindAll(params: MpcPiroReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsMpcPiroReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `mpcPiroReportControllerFindOne()` */
    static readonly MpcPiroReportControllerFindOnePath = "/amims/mpc_piro/mpc_piro_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `mpcPiroReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcPiroReportControllerFindOne$Response(params: MpcPiroReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcPiroReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `mpcPiroReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    mpcPiroReportControllerFindOne(params: MpcPiroReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsMpcPiroReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MpcPiroReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MpcPiroReportService>;
}
