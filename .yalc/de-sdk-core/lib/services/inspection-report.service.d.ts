import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsInspectionReportDto } from '../models/amims-inspection-report-dto';
import { InspectionReportControllerFindAll$Params } from '../fn/inspection-report/inspection-report-controller-find-all';
import { InspectionReportControllerFindOne$Params } from '../fn/inspection-report/inspection-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class InspectionReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `inspectionReportControllerFindAll()` */
    static readonly InspectionReportControllerFindAllPath = "/amims/inspection/inspection_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `inspectionReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    inspectionReportControllerFindAll$Response(params: InspectionReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsInspectionReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `inspectionReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    inspectionReportControllerFindAll(params: InspectionReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsInspectionReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `inspectionReportControllerFindOne()` */
    static readonly InspectionReportControllerFindOnePath = "/amims/inspection/inspection_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `inspectionReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    inspectionReportControllerFindOne$Response(params: InspectionReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsInspectionReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `inspectionReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    inspectionReportControllerFindOne(params: InspectionReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsInspectionReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<InspectionReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InspectionReportService>;
}
