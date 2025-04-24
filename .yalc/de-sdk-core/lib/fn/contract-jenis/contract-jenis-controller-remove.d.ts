import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganContractJenisDto } from '../../models/pelanggan-contract-jenis-dto';
export interface ContractJenisControllerRemove$Params {
    id: string;
}
export declare function contractJenisControllerRemove(http: HttpClient, rootUrl: string, params: ContractJenisControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganContractJenisDto;
}>>;
export declare namespace contractJenisControllerRemove {
    var PATH: string;
}
