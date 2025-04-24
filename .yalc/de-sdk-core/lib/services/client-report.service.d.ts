import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ClientReportControllerFindAll$Params } from '../fn/client-report/client-report-controller-find-all';
import { ClientReportControllerFindOne$Params } from '../fn/client-report/client-report-controller-find-one';
import { PelangganClientReportDto } from '../models/pelanggan-client-report-dto';
import * as i0 from "@angular/core";
export declare class ClientReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `clientReportControllerFindAll()` */
    static readonly ClientReportControllerFindAllPath = "/client_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `clientReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    clientReportControllerFindAll$Response(params: ClientReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganClientReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `clientReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    clientReportControllerFindAll(params: ClientReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganClientReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `clientReportControllerFindOne()` */
    static readonly ClientReportControllerFindOnePath = "/client_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `clientReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    clientReportControllerFindOne$Response(params: ClientReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `clientReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    clientReportControllerFindOne(params: ClientReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganClientReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ClientReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ClientReportService>;
}
