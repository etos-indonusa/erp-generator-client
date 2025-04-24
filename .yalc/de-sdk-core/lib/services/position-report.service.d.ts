import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPositionReportDto } from '../models/amims-position-report-dto';
import { PositionReportControllerFindAll$Params } from '../fn/position-report/position-report-controller-find-all';
import { PositionReportControllerFindOne$Params } from '../fn/position-report/position-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PositionReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `positionReportControllerFindAll()` */
    static readonly PositionReportControllerFindAllPath = "/amims/position/position_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `positionReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    positionReportControllerFindAll$Response(params: PositionReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPositionReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `positionReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    positionReportControllerFindAll(params: PositionReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPositionReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `positionReportControllerFindOne()` */
    static readonly PositionReportControllerFindOnePath = "/amims/position/position_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `positionReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    positionReportControllerFindOne$Response(params: PositionReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPositionReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `positionReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    positionReportControllerFindOne(params: PositionReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPositionReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PositionReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PositionReportService>;
}
