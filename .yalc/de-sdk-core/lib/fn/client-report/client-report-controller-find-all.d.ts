import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
import { PelangganClientReportDto } from '../../models/pelanggan-client-report-dto';
export interface ClientReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function clientReportControllerFindAll(http: HttpClient, rootUrl: string, params: ClientReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<PelangganClientReportDto>;
    'total'?: number;
}>>;
export declare namespace clientReportControllerFindAll {
    var PATH: string;
}
