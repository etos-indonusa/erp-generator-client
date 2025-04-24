import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartFigureIndexReportDto } from '../models/amims-part-figure-index-report-dto';
import { PartFigureIndexReportControllerFindAll$Params } from '../fn/part-figure-index-report/part-figure-index-report-controller-find-all';
import { PartFigureIndexReportControllerFindOne$Params } from '../fn/part-figure-index-report/part-figure-index-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PartFigureIndexReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partFigureIndexReportControllerFindAll()` */
    static readonly PartFigureIndexReportControllerFindAllPath = "/amims/part_figure_index/part_figure_index_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partFigureIndexReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partFigureIndexReportControllerFindAll$Response(params: PartFigureIndexReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartFigureIndexReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partFigureIndexReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partFigureIndexReportControllerFindAll(params: PartFigureIndexReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartFigureIndexReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `partFigureIndexReportControllerFindOne()` */
    static readonly PartFigureIndexReportControllerFindOnePath = "/amims/part_figure_index/part_figure_index_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partFigureIndexReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    partFigureIndexReportControllerFindOne$Response(params: PartFigureIndexReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartFigureIndexReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partFigureIndexReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partFigureIndexReportControllerFindOne(params: PartFigureIndexReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartFigureIndexReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartFigureIndexReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartFigureIndexReportService>;
}
