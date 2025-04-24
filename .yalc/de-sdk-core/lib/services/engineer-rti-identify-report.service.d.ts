import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerRtiIdentifyReportDto } from '../models/amims-engineer-rti-identify-report-dto';
import { EngineerRtiIdentifyReportControllerFindAll$Params } from '../fn/engineer-rti-identify-report/engineer-rti-identify-report-controller-find-all';
import { EngineerRtiIdentifyReportControllerFindOne$Params } from '../fn/engineer-rti-identify-report/engineer-rti-identify-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class EngineerRtiIdentifyReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerRtiIdentifyReportControllerFindAll()` */
    static readonly EngineerRtiIdentifyReportControllerFindAllPath = "/amims/engineer_rti_identify/engineer_rti_identify_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerRtiIdentifyReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerRtiIdentifyReportControllerFindAll$Response(params: EngineerRtiIdentifyReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerRtiIdentifyReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerRtiIdentifyReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerRtiIdentifyReportControllerFindAll(params: EngineerRtiIdentifyReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerRtiIdentifyReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `engineerRtiIdentifyReportControllerFindOne()` */
    static readonly EngineerRtiIdentifyReportControllerFindOnePath = "/amims/engineer_rti_identify/engineer_rti_identify_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerRtiIdentifyReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerRtiIdentifyReportControllerFindOne$Response(params: EngineerRtiIdentifyReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiIdentifyReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerRtiIdentifyReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerRtiIdentifyReportControllerFindOne(params: EngineerRtiIdentifyReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiIdentifyReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerRtiIdentifyReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerRtiIdentifyReportService>;
}
