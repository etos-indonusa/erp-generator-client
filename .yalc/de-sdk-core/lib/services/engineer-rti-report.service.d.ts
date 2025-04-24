import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerRtiReportDto } from '../models/amims-engineer-rti-report-dto';
import { EngineerRtiReportControllerFindAll$Params } from '../fn/engineer-rti-report/engineer-rti-report-controller-find-all';
import { EngineerRtiReportControllerFindOne$Params } from '../fn/engineer-rti-report/engineer-rti-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class EngineerRtiReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerRtiReportControllerFindAll()` */
    static readonly EngineerRtiReportControllerFindAllPath = "/amims/engineer_rti/engineer_rti_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerRtiReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerRtiReportControllerFindAll$Response(params: EngineerRtiReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerRtiReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerRtiReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerRtiReportControllerFindAll(params: EngineerRtiReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerRtiReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `engineerRtiReportControllerFindOne()` */
    static readonly EngineerRtiReportControllerFindOnePath = "/amims/engineer_rti/engineer_rti_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerRtiReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerRtiReportControllerFindOne$Response(params: EngineerRtiReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerRtiReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerRtiReportControllerFindOne(params: EngineerRtiReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerRtiReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerRtiReportService>;
}
