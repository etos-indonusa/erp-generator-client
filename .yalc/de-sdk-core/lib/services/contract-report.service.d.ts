import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ContractReportControllerFindAll$Params } from '../fn/contract-report/contract-report-controller-find-all';
import { ContractReportControllerFindOne$Params } from '../fn/contract-report/contract-report-controller-find-one';
import { PelangganContractReportDto } from '../models/pelanggan-contract-report-dto';
import * as i0 from "@angular/core";
export declare class ContractReportService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `contractReportControllerFindAll()` */
    static readonly ContractReportControllerFindAllPath = "/auth/contract/contract_report/list";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `contractReportControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    contractReportControllerFindAll$Response(params: ContractReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganContractReportDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `contractReportControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    contractReportControllerFindAll(params: ContractReportControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganContractReportDto>;
        'total'?: number;
    }>;
    /** Path part for operation `contractReportControllerFindOne()` */
    static readonly ContractReportControllerFindOnePath = "/auth/contract/contract_report/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `contractReportControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    contractReportControllerFindOne$Response(params: ContractReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractReportDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `contractReportControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    contractReportControllerFindOne(params: ContractReportControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractReportDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContractReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ContractReportService>;
}
