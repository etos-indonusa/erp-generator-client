import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartInstallReportDto } from '../models/amims-part-install-report-dto';
import { PartInstallReportControllerFindAll$Params } from '../fn/part-install-report/part-install-report-controller-find-all';
import { PartInstallReportControllerFindOne$Params } from '../fn/part-install-report/part-install-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PartInstallReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partInstallReportControllerFindAll()` */
    static readonly PartInstallReportControllerFindAllPath = "/amims/part_install/part_install_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partInstallReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partInstallReportControllerFindAll$Response(params: PartInstallReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartInstallReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partInstallReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partInstallReportControllerFindAll(params: PartInstallReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartInstallReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `partInstallReportControllerFindOne()` */
    static readonly PartInstallReportControllerFindOnePath = "/amims/part_install/part_install_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partInstallReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    partInstallReportControllerFindOne$Response(params: PartInstallReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartInstallReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partInstallReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partInstallReportControllerFindOne(params: PartInstallReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartInstallReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartInstallReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartInstallReportService>;
}
