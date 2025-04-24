import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsConditionMonitoringDto } from '../../models/amims-condition-monitoring-dto';
export interface ConditionMonitoringControllerUpdate$Params {
    id: string;
    body: AmimsConditionMonitoringDto;
}
export declare function conditionMonitoringControllerUpdate(http: HttpClient, rootUrl: string, params: ConditionMonitoringControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsConditionMonitoringDto;
}>>;
export declare namespace conditionMonitoringControllerUpdate {
    var PATH: string;
}
