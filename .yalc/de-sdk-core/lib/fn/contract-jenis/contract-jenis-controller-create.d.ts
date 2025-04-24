import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganContractJenisDto } from '../../models/pelanggan-contract-jenis-dto';
export interface ContractJenisControllerCreate$Params {
    body: PelangganContractJenisDto;
}
export declare function contractJenisControllerCreate(http: HttpClient, rootUrl: string, params: ContractJenisControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganContractJenisDto;
}>>;
export declare namespace contractJenisControllerCreate {
    var PATH: string;
}
