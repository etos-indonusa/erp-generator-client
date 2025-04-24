import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
import { PelangganContractReportDto } from '../../models/pelanggan-contract-report-dto';
export interface ContractReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function contractReportControllerFindAll(http: HttpClient, rootUrl: string, params: ContractReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<PelangganContractReportDto>;
    'total'?: number;
}>>;
export declare namespace contractReportControllerFindAll {
    var PATH: string;
}
