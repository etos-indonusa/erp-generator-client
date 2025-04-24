import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganContractJenisDto } from '../../models/pelanggan-contract-jenis-dto';
export interface ContractJenisControllerUpdate$Params {
    id: string;
    body: PelangganContractJenisDto;
}
export declare function contractJenisControllerUpdate(http: HttpClient, rootUrl: string, params: ContractJenisControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganContractJenisDto;
}>>;
export declare namespace contractJenisControllerUpdate {
    var PATH: string;
}
