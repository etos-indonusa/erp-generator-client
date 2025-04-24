import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLastMaintenanceReportDto } from '../../models/amims-last-maintenance-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface LastMaintenanceReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function lastMaintenanceReportControllerFindAll(http: HttpClient, rootUrl: string, params: LastMaintenanceReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsLastMaintenanceReportDto>;
    'total'?: number;
}>>;
export declare namespace lastMaintenanceReportControllerFindAll {
    var PATH: string;
}
