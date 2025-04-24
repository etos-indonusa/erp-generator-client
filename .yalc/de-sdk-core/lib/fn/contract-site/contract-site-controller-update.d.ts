import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganContractSiteDto } from '../../models/pelanggan-contract-site-dto';
export interface ContractSiteControllerUpdate$Params {
    id: string;
    body: PelangganContractSiteDto;
}
export declare function contractSiteControllerUpdate(http: HttpClient, rootUrl: string, params: ContractSiteControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganContractSiteDto;
}>>;
export declare namespace contractSiteControllerUpdate {
    var PATH: string;
}
