import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogTsnTsoReportDto } from '../../models/amims-log-tsn-tso-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface LogTsnTsoReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function logTsnTsoReportControllerFindAll(http: HttpClient, rootUrl: string, params: LogTsnTsoReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsLogTsnTsoReportDto>;
    'total'?: number;
}>>;
export declare namespace logTsnTsoReportControllerFindAll {
    var PATH: string;
}
