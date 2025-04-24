import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganContractDto } from '../../models/pelanggan-contract-dto';
export interface ContractControllerCreate$Params {
    body: PelangganContractDto;
}
export declare function contractControllerCreate(http: HttpClient, rootUrl: string, params: ContractControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganContractDto;
}>>;
export declare namespace contractControllerCreate {
    var PATH: string;
}
