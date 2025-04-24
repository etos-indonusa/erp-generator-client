import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcSelfMaintenanceReportDto } from '../../models/amims-mpc-self-maintenance-report-dto';
export interface MpcSelfMaintenanceReportControllerFindOne$Params {
    id: string;
}
export declare function mpcSelfMaintenanceReportControllerFindOne(http: HttpClient, rootUrl: string, params: MpcSelfMaintenanceReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsMpcSelfMaintenanceReportDto;
}>>;
export declare namespace mpcSelfMaintenanceReportControllerFindOne {
    var PATH: string;
}
