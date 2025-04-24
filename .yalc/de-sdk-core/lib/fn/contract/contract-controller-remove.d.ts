import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganContractDto } from '../../models/pelanggan-contract-dto';
export interface ContractControllerRemove$Params {
    id: string;
}
export declare function contractControllerRemove(http: HttpClient, rootUrl: string, params: ContractControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganContractDto;
}>>;
export declare namespace contractControllerRemove {
    var PATH: string;
}
