import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerPrisItemReportDto } from '../models/amims-engineer-pris-item-report-dto';
import { EngineerPrisItemReportControllerFindAll$Params } from '../fn/engineer-pris-item-report/engineer-pris-item-report-controller-find-all';
import { EngineerPrisItemReportControllerFindOne$Params } from '../fn/engineer-pris-item-report/engineer-pris-item-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class EngineerPrisItemReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerPrisItemReportControllerFindAll()` */
    static readonly EngineerPrisItemReportControllerFindAllPath = "/amims/engineer_pris_item/engineer_pris_item_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisItemReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisItemReportControllerFindAll$Response(params: EngineerPrisItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPrisItemReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisItemReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisItemReportControllerFindAll(params: EngineerPrisItemReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPrisItemReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `engineerPrisItemReportControllerFindOne()` */
    static readonly EngineerPrisItemReportControllerFindOnePath = "/amims/engineer_pris_item/engineer_pris_item_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisItemReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisItemReportControllerFindOne$Response(params: EngineerPrisItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisItemReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisItemReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisItemReportControllerFindOne(params: EngineerPrisItemReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisItemReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerPrisItemReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerPrisItemReportService>;
}
