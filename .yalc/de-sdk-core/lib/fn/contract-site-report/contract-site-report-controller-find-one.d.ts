import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganContractSiteReportDto } from '../../models/pelanggan-contract-site-report-dto';
export interface ContractSiteReportControllerFindOne$Params {
    id: string;
}
export declare function contractSiteReportControllerFindOne(http: HttpClient, rootUrl: string, params: ContractSiteReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganContractSiteReportDto;
}>>;
export declare namespace contractSiteReportControllerFindOne {
    var PATH: string;
}
