import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ContractControllerCreate$Params } from '../fn/contract/contract-controller-create';
import { ContractControllerFindAll$Params } from '../fn/contract/contract-controller-find-all';
import { ContractControllerFindOne$Params } from '../fn/contract/contract-controller-find-one';
import { ContractControllerRemove$Params } from '../fn/contract/contract-controller-remove';
import { ContractControllerUpdate$Params } from '../fn/contract/contract-controller-update';
import { PelangganContractDto } from '../models/pelanggan-contract-dto';
import * as i0 from "@angular/core";
export declare class ContractService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `contractControllerFindAll()` */
    static readonly ContractControllerFindAllPath = "/pelanggan/contract/contract";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `contractControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    contractControllerFindAll$Response(params?: ContractControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganContractDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `contractControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    contractControllerFindAll(params?: ContractControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganContractDto>;
        'total'?: number;
    }>;
    /** Path part for operation `contractControllerCreate()` */
    static readonly ContractControllerCreatePath = "/pelanggan/contract/contract";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `contractControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    contractControllerCreate$Response(params: ContractControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `contractControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    contractControllerCreate(params: ContractControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractDto;
    }>;
    /** Path part for operation `contractControllerFindOne()` */
    static readonly ContractControllerFindOnePath = "/pelanggan/contract/contract/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `contractControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    contractControllerFindOne$Response(params: ContractControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `contractControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    contractControllerFindOne(params: ContractControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractDto;
    }>;
    /** Path part for operation `contractControllerUpdate()` */
    static readonly ContractControllerUpdatePath = "/pelanggan/contract/contract/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `contractControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    contractControllerUpdate$Response(params: ContractControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `contractControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    contractControllerUpdate(params: ContractControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractDto;
    }>;
    /** Path part for operation `contractControllerRemove()` */
    static readonly ContractControllerRemovePath = "/pelanggan/contract/contract/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `contractControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    contractControllerRemove$Response(params: ContractControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `contractControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    contractControllerRemove(params: ContractControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContractService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ContractService>;
}
