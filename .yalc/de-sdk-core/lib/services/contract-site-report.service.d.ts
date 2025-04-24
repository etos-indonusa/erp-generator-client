import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ContractSiteReportControllerFindAll$Params } from '../fn/contract-site-report/contract-site-report-controller-find-all';
import { ContractSiteReportControllerFindOne$Params } from '../fn/contract-site-report/contract-site-report-controller-find-one';
import { PelangganContractSiteReportDto } from '../models/pelanggan-contract-site-report-dto';
import * as i0 from "@angular/core";
export declare class ContractSiteReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `contractSiteReportControllerFindAll()` */
    static readonly ContractSiteReportControllerFindAllPath = "/auth/contract_site/contract_site_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `contractSiteReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    contractSiteReportControllerFindAll$Response(params: ContractSiteReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganContractSiteReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `contractSiteReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    contractSiteReportControllerFindAll(params: ContractSiteReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganContractSiteReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `contractSiteReportControllerFindOne()` */
    static readonly ContractSiteReportControllerFindOnePath = "/auth/contract_site/contract_site_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `contractSiteReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    contractSiteReportControllerFindOne$Response(params: ContractSiteReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractSiteReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `contractSiteReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    contractSiteReportControllerFindOne(params: ContractSiteReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractSiteReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContractSiteReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ContractSiteReportService>;
}
