import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartidReportDto } from '../models/amims-partid-report-dto';
import { PartidReportControllerFindAll$Params } from '../fn/partid-report/partid-report-controller-find-all';
import { PartidReportControllerFindOne$Params } from '../fn/partid-report/partid-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PartidReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partidReportControllerFindAll()` */
    static readonly PartidReportControllerFindAllPath = "/amims/partid/partid_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partidReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partidReportControllerFindAll$Response(params: PartidReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartidReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partidReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partidReportControllerFindAll(params: PartidReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartidReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `partidReportControllerFindOne()` */
    static readonly PartidReportControllerFindOnePath = "/amims/partid/partid_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partidReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    partidReportControllerFindOne$Response(params: PartidReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartidReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partidReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partidReportControllerFindOne(params: PartidReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartidReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartidReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartidReportService>;
}
