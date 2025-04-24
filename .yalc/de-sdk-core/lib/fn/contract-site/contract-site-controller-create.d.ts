import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganContractSiteDto } from '../../models/pelanggan-contract-site-dto';
export interface ContractSiteControllerCreate$Params {
    body: PelangganContractSiteDto;
}
export declare function contractSiteControllerCreate(http: HttpClient, rootUrl: string, params: ContractSiteControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganContractSiteDto;
}>>;
export declare namespace contractSiteControllerCreate {
    var PATH: string;
}
