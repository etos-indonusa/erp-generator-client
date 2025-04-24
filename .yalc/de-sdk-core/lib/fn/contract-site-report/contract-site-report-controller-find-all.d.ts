import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
import { PelangganContractSiteReportDto } from '../../models/pelanggan-contract-site-report-dto';
export interface ContractSiteReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function contractSiteReportControllerFindAll(http: HttpClient, rootUrl: string, params: ContractSiteReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<PelangganContractSiteReportDto>;
    'total'?: number;
}>>;
export declare namespace contractSiteReportControllerFindAll {
    var PATH: string;
}
