import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganContractSiteDto } from '../../models/pelanggan-contract-site-dto';
export interface ContractSiteControllerFindAll$Params {
    pageIndex?: number;
    pageSize?: number;
    /**
     * JSON.stringify({})
     */
    filter?: string;
    sortKey?: string;
    sortValue?: 'asc' | 'desc';
    /**
     * Array of searchable fields
     */
    search_field?: Array<string>;
    search_keyword?: string;
}
export declare function contractSiteControllerFindAll(http: HttpClient, rootUrl: string, params?: ContractSiteControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<PelangganContractSiteDto>;
    'total'?: number;
}>>;
export declare namespace contractSiteControllerFindAll {
    var PATH: string;
}
