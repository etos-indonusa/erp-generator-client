import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganContractJenisDto } from '../../models/pelanggan-contract-jenis-dto';
export interface ContractJenisControllerFindAll$Params {
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
export declare function contractJenisControllerFindAll(http: HttpClient, rootUrl: string, params?: ContractJenisControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<PelangganContractJenisDto>;
    'total'?: number;
}>>;
export declare namespace contractJenisControllerFindAll {
    var PATH: string;
}
