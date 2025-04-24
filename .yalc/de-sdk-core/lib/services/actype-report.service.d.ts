import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ActypeReportControllerFindAll$Params } from '../fn/actype-report/actype-report-controller-find-all';
import { ActypeReportControllerFindOne$Params } from '../fn/actype-report/actype-report-controller-find-one';
import { AmimsActypeReportDto } from '../models/amims-actype-report-dto';
import * as i0 from "@angular/core";
export declare class ActypeReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `actypeReportControllerFindAll()` */
    static readonly ActypeReportControllerFindAllPath = "/amims/actype/actype_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `actypeReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    actypeReportControllerFindAll$Response(params: ActypeReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsActypeReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `actypeReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    actypeReportControllerFindAll(params: ActypeReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsActypeReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `actypeReportControllerFindOne()` */
    static readonly ActypeReportControllerFindOnePath = "/amims/actype/actype_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `actypeReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    actypeReportControllerFindOne$Response(params: ActypeReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsActypeReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `actypeReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    actypeReportControllerFindOne(params: ActypeReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsActypeReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActypeReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ActypeReportService>;
}
