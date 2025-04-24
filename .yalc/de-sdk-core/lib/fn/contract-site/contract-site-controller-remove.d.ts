import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganContractSiteDto } from '../../models/pelanggan-contract-site-dto';
export interface ContractSiteControllerRemove$Params {
    id: string;
}
export declare function contractSiteControllerRemove(http: HttpClient, rootUrl: string, params: ContractSiteControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganContractSiteDto;
}>>;
export declare namespace contractSiteControllerRemove {
    var PATH: string;
}
