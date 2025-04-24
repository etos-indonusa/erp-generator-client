import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganContractDto } from '../../models/pelanggan-contract-dto';
export interface ContractControllerFindOne$Params {
    id: string;
}
export declare function contractControllerFindOne(http: HttpClient, rootUrl: string, params: ContractControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganContractDto;
}>>;
export declare namespace contractControllerFindOne {
    var PATH: string;
}
