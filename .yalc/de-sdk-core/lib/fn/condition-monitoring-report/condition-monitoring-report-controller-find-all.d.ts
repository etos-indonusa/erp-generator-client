import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsConditionMonitoringReportDto } from '../../models/amims-condition-monitoring-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface ConditionMonitoringReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function conditionMonitoringReportControllerFindAll(http: HttpClient, rootUrl: string, params: ConditionMonitoringReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsConditionMonitoringReportDto>;
    'total'?: number;
}>>;
export declare namespace conditionMonitoringReportControllerFindAll {
    var PATH: string;
}
