import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsMaintenanceReportDto } from '../../models/amims-maintenance-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface MaintenanceReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function maintenanceReportControllerFindAll(http: HttpClient, rootUrl: string, params: MaintenanceReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsMaintenanceReportDto>;
    'total'?: number;
}>>;
export declare namespace maintenanceReportControllerFindAll {
    var PATH: string;
}
