import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ContractWidgetControllerFindAll$Params } from '../fn/contract-widget/contract-widget-controller-find-all';
import { PelangganContractWidgetDto } from '../models/pelanggan-contract-widget-dto';
import * as i0 from "@angular/core";
export declare class ContractWidgetService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `contractWidgetControllerFindAll()` */
    static readonly ContractWidgetControllerFindAllPath = "/pelanggan/contract/contract_widget";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `contractWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    contractWidgetControllerFindAll$Response(params: ContractWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganContractWidgetDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `contractWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    contractWidgetControllerFindAll(params: ContractWidgetControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganContractWidgetDto>;
        'total'?: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContractWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ContractWidgetService>;
}
