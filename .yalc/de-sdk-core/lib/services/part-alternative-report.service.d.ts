import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartAlternativeReportDto } from '../models/amims-part-alternative-report-dto';
import { PartAlternativeReportControllerFindAll$Params } from '../fn/part-alternative-report/part-alternative-report-controller-find-all';
import { PartAlternativeReportControllerFindOne$Params } from '../fn/part-alternative-report/part-alternative-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PartAlternativeReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partAlternativeReportControllerFindAll()` */
    static readonly PartAlternativeReportControllerFindAllPath = "/amims/part_alternative/part_alternative_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partAlternativeReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partAlternativeReportControllerFindAll$Response(params: PartAlternativeReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartAlternativeReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partAlternativeReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partAlternativeReportControllerFindAll(params: PartAlternativeReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartAlternativeReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `partAlternativeReportControllerFindOne()` */
    static readonly PartAlternativeReportControllerFindOnePath = "/amims/part_alternative/part_alternative_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partAlternativeReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    partAlternativeReportControllerFindOne$Response(params: PartAlternativeReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartAlternativeReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partAlternativeReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partAlternativeReportControllerFindOne(params: PartAlternativeReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartAlternativeReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartAlternativeReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartAlternativeReportService>;
}
