import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartConditionReportDto } from '../models/amims-part-condition-report-dto';
import { PartConditionReportControllerFindAll$Params } from '../fn/part-condition-report/part-condition-report-controller-find-all';
import { PartConditionReportControllerFindOne$Params } from '../fn/part-condition-report/part-condition-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PartConditionReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partConditionReportControllerFindAll()` */
    static readonly PartConditionReportControllerFindAllPath = "/amims/part_condition/part_condition_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partConditionReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partConditionReportControllerFindAll$Response(params: PartConditionReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartConditionReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partConditionReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partConditionReportControllerFindAll(params: PartConditionReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartConditionReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `partConditionReportControllerFindOne()` */
    static readonly PartConditionReportControllerFindOnePath = "/amims/part_condition/part_condition_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partConditionReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    partConditionReportControllerFindOne$Response(params: PartConditionReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartConditionReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partConditionReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partConditionReportControllerFindOne(params: PartConditionReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartConditionReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartConditionReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartConditionReportService>;
}
