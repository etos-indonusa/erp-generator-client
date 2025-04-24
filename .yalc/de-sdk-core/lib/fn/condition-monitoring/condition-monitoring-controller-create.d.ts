import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsConditionMonitoringDto } from '../../models/amims-condition-monitoring-dto';
export interface ConditionMonitoringControllerCreate$Params {
    body: AmimsConditionMonitoringDto;
}
export declare function conditionMonitoringControllerCreate(http: HttpClient, rootUrl: string, params: ConditionMonitoringControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsConditionMonitoringDto;
}>>;
export declare namespace conditionMonitoringControllerCreate {
    var PATH: string;
}
