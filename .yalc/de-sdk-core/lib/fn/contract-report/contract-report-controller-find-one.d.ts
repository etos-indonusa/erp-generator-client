import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganContractReportDto } from '../../models/pelanggan-contract-report-dto';
export interface ContractReportControllerFindOne$Params {
    id: string;
}
export declare function contractReportControllerFindOne(http: HttpClient, rootUrl: string, params: ContractReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganContractReportDto;
}>>;
export declare namespace contractReportControllerFindOne {
    var PATH: string;
}
