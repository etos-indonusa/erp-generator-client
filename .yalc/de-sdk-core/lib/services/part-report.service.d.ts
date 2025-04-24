import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartReportDto } from '../models/amims-part-report-dto';
import { PartReportControllerFindAll$Params } from '../fn/part-report/part-report-controller-find-all';
import { PartReportControllerFindOne$Params } from '../fn/part-report/part-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PartReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partReportControllerFindAll()` */
    static readonly PartReportControllerFindAllPath = "/amims/part/part_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partReportControllerFindAll$Response(params: PartReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partReportControllerFindAll(params: PartReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `partReportControllerFindOne()` */
    static readonly PartReportControllerFindOnePath = "/amims/part/part_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    partReportControllerFindOne$Response(params: PartReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partReportControllerFindOne(params: PartReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartReportService>;
}
