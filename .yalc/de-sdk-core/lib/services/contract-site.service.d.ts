import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ContractSiteControllerCreate$Params } from '../fn/contract-site/contract-site-controller-create';
import { ContractSiteControllerFindAll$Params } from '../fn/contract-site/contract-site-controller-find-all';
import { ContractSiteControllerFindOne$Params } from '../fn/contract-site/contract-site-controller-find-one';
import { ContractSiteControllerRemove$Params } from '../fn/contract-site/contract-site-controller-remove';
import { ContractSiteControllerUpdate$Params } from '../fn/contract-site/contract-site-controller-update';
import { PelangganContractSiteDto } from '../models/pelanggan-contract-site-dto';
import * as i0 from "@angular/core";
export declare class ContractSiteService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `contractSiteControllerFindAll()` */
    static readonly ContractSiteControllerFindAllPath = "/auth/contract_site/contract_site";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `contractSiteControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    contractSiteControllerFindAll$Response(params?: ContractSiteControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganContractSiteDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `contractSiteControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    contractSiteControllerFindAll(params?: ContractSiteControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganContractSiteDto>;
        'total'?: number;
    }>;
    /** Path part for operation `contractSiteControllerCreate()` */
    static readonly ContractSiteControllerCreatePath = "/auth/contract_site/contract_site";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `contractSiteControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    contractSiteControllerCreate$Response(params: ContractSiteControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractSiteDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `contractSiteControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    contractSiteControllerCreate(params: ContractSiteControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractSiteDto;
    }>;
    /** Path part for operation `contractSiteControllerFindOne()` */
    static readonly ContractSiteControllerFindOnePath = "/auth/contract_site/contract_site/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `contractSiteControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    contractSiteControllerFindOne$Response(params: ContractSiteControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractSiteDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `contractSiteControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    contractSiteControllerFindOne(params: ContractSiteControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractSiteDto;
    }>;
    /** Path part for operation `contractSiteControllerUpdate()` */
    static readonly ContractSiteControllerUpdatePath = "/auth/contract_site/contract_site/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `contractSiteControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    contractSiteControllerUpdate$Response(params: ContractSiteControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractSiteDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `contractSiteControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    contractSiteControllerUpdate(params: ContractSiteControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractSiteDto;
    }>;
    /** Path part for operation `contractSiteControllerRemove()` */
    static readonly ContractSiteControllerRemovePath = "/auth/contract_site/contract_site/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `contractSiteControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    contractSiteControllerRemove$Response(params: ContractSiteControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractSiteDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `contractSiteControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    contractSiteControllerRemove(params: ContractSiteControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractSiteDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContractSiteService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ContractSiteService>;
}
