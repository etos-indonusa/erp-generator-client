import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartActypeReportDto } from '../models/amims-part-actype-report-dto';
import { PartActypeReportControllerFindAll$Params } from '../fn/part-actype-report/part-actype-report-controller-find-all';
import { PartActypeReportControllerFindOne$Params } from '../fn/part-actype-report/part-actype-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PartActypeReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partActypeReportControllerFindAll()` */
    static readonly PartActypeReportControllerFindAllPath = "/amims/part_actype/part_actype_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partActypeReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partActypeReportControllerFindAll$Response(params: PartActypeReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartActypeReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partActypeReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partActypeReportControllerFindAll(params: PartActypeReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartActypeReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `partActypeReportControllerFindOne()` */
    static readonly PartActypeReportControllerFindOnePath = "/amims/part_actype/part_actype_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partActypeReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    partActypeReportControllerFindOne$Response(params: PartActypeReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartActypeReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partActypeReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partActypeReportControllerFindOne(params: PartActypeReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartActypeReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartActypeReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartActypeReportService>;
}
