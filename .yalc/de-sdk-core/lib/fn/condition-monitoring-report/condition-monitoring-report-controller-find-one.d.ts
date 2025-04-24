import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsConditionMonitoringReportDto } from '../../models/amims-condition-monitoring-report-dto';
export interface ConditionMonitoringReportControllerFindOne$Params {
    id: string;
}
export declare function conditionMonitoringReportControllerFindOne(http: HttpClient, rootUrl: string, params: ConditionMonitoringReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsConditionMonitoringReportDto;
}>>;
export declare namespace conditionMonitoringReportControllerFindOne {
    var PATH: string;
}
