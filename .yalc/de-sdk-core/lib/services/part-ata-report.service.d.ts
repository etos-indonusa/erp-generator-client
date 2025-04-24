import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartAtaReportDto } from '../models/amims-part-ata-report-dto';
import { PartAtaReportControllerFindAll$Params } from '../fn/part-ata-report/part-ata-report-controller-find-all';
import { PartAtaReportControllerFindOne$Params } from '../fn/part-ata-report/part-ata-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PartAtaReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partAtaReportControllerFindAll()` */
    static readonly PartAtaReportControllerFindAllPath = "/amims/part_ata/part_ata_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partAtaReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partAtaReportControllerFindAll$Response(params: PartAtaReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartAtaReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partAtaReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partAtaReportControllerFindAll(params: PartAtaReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartAtaReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `partAtaReportControllerFindOne()` */
    static readonly PartAtaReportControllerFindOnePath = "/amims/part_ata/part_ata_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partAtaReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    partAtaReportControllerFindOne$Response(params: PartAtaReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartAtaReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partAtaReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partAtaReportControllerFindOne(params: PartAtaReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartAtaReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartAtaReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartAtaReportService>;
}
