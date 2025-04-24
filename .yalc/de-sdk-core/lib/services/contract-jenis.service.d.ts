import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { ContractJenisControllerCreate$Params } from '../fn/contract-jenis/contract-jenis-controller-create';
import { ContractJenisControllerFindAll$Params } from '../fn/contract-jenis/contract-jenis-controller-find-all';
import { ContractJenisControllerFindOne$Params } from '../fn/contract-jenis/contract-jenis-controller-find-one';
import { ContractJenisControllerRemove$Params } from '../fn/contract-jenis/contract-jenis-controller-remove';
import { ContractJenisControllerUpdate$Params } from '../fn/contract-jenis/contract-jenis-controller-update';
import { PelangganContractJenisDto } from '../models/pelanggan-contract-jenis-dto';
import * as i0 from "@angular/core";
export declare class ContractJenisService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient);
    /** Path part for operation `contractJenisControllerFindAll()` */
    static readonly ContractJenisControllerFindAllPath = "/auth/contract_jenis/contract_jenis";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `contractJenisControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    contractJenisControllerFindAll$Response(params?: ContractJenisControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganContractJenisDto>;
        'total'?: number;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `contractJenisControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    contractJenisControllerFindAll(params?: ContractJenisControllerFindAll$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: Array<PelangganContractJenisDto>;
        'total'?: number;
    }>;
    /** Path part for operation `contractJenisControllerCreate()` */
    static readonly ContractJenisControllerCreatePath = "/auth/contract_jenis/contract_jenis";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `contractJenisControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    contractJenisControllerCreate$Response(params: ContractJenisControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractJenisDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `contractJenisControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    contractJenisControllerCreate(params: ContractJenisControllerCreate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractJenisDto;
    }>;
    /** Path part for operation `contractJenisControllerFindOne()` */
    static readonly ContractJenisControllerFindOnePath = "/auth/contract_jenis/contract_jenis/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `contractJenisControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    contractJenisControllerFindOne$Response(params: ContractJenisControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractJenisDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `contractJenisControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    contractJenisControllerFindOne(params: ContractJenisControllerFindOne$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractJenisDto;
    }>;
    /** Path part for operation `contractJenisControllerUpdate()` */
    static readonly ContractJenisControllerUpdatePath = "/auth/contract_jenis/contract_jenis/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `contractJenisControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    contractJenisControllerUpdate$Response(params: ContractJenisControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractJenisDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `contractJenisControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    contractJenisControllerUpdate(params: ContractJenisControllerUpdate$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractJenisDto;
    }>;
    /** Path part for operation `contractJenisControllerRemove()` */
    static readonly ContractJenisControllerRemovePath = "/auth/contract_jenis/contract_jenis/{id}";
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `contractJenisControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    contractJenisControllerRemove$Response(params: ContractJenisControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractJenisDto;
    }>>;
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `contractJenisControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    contractJenisControllerRemove(params: ContractJenisControllerRemove$Params, context?: HttpContext): Observable<{
        'code'?: number;
        'pesan'?: string;
        'data'?: PelangganContractJenisDto;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContractJenisService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ContractJenisService>;
}
