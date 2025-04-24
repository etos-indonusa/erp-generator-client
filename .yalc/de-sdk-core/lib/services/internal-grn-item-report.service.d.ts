import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { AmimsInternalGrnItemReportDto } from '../models/amims-internal-grn-item-report-dto';
import { InternalGrnItemReportControllerFindAll$Params } from '../fn/internal-grn-item-report/internal-grn-item-report-controller-find-all';
import { InternalGrnItemReportControllerFindOne$Params } from '../fn/internal-grn-item-report/internal-grn-item-report-controller-find-one';
import * as i0 from "@angular/core";
export declare class InternalGrnItemReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `internalGrnItemReportControllerFindAll()` */
    static readonly InternalGrnItemReportControllerFindAllPath = "/amims/internal_grn_item/internal_grn_item_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `internalGrnItemReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    internalGrnItemReportControllerFindAll$Response(params: InternalGrnItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsInternalGrnItemReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `internalGrnItemReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    internalGrnItemReportControllerFindAll(params: InternalGrnItemReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<AmimsInternalGrnItemReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `internalGrnItemReportControllerFindOne()` */
    static readonly InternalGrnItemReportControllerFindOnePath = "/amims/internal_grn_item/internal_grn_item_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `internalGrnItemReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    internalGrnItemReportControllerFindOne$Response(params: InternalGrnItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsInternalGrnItemReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `internalGrnItemReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    internalGrnItemReportControllerFindOne(params: InternalGrnItemReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: AmimsInternalGrnItemReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<InternalGrnItemReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InternalGrnItemReportService>;
}
