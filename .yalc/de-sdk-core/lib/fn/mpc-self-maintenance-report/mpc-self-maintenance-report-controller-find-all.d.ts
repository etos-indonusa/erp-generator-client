import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMpcSelfMaintenanceReportDto } from '../../models/amims-mpc-self-maintenance-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface MpcSelfMaintenanceReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function mpcSelfMaintenanceReportControllerFindAll(http: HttpClient, rootUrl: string, params: MpcSelfMaintenanceReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsMpcSelfMaintenanceReportDto>;
    'total'?: number;
}>>;
export declare namespace mpcSelfMaintenanceReportControllerFindAll {
    var PATH: string;
}
