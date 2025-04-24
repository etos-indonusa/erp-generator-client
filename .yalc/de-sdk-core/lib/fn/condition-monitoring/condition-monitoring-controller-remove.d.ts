import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsConditionMonitoringDto } from '../../models/amims-condition-monitoring-dto';
export interface ConditionMonitoringControllerRemove$Params {
    id: string;
}
export declare function conditionMonitoringControllerRemove(http: HttpClient, rootUrl: string, params: ConditionMonitoringControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsConditionMonitoringDto;
}>>;
export declare namespace conditionMonitoringControllerRemove {
    var PATH: string;
}
