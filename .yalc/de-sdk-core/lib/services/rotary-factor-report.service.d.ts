import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsRotaryFactorReportDto } from '../models/amims-rotary-factor-report-dto';
import { RotaryFactorReportControllerFindAll$Params } from '../fn/rotary-factor-report/rotary-factor-report-controller-find-all';
import { RotaryFactorReportControllerFindOne$Params } from '../fn/rotary-factor-report/rotary-factor-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class RotaryFactorReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `rotaryFactorReportControllerFindAll()` */
    static readonly RotaryFactorReportControllerFindAllPath = "/amims/rotary_factor/rotary_factor_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `rotaryFactorReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    rotaryFactorReportControllerFindAll$Response(params: RotaryFactorReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsRotaryFactorReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `rotaryFactorReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    rotaryFactorReportControllerFindAll(params: RotaryFactorReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsRotaryFactorReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `rotaryFactorReportControllerFindOne()` */
    static readonly RotaryFactorReportControllerFindOnePath = "/amims/rotary_factor/rotary_factor_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `rotaryFactorReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    rotaryFactorReportControllerFindOne$Response(params: RotaryFactorReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsRotaryFactorReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `rotaryFactorReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    rotaryFactorReportControllerFindOne(params: RotaryFactorReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsRotaryFactorReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RotaryFactorReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RotaryFactorReportService>;
}
