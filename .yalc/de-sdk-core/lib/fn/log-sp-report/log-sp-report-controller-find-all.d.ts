import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLogSpReportDto } from '../../models/amims-log-sp-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface LogSpReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function logSpReportControllerFindAll(http: HttpClient, rootUrl: string, params: LogSpReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsLogSpReportDto>;
    'total'?: number;
}>>;
export declare namespace logSpReportControllerFindAll {
    var PATH: string;
}
