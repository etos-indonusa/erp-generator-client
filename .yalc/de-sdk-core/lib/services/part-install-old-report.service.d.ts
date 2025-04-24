import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsPartInstallOldReportDto } from '../models/amims-part-install-old-report-dto';
import { PartInstallOldReportControllerFindAll$Params } from '../fn/part-install-old-report/part-install-old-report-controller-find-all';
import { PartInstallOldReportControllerFindOne$Params } from '../fn/part-install-old-report/part-install-old-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class PartInstallOldReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `partInstallOldReportControllerFindAll()` */
    static readonly PartInstallOldReportControllerFindAllPath = "/amims/part_install_old/part_install_old_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partInstallOldReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partInstallOldReportControllerFindAll$Response(params: PartInstallOldReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartInstallOldReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partInstallOldReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    partInstallOldReportControllerFindAll(params: PartInstallOldReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsPartInstallOldReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `partInstallOldReportControllerFindOne()` */
    static readonly PartInstallOldReportControllerFindOnePath = "/amims/part_install_old/part_install_old_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `partInstallOldReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    partInstallOldReportControllerFindOne$Response(params: PartInstallOldReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartInstallOldReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `partInstallOldReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    partInstallOldReportControllerFindOne(params: PartInstallOldReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsPartInstallOldReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PartInstallOldReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PartInstallOldReportService>;
}
