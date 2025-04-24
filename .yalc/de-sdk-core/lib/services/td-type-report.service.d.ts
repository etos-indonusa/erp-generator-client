import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsTdTypeReportDto } from '../models/amims-td-type-report-dto';
import { TdTypeReportControllerFindAll$Params } from '../fn/td-type-report/td-type-report-controller-find-all';
import { TdTypeReportControllerFindOne$Params } from '../fn/td-type-report/td-type-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class TdTypeReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `tdTypeReportControllerFindAll()` */
    static readonly TdTypeReportControllerFindAllPath = "/amims/td_type/td_type_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdTypeReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdTypeReportControllerFindAll$Response(params: TdTypeReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTdTypeReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdTypeReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    tdTypeReportControllerFindAll(params: TdTypeReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsTdTypeReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `tdTypeReportControllerFindOne()` */
    static readonly TdTypeReportControllerFindOnePath = "/amims/td_type/td_type_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `tdTypeReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdTypeReportControllerFindOne$Response(params: TdTypeReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdTypeReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `tdTypeReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    tdTypeReportControllerFindOne(params: TdTypeReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsTdTypeReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TdTypeReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TdTypeReportService>;
}
