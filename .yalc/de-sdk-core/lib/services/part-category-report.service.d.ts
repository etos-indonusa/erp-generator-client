import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartCategoryReportDto } from '../models/amims-part-category-report-dto';
import { PartCategoryReportControllerFindAll$Params } from '../fn/part-category-report/part-category-report-controller-find-all';
import { PartCategoryReportControllerFindOne$Params } from '../fn/part-category-report/part-category-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PartCategoryReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partCategoryReportControllerFindAll()` */
    static readonly PartCategoryReportControllerFindAllPath = "/amims/part_category/part_category_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partCategoryReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partCategoryReportControllerFindAll$Response(params: PartCategoryReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartCategoryReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partCategoryReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partCategoryReportControllerFindAll(params: PartCategoryReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartCategoryReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `partCategoryReportControllerFindOne()` */
    static readonly PartCategoryReportControllerFindOnePath = "/amims/part_category/part_category_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partCategoryReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    partCategoryReportControllerFindOne$Response(params: PartCategoryReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartCategoryReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partCategoryReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partCategoryReportControllerFindOne(params: PartCategoryReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartCategoryReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartCategoryReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartCategoryReportService>;
}
