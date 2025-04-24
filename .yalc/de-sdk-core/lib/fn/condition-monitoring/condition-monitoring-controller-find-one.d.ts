import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsConditionMonitoringDto } from '../../models/amims-condition-monitoring-dto';
export interface ConditionMonitoringControllerFindOne$Params {
    id: string;
}
export declare function conditionMonitoringControllerFindOne(http: HttpClient, rootUrl: string, params: ConditionMonitoringControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsConditionMonitoringDto;
}>>;
export declare namespace conditionMonitoringControllerFindOne {
    var PATH: string;
}
