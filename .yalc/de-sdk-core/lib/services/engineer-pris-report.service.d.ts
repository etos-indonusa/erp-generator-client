import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerPrisReportDto } from '../models/amims-engineer-pris-report-dto';
import { EngineerPrisReportControllerFindAll$Params } from '../fn/engineer-pris-report/engineer-pris-report-controller-find-all';
import { EngineerPrisReportControllerFindOne$Params } from '../fn/engineer-pris-report/engineer-pris-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class EngineerPrisReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerPrisReportControllerFindAll()` */
    static readonly EngineerPrisReportControllerFindAllPath = "/amims/engineer_pris/engineer_pris_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisReportControllerFindAll$Response(params: EngineerPrisReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPrisReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisReportControllerFindAll(params: EngineerPrisReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPrisReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `engineerPrisReportControllerFindOne()` */
    static readonly EngineerPrisReportControllerFindOnePath = "/amims/engineer_pris/engineer_pris_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisReportControllerFindOne$Response(params: EngineerPrisReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisReportControllerFindOne(params: EngineerPrisReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerPrisReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerPrisReportService>;
}
