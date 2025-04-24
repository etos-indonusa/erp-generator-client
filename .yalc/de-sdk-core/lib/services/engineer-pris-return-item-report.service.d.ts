import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsEngineerPrisReturnItemReportDto } from '../models/amims-engineer-pris-return-item-report-dto';
import { EngineerPrisReturnItemReportControllerFindAll$Params } from '../fn/engineer-pris-return-item-report/engineer-pris-return-item-report-controller-find-all';
import { EngineerPrisReturnItemReportControllerFindOne$Params } from '../fn/engineer-pris-return-item-report/engineer-pris-return-item-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class EngineerPrisReturnItemReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `engineerPrisReturnItemReportControllerFindAll()` */
    static readonly EngineerPrisReturnItemReportControllerFindAllPath = "/amims/engineer_pris_return_item/engineer_pris_return_item_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisReturnItemReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisReturnItemReportControllerFindAll$Response(params: EngineerPrisReturnItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPrisReturnItemReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisReturnItemReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    engineerPrisReturnItemReportControllerFindAll(params: EngineerPrisReturnItemReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsEngineerPrisReturnItemReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `engineerPrisReturnItemReportControllerFindOne()` */
    static readonly EngineerPrisReturnItemReportControllerFindOnePath = "/amims/engineer_pris_return_item/engineer_pris_return_item_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `engineerPrisReturnItemReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisReturnItemReportControllerFindOne$Response(params: EngineerPrisReturnItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisReturnItemReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `engineerPrisReturnItemReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    engineerPrisReturnItemReportControllerFindOne(params: EngineerPrisReturnItemReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsEngineerPrisReturnItemReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EngineerPrisReturnItemReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EngineerPrisReturnItemReportService>;
}
