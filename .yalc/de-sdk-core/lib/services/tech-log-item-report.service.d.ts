import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTechLogItemReportDto } from '../models/amims-tech-log-item-report-dto';
import { TechLogItemReportControllerFindAll$Params } from '../fn/tech-log-item-report/tech-log-item-report-controller-find-all';
import { TechLogItemReportControllerFindOne$Params } from '../fn/tech-log-item-report/tech-log-item-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class TechLogItemReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `techLogItemReportControllerFindAll()` */
    static readonly TechLogItemReportControllerFindAllPath = "/amims/tech_log_item/tech_log_item_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogItemReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogItemReportControllerFindAll$Response(params: TechLogItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogItemReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogItemReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    techLogItemReportControllerFindAll(params: TechLogItemReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTechLogItemReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `techLogItemReportControllerFindOne()` */
    static readonly TechLogItemReportControllerFindOnePath = "/amims/tech_log_item/tech_log_item_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `techLogItemReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogItemReportControllerFindOne$Response(params: TechLogItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogItemReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `techLogItemReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    techLogItemReportControllerFindOne(params: TechLogItemReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTechLogItemReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TechLogItemReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TechLogItemReportService>;
}
