import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganContractJenisDto } from '../../models/pelanggan-contract-jenis-dto';
export interface ContractJenisControllerFindOne$Params {
    id: string;
}
export declare function contractJenisControllerFindOne(http: HttpClient, rootUrl: string, params: ContractJenisControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganContractJenisDto;
}>>;
export declare namespace contractJenisControllerFindOne {
    var PATH: string;
}
