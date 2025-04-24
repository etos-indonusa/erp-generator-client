import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerPrisReturnReportDto } from '../models/amims-engineer-pris-return-report-dto';
import { EngineerPrisReturnReportControllerFindAll$Params } from '../fn/engineer-pris-return-report/engineer-pris-return-report-controller-find-all';
import { EngineerPrisReturnReportControllerFindOne$Params } from '../fn/engineer-pris-return-report/engineer-pris-return-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class EngineerPrisReturnReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerPrisReturnReportControllerFindAll()` */
    static readonly EngineerPrisReturnReportControllerFindAllPath = "/amims/engineer_pris_return/engineer_pris_return_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisReturnReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisReturnReportControllerFindAll$Response(params: EngineerPrisReturnReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPrisReturnReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisReturnReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisReturnReportControllerFindAll(params: EngineerPrisReturnReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPrisReturnReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `engineerPrisReturnReportControllerFindOne()` */
    static readonly EngineerPrisReturnReportControllerFindOnePath = "/amims/engineer_pris_return/engineer_pris_return_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisReturnReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisReturnReportControllerFindOne$Response(params: EngineerPrisReturnReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisReturnReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisReturnReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisReturnReportControllerFindOne(params: EngineerPrisReturnReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisReturnReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerPrisReturnReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerPrisReturnReportService>;
}
