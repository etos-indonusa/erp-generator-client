import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsLifeTimeLimitReportDto } from '../models/amims-life-time-limit-report-dto';
import { LifeTimeLimitReportControllerFindAll$Params } from '../fn/life-time-limit-report/life-time-limit-report-controller-find-all';
import { LifeTimeLimitReportControllerFindOne$Params } from '../fn/life-time-limit-report/life-time-limit-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class LifeTimeLimitReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `lifeTimeLimitReportControllerFindAll()` */
    static readonly LifeTimeLimitReportControllerFindAllPath = "/amims/life_time_limit/life_time_limit_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `lifeTimeLimitReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    lifeTimeLimitReportControllerFindAll$Response(params: LifeTimeLimitReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLifeTimeLimitReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `lifeTimeLimitReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    lifeTimeLimitReportControllerFindAll(params: LifeTimeLimitReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsLifeTimeLimitReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `lifeTimeLimitReportControllerFindOne()` */
    static readonly LifeTimeLimitReportControllerFindOnePath = "/amims/life_time_limit/life_time_limit_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `lifeTimeLimitReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    lifeTimeLimitReportControllerFindOne$Response(params: LifeTimeLimitReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLifeTimeLimitReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `lifeTimeLimitReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    lifeTimeLimitReportControllerFindOne(params: LifeTimeLimitReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsLifeTimeLimitReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LifeTimeLimitReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LifeTimeLimitReportService>;
}
