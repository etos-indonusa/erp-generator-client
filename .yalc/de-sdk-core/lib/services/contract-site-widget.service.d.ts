import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ContractSiteWidgetControllerFindAll$Params } from '../fn/contract-site-widget/contract-site-widget-controller-find-all';
import { PelangganContractSiteWidgetDto } from '../models/pelanggan-contract-site-widget-dto';
import * as i0 from "@angular/core";
export declare class ContractSiteWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `contractSiteWidgetControllerFindAll()` */
    static readonly ContractSiteWidgetControllerFindAllPath = "/auth/contract_site/contract_site_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `contractSiteWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    contractSiteWidgetControllerFindAll$Response(params: ContractSiteWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganContractSiteWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `contractSiteWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    contractSiteWidgetControllerFindAll(params: ContractSiteWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganContractSiteWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContractSiteWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ContractSiteWidgetService>;
}
