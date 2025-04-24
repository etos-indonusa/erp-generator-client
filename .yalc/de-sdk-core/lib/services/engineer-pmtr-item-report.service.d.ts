import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerPmtrItemReportDto } from '../models/amims-engineer-pmtr-item-report-dto';
import { EngineerPmtrItemReportControllerFindAll$Params } from '../fn/engineer-pmtr-item-report/engineer-pmtr-item-report-controller-find-all';
import { EngineerPmtrItemReportControllerFindOne$Params } from '../fn/engineer-pmtr-item-report/engineer-pmtr-item-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class EngineerPmtrItemReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerPmtrItemReportControllerFindAll()` */
    static readonly EngineerPmtrItemReportControllerFindAllPath = "/amims/engineer_pmtr_item/engineer_pmtr_item_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPmtrItemReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPmtrItemReportControllerFindAll$Response(params: EngineerPmtrItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPmtrItemReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPmtrItemReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPmtrItemReportControllerFindAll(params: EngineerPmtrItemReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPmtrItemReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `engineerPmtrItemReportControllerFindOne()` */
    static readonly EngineerPmtrItemReportControllerFindOnePath = "/amims/engineer_pmtr_item/engineer_pmtr_item_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPmtrItemReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPmtrItemReportControllerFindOne$Response(params: EngineerPmtrItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPmtrItemReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPmtrItemReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPmtrItemReportControllerFindOne(params: EngineerPmtrItemReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPmtrItemReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerPmtrItemReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerPmtrItemReportService>;
}
