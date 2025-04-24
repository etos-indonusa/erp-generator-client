import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganContractDto } from '../../models/pelanggan-contract-dto';
export interface ContractControllerUpdate$Params {
    id: string;
    body: PelangganContractDto;
}
export declare function contractControllerUpdate(http: HttpClient, rootUrl: string, params: ContractControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganContractDto;
}>>;
export declare namespace contractControllerUpdate {
    var PATH: string;
}
