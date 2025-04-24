import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogTransferReportDto } from '../../models/amims-log-transfer-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface LogTransferReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function logTransferReportControllerFindAll(http: HttpClient, rootUrl: string, params: LogTransferReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsLogTransferReportDto>;
    'total'?: number;
}>>;
export declare namespace logTransferReportControllerFindAll {
    var PATH: string;
}
