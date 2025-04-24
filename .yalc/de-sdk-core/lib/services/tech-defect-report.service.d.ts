import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTechDefectReportDto } from '../models/amims-tech-defect-report-dto';
import { TechDefectReportControllerFindAll$Params } from '../fn/tech-defect-report/tech-defect-report-controller-find-all';
import { TechDefectReportControllerFindOne$Params } from '../fn/tech-defect-report/tech-defect-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class TechDefectReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `techDefectReportControllerFindAll()` */
    static readonly TechDefectReportControllerFindAllPath = "/amims/tech_defect/tech_defect_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techDefectReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techDefectReportControllerFindAll$Response(params: TechDefectReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechDefectReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techDefectReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techDefectReportControllerFindAll(params: TechDefectReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechDefectReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `techDefectReportControllerFindOne()` */
    static readonly TechDefectReportControllerFindOnePath = "/amims/tech_defect/tech_defect_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techDefectReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    techDefectReportControllerFindOne$Response(params: TechDefectReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechDefectReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techDefectReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techDefectReportControllerFindOne(params: TechDefectReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechDefectReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TechDefectReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TechDefectReportService>;
}
