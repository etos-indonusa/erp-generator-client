import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerRtiPartReportDto } from '../models/amims-engineer-rti-part-report-dto';
import { EngineerRtiPartReportControllerFindAll$Params } from '../fn/engineer-rti-part-report/engineer-rti-part-report-controller-find-all';
import { EngineerRtiPartReportControllerFindOne$Params } from '../fn/engineer-rti-part-report/engineer-rti-part-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class EngineerRtiPartReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerRtiPartReportControllerFindAll()` */
    static readonly EngineerRtiPartReportControllerFindAllPath = "/amims/engineer_rti_part/engineer_rti_part_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerRtiPartReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerRtiPartReportControllerFindAll$Response(params: EngineerRtiPartReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerRtiPartReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerRtiPartReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerRtiPartReportControllerFindAll(params: EngineerRtiPartReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerRtiPartReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `engineerRtiPartReportControllerFindOne()` */
    static readonly EngineerRtiPartReportControllerFindOnePath = "/amims/engineer_rti_part/engineer_rti_part_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerRtiPartReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerRtiPartReportControllerFindOne$Response(params: EngineerRtiPartReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiPartReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerRtiPartReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerRtiPartReportControllerFindOne(params: EngineerRtiPartReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerRtiPartReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerRtiPartReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerRtiPartReportService>;
}
