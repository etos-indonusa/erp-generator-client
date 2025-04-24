import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogProcessReportDto } from '../../models/amims-log-process-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface LogProcessReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function logProcessReportControllerFindAll(http: HttpClient, rootUrl: string, params: LogProcessReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsLogProcessReportDto>;
    'total'?: number;
}>>;
export declare namespace logProcessReportControllerFindAll {
    var PATH: string;
}
