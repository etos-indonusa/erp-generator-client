import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerPmtrReportDto } from '../models/amims-engineer-pmtr-report-dto';
import { EngineerPmtrReportControllerFindAll$Params } from '../fn/engineer-pmtr-report/engineer-pmtr-report-controller-find-all';
import { EngineerPmtrReportControllerFindOne$Params } from '../fn/engineer-pmtr-report/engineer-pmtr-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class EngineerPmtrReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerPmtrReportControllerFindAll()` */
    static readonly EngineerPmtrReportControllerFindAllPath = "/amims/engineer_pmtr/engineer_pmtr_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPmtrReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPmtrReportControllerFindAll$Response(params: EngineerPmtrReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPmtrReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPmtrReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPmtrReportControllerFindAll(params: EngineerPmtrReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPmtrReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `engineerPmtrReportControllerFindOne()` */
    static readonly EngineerPmtrReportControllerFindOnePath = "/amims/engineer_pmtr/engineer_pmtr_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPmtrReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPmtrReportControllerFindOne$Response(params: EngineerPmtrReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPmtrReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPmtrReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPmtrReportControllerFindOne(params: EngineerPmtrReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPmtrReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerPmtrReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerPmtrReportService>;
}
